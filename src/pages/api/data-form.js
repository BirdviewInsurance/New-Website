import nodemailer from 'nodemailer';
import * as XLSX from 'xlsx';
import { promises as fs } from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    const { 
      agencyName, location, contactPerson, email, mobileno, atendeeRegNo, estimation, disclaimer
    } = req.body;

    // ✅ Ensure public directory exists
    const publicDir = path.join(process.cwd(), 'public');
    await fs.mkdir(publicDir, { recursive: true });

    const filePath = path.join(publicDir, 'dataCollection_data.xlsx');

    let workbook;
    
    // ✅ Check if the Excel file exists
    const fileBuffer = await fs.readFile(filePath).catch(() => null);
    
    if (fileBuffer) {
      // ✅ Load existing workbook
      workbook = XLSX.read(fileBuffer, { type: 'buffer' });
    } else {
      // ✅ Create a new workbook if file does not exist
      workbook = XLSX.utils.book_new();
    }

    // ✅ Get or create the worksheet
    let worksheet;
    if (workbook.Sheets['Agency Data']) {
      worksheet = workbook.Sheets['Agency Data'];
    } else {
      worksheet = XLSX.utils.aoa_to_sheet([
        [
          'Agency Name', 'Location', 'Contact Person','Email', 'Phone Number', 'Attendee Registration No',
           'Estimated Number Of People Exported Per Month'
        ]
      ]);
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Agency Data');
    }

    // ✅ Append new row
    const newRow = [
      agencyName, location, contactPerson, email, mobileno, atendeeRegNo, estimation, disclaimer
    ];

    // ✅ Convert worksheet to JSON and append new row
    const existingData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    existingData.push(newRow);
    const updatedWorksheet = XLSX.utils.aoa_to_sheet(existingData);
    workbook.Sheets['Agency Data'] = updatedWorksheet;

    // ✅ Write updated workbook to file
    const updatedBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    await fs.writeFile(filePath, updatedBuffer);

    console.log('✅ Data successfully saved to Excel.');

    // ✅ Email Transporter
    const transporter = nodemailer.createTransport({
      host: 'mail5016.site4now.net',
      port: 465,
      secure: true,
      auth: {
        user: "customerservice@birdviewinsurance.com",
        pass: "B!rdv!ew@2024",
      },
    });

    // ✅ Email Options
    const mailOptions = {
      from: '"Birdview Insurance" <customerservice@birdviewinsurance.com>',
      to: 'customerservice@birdviewinsurance.com',
      subject: `Updated Registration Details from ${agencyName} - ${email}`,
      text: 'Please find the updated Excel sheet with all Registration Details.',
      attachments: [
        {
          filename: 'dataCollection_data.xlsx',
          content: updatedBuffer,
        },
      ],
    };

    try {
      // ✅ Attempt to Send Email
      await transporter.sendMail(mailOptions);
      console.log('✅ Email sent successfully.');
      return res.status(200).json({ message: 'Form sent successfully' });
    } catch (emailError) {
      console.error('❌ Failed to send email:', emailError.message);
      return res.status(200).json({ 
        message: 'Form saved successfully.', 
        emailError: emailError.message 
      });
    }

  } catch (error) {
    console.error('❌ Full Error Details:', error);
    return res.status(500).json({ error: error.message || 'Unknown error occurred' });
  }
}
