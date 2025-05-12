import nodemailer from 'nodemailer';
import * as XLSX from 'xlsx';
import { promises as fs } from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const {
        title, firstname, middlename, lastname,
        gender, mobileno, postal_address, idtype,
        idno, pin_no, dateofbirth, country,
        city, eimail, company_name, company_certificate

    } = req.body;

    const fullname = `${firstname} ${middlename} ${lastname}`.replace(/\s+/g, ' ').trim();
    
  

    // ✅ Ensure public directory exists
    const publicDir = path.join(process.cwd(), 'public');
    await fs.mkdir(publicDir, { recursive: true });

    const filePath = path.join(publicDir, 'agent_data.xlsx');

    let workbook;
    const fileBuffer = await fs.readFile(filePath).catch(() => null);

    if (fileBuffer) {
      workbook = XLSX.read(fileBuffer, { type: 'buffer' });
    } else {
      workbook = XLSX.utils.book_new();
    }

    let worksheet = workbook.Sheets['Agent Data'];
    if (!worksheet) {
      worksheet = XLSX.utils.aoa_to_sheet([
        [
          'Title', 'FirstName', 'MiddleName', 'LastName',
          'Gender', 'Mobile Number', 'Postal Address', 'Id Type	',
          'Id Number', 'KRA PIN Number', 'Date Of Birth',
          'Country', 'City', 'Email','Company Name', 'Company Certificate'

        ]
      ]);
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Agent Data');
    }

    const newRow = [
       title, firstname, middlename, lastname,
        gender, mobileno, postal_address, idtype,
        idno, pin_no, dateofbirth, country,
        city, eimail, company_name, company_certificate
    ];

    // ✅ Append new row to worksheet
    const existingData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    existingData.push(newRow);
    const updatedWorksheet = XLSX.utils.aoa_to_sheet(existingData);
    workbook.Sheets['Agent Data'] = updatedWorksheet;

    // ✅ Save the Excel file FIRST (even if email fails)
    const updatedBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    await fs.writeFile(filePath, updatedBuffer);
    console.log('✅ Data successfully saved to the Excel file.');

    // ✅ Generate a download URL
    const fileUrl = `/agent_data.xlsx`; // File is stored in the public folder

    // ✅ Send email (but DO NOT block the response if it fails)
    const transporter = nodemailer.createTransport({
      host: 'mail5016.site4now.net',
      port: 465,
      secure: true,
      auth: {
        user: "Agentregistration@birdviewinsurance.com",
        pass: "B!rdv!ew@2024",
      },
    });

    const mailOptions = {
      from: '"Birdview Insurance" <Agentregistration@birdviewinsurance.com>',
      to: ['dgikuma@birdviewinsurance.com'],
      subject: `Updated Agent Details from ${fullname} - ${mobileno}`,
      text: `Please find the updated Excel sheet with all Agent Details.\nDownload it here: ${fileUrl}`,
      attachments: [
        {
          filename: 'agent_data.xlsx',
          content: updatedBuffer,
        },
      ],
    };

    transporter.sendMail(mailOptions)
      .then(() => {
        console.log('✅ Email sent successfully.');
      })
      .catch((emailError) => {
        console.error('❌ Email Sending Failed:', emailError.message);
      });

    // ✅ Respond with the file download URL
    res.status(200).json({
      message: 'Agent Application Form submitted successfully.',
      downloadUrl: fileUrl
    });

  } catch (error) {
    console.error('❌ Full Error Details:', error);
    res.status(500).json({ error: error.message || 'Unknown error occurred' });
  }
}
