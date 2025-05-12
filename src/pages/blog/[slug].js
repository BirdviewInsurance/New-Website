import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import MainNavigation from '../pagesComps/Dashboard';
import Footer from '../components/Footer';
import Box from '@mui/material/Box';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

import BackgroundImage from '../components/BackgroundImage';
import AnimationDownToUp from '../pagesComps/components/Animation/AnimationDownToUp';
import AnimationRightToLeft from '../pagesComps/components/Animation/AnimationRightToLeft';

// Blog data
const blogs = [
  {
    title: 'Evacuation & Repatriation Insurance for Kenyans Abroad',
    author: 'Birdview',
    content: `
   <h2 class="text-2xl font-bold text-gray-800 mb-4">Why Every Kenyan Abroad Needs Evacuation & Repatriation Insurance</h2>
      <p class="mb-4">
        For many Kenyans, the dream of working, studying, or settling abroad comes with the promise of better opportunities. 
        However, with these opportunities also come unexpected challenges—medical emergencies, accidents, deportations, or, in the worst cases, loss of life.
      </p>
      <p class="mb-4">
        When such crises arise, the financial and logistical burden of returning home can be overwhelming. 
        That’s where evacuation and repatriation insurance becomes a lifesaver.
      </p>

      <h3 class="text-xl font-semibold text-gray-800 mt-6">What Is Evacuation & Repatriation Insurance?</h3>
      <p class="mb-4">
        Evacuation and repatriation insurance is a specialized cover that ensures Kenyans living abroad can return home swiftly 
        and with dignity in case of emergencies. It provides financial and logistical support for:
      </p>

      <ul class="list-disc pl-6 mb-4 text-gray-700">
        <li>Emergency medical evacuations.</li>
        <li>Deportation-related travel assistance.</li>
        <li>A cash benefit for repatriation of remains in case of death abroad.</li>
        <li>Support for stranded migrants facing unexpected crises.</li>
      </ul>

      <h3 class="text-xl font-semibold text-gray-800 mt-6">Why Is This Important for Kenyans in the Diaspora?</h3>

      <h4 class="text-lg font-semibold text-gray-800 mt-4">1. High Medical Costs Abroad</h4>
      <p class="mb-4">
        Many countries have expensive healthcare systems. A hospital stay or medical evacuation can cost hundreds of thousands 
        of shillings, leaving families struggling to raise funds.
      </p>

      <h4 class="text-lg font-semibold text-gray-800 mt-4">2. Deportation & Visa Issues</h4>
      <p class="mb-4">
        Migrant workers, students, and undocumented Kenyans sometimes face deportation. Without a backup plan, they can be stranded 
        in foreign countries with no clear way home.
      </p>

      <h4 class="text-lg font-semibold text-gray-800 mt-4">3. The Cost of Repatriation Is Astronomical</h4>
      <p class="mb-4">
        Transporting a deceased loved one back to Kenya can cost anywhere between KES 500,000 to KES 2 million. Without insurance, 
        families are forced to rely on fundraising, causing emotional and financial distress.
      </p>

      <h4 class="text-lg font-semibold text-gray-800 mt-4">4. Peace of Mind for Families</h4>
      <p class="mb-4">
        Having a repatriation plan ensures that families are not left scrambling for funds during emergencies. Insurance eliminates 
        uncertainty and provides a dignified and seamless process for returning home.
      </p>

      <h3 class="text-xl font-semibold text-gray-800 mt-6">Who Should Get This Cover?</h3>
      <p class="mb-4">
        If you are a Kenyan working, studying, or residing abroad, especially in regions like the Middle East, Europe, or North America, 
        this cover is essential. It is particularly useful for:
      </p>

      <ul class="list-disc pl-6 mb-4 text-gray-700">
        <li>Migrant workers & domestic workers.</li>
        <li>Students studying abroad.</li>
        <li>Diaspora families with loved ones abroad.</li>
        <li>Individuals working in high-risk locations.</li>
      </ul>

      <h3 class="text-xl font-semibold text-gray-800 mt-6">How to Get Covered</h3>
      <p class="mb-4">
        At <strong>Birdview Insurance</strong>, we specialize in evacuation and repatriation services tailored for Kenyans living abroad. 
        Our plans are affordable, flexible, and designed to ensure no Kenyan is stranded in times of crisis.
      </p>

      <p class="text-gray-800 font-semibold">
        Get covered today! Visit <span class="text-blue-600 cursor-pointer">BirdviewInsurance</span> or contact us for more information.
      </p>
  
  `,
    slug: 'Evacuation & Repatriation Insurance for Kenyans Abroad',
  },
  {
    title: 'How Digital Innovation Is Making Insurance More Accessible in Kenya & Beyond',
    author: 'Birdview',
    content: `<h2 class="text-2xl font-bold text-gray-800 mb-4">How Digital Innovation Is Making Insurance More Accessible in Kenya & Beyond</h2>

<p class="mb-4">
  The insurance industry is rapidly evolving, with digital technology reshaping how policies are bought, managed, and claimed. 
  In Kenya and across Africa, access to insurance has traditionally been slow and bureaucratic, discouraging many from getting covered. 
  However, with digital innovation, the process is becoming more seamless, affordable, and convenient than ever before.
</p>

<h3 class="text-xl font-semibold text-gray-800 mt-6">The Barriers to Insurance Access</h3>
<ul class="list-disc pl-6 mb-4 text-gray-700">
  <li>Lengthy paperwork and approval processes.</li>
  <li>High costs and hidden fees.</li>
  <li>Lack of awareness and accessibility.</li>
  <li>Complex policy terms that are difficult to understand.</li>
</ul>

<h3 class="text-xl font-semibold text-gray-800 mt-6">How Technology Is Changing the Game</h3>

<h4 class="text-lg font-semibold text-gray-800 mt-4">1. QR Code Instant Coverage</h4>
<p class="mb-4">
  At Birdview Microinsurance, getting insured is now as simple as scanning a QR code. The entire sign-up process takes under 4 minutes, making it one of the fastest and most efficient ways to get covered. 
  No need for physical paperwork—everything is done digitally!
</p>

<h4 class="text-lg font-semibold text-gray-800 mt-4">2. Mobile & Online Sign-Ups</h4>
<p class="mb-4">
  More insurers are offering mobile-first solutions, allowing users to purchase and manage policies via their smartphones. 
  Birdview’s platform ensures a seamless experience for customers anywhere in the world.
</p>

<h4 class="text-lg font-semibold text-gray-800 mt-4">3. AI & Automation for Faster Claims Processing</h4>
<p class="mb-4">
  Traditionally, claims processing could take weeks, causing unnecessary delays for policyholders. 
  Digital automation now enables insurers to verify and approve claims in record time, reducing financial strain on customers.
</p>

<h4 class="text-lg font-semibold text-gray-800 mt-4">4. Flexible & Affordable Microinsurance Plans</h4>
<p class="mb-4">
  Digital platforms allow insurers to offer bite-sized, pay-as-you-go policies that cater to different income levels and best of all, a multi-currency payment option. 
  This is particularly beneficial for migrant workers and low-income earners looking for affordable protection.
</p>

<h4 class="text-lg font-semibold text-gray-800 mt-4">5. Blockchain & Secure Digital Records</h4>
<p class="mb-4">
  Insurance fraud has been a major challenge, but blockchain technology ensures policy transparency and security. 
  Digital records prevent loss of important policy documents, allowing easy retrieval whenever needed.
</p>

<h3 class="text-xl font-semibold text-gray-800 mt-6">Why Birdview Is Leading the Digital Insurance Revolution</h3>
<ul class="list-disc pl-6 mb-4 text-gray-700">
  <li>✔ Instant QR Code-Based Coverage – Scan & get insured in under 4 minutes!</li>
  <li>✔ 100% Digital Process – No paperwork, no long wait times.</li>
  <li>✔ Affordable & Flexible Plans – Designed to fit the needs of everyday Kenyans.</li>
  <li>✔ Fast & Transparent Claims Processing – Because time matters during emergencies.</li>
</ul>

<h3 class="text-xl font-semibold text-gray-800 mt-6">The Future of Digital Insurance in Africa</h3>
<p class="mb-4">
  With mobile penetration growing and Insurtech solutions expanding, digital insurance is set to revolutionize financial security across Kenya and beyond. 
  As companies like Birdview Microinsurance continue to innovate, more people will have access to affordable and hassle-free insurance solutions at the tap of a button.
</p>

<h3 class="text-xl font-semibold text-gray-800 mt-6">In a nutshell</h3>
<p class="mb-4">
  Insurance no longer has to be complicated or out of reach. Thanks to digital innovation, getting covered is now as easy as scanning a QR code and signing up in just 4 minutes. 
  With solutions like Birdview Microinsurance, financial security is now faster, simpler, and more accessible for everyone.
</p>

<p class="mb-4">
  Protect yourself today—scan, sign up, and get covered instantly!
</p>
`,
    slug: 'How Digital Innovation Is Making Insurance More Accessible in Kenya & Beyond',
  },
  {
    title: 'Affordable Insurance Solutions for Migrant Workers & Kenyans in the Diaspora',
    author: 'Birdview',
    content: `<h2 class="text-2xl font-bold text-gray-800 mb-4">Affordable Insurance Solutions for Migrant Workers & Kenyans in the Diaspora</h2>

<p class="mb-4">
  Every year, thousands of Kenyans leave home to work in countries across the Middle East, Europe, the U.S., and beyond, seeking better opportunities. 
  While migration offers financial benefits, it also presents unique risks—medical emergencies, job loss, deportation, or even sudden death. 
  Unfortunately, many migrant workers lack a safety net when these challenges arise, leaving their families in financial distress.
</p>

<p class="mb-4">
  This is where affordable insurance solutions tailored for migrant workers and the Kenyan diaspora come in. These plans provide financial protection, 
  ensuring that no Kenyan is left stranded in times of crisis.
</p>

<h3 class="text-xl font-semibold text-gray-800 mt-6">The Common Risks Migrant Workers Face</h3>

<h4 class="text-lg font-semibold text-gray-800 mt-4">1. Unexpected Job Loss & Deportation</h4>
<p class="mb-4">
  Losing a job in a foreign country can leave workers stranded without money for a return ticket. Insurance can help cover emergency travel expenses.
</p>

<h4 class="text-lg font-semibold text-gray-800 mt-4">2. Costly Repatriation & Last Expense Needs</h4>
<p class="mb-4">
  In the unfortunate event of death, repatriating a body back to Kenya can cost between KES 500,000 to KES 2 million. Without insurance, families must rely on fundraising.
</p>

<h4 class="text-lg font-semibold text-gray-800 mt-4">3. Limited Financial Security for Families Back Home</h4>
<p class="mb-4">
  Many migrant workers are the sole providers for their families. Having an insurance cover ensures that their loved ones remain financially secure even if something happens to them.
</p>

<h3 class="text-xl font-semibold text-gray-800 mt-6">Affordable Insurance Solutions from Birdview</h3>

<p class="mb-4">
  At Birdview Microinsurance, we understand the unique challenges of Kenyans working abroad. We offer cost-effective insurance plans tailored to migrant workers and the diaspora, ensuring they have a safety net in times of need.
</p>

<h4 class="text-lg font-semibold text-gray-800 mt-4">1. Evacuation & Repatriation Cover</h4>
<ul class="list-disc pl-6 mb-4 text-gray-700">
  <li>Covers emergency medical evacuations back to Kenya.</li>
  <li>Provides financial support in case of deportation.</li>
  <li>Ensures dignified repatriation of remains in case of death abroad.</li>
</ul>

<h4 class="text-lg font-semibold text-gray-800 mt-4">2. Last Expense Cover</h4>
<ul class="list-disc pl-6 mb-4 text-gray-700">
  <li>Helps to cover costs related to repatriation and funeral expenses.</li>
  <li>Provides financial relief to families dealing with loss.</li>
</ul>

<h4 class="text-lg font-semibold text-gray-800 mt-4">3. Medical Insurance for Migrant Workers to Cover Their Loved Ones Back Home</h4>
<ul class="list-disc pl-6 mb-4 text-gray-700">
  <li>Affordable health insurance plans for Kenyans abroad to cover their loved ones in Kenya.</li>
  <li>Covers hospitalization, outpatient care, and emergency treatments.</li>
</ul>

<h4 class="text-lg font-semibold text-gray-800 mt-4">4. Travel & Job Security Cover</h4>
<ul class="list-disc pl-6 mb-4 text-gray-700">
  <li>Emergency travel assistance in case of job loss or deportation.</li>
  <li>Flight ticket assistance for stranded migrant workers.</li>
</ul>

<h3 class="text-xl font-semibold text-gray-800 mt-6">Why Choose Birdview Insurance?</h3>
<ul class="list-disc pl-6 mb-4 text-gray-700">
  <li>✔ Affordable & Flexible Plans – Designed to fit different budgets and needs.</li>
  <li>✔ Tailored for Kenyans Abroad – We understand the challenges of the diaspora and offer relevant solutions.</li>
  <li>✔ Fast & Hassle-Free Claims – Quick processing to ensure you get help when you need it.</li>
</ul>

<h3 class="text-xl font-semibold text-gray-800 mt-6">How to Get Covered</h3>
<p class="mb-4">
  Getting insured is easy! Visit Birdview Insurance to explore our insurance plans or talk to our team for personalized solutions.
</p>

<p class="mb-4">
  Migrant workers and Kenyans in the diaspora work hard to secure their futures, but unexpected events can disrupt everything. Affordable insurance solutions ensure that you and your loved ones are always protected, no matter where life takes you.
</p>

<p class="mb-4">
  Don’t wait until it’s too late—get covered today!
</p>
`,
    slug: 'Affordable Insurance Solutions for Migrant Workers & Kenyans in the Diaspora',
  },
  {
    title: 'Why Birdview Exists: A Story of Purpose, Protection, and Kenyan Resilience',
    author: 'Birdview',
    content: `<h2 class="text-2xl font-bold text-gray-800 mb-4">Why Birdview Exists: A Story of Purpose, Protection, and Kenyan Resilience</h2>

<h3 class="text-xl font-semibold text-gray-800 mt-6">Who We Are</h3>
<p class="mb-4">
  At Birdview Insurance, we believe protection should be simple, affordable, and accessible—especially when it matters most. 
  That’s why we offer Evacuation, Repatriation, Medical Insurance, and Last Expense Cover to Kenyans both at home and abroad. 
  We’re here to walk with you through life’s toughest moments and provide the peace of mind that every family deserves.
</p>
<p class="mb-4">
  We don’t just sell policies. We build lifelines.
</p>

<h3 class="text-xl font-semibold text-gray-800 mt-6">The Story Behind Birdview</h3>
<p class="mb-4">
  Birdview was born from personal experience. One of our founding leaders spent over 30 years living abroad and witnessed 
  firsthand how devastating it can be when a Kenyan faces a crisis overseas—with no support, no resources, and no plan. 
  From families struggling to repatriate loved ones to individuals deported without assistance, he saw the painful reality 
  that many of our people endure far from home.
</p>
<p class="mb-4">
  That experience sparked the creation of Birdview. Our mission? To ensure no Kenyan is ever alone in an emergency—whether 
  in Nairobi, Doha, London, or anywhere in between.
</p>

<h3 class="text-xl font-semibold text-gray-800 mt-6">Why So Many Kenyans Avoid Insurance</h3>
<p class="mb-4">
  We understand why many people are hesitant about insurance. Here are the most common reasons:
</p>
<ul class="list-disc pl-6 mb-4 text-gray-700">
  <li>Lack of trust: “Will they actually pay when I need them?”</li>
  <li>Complexity: Policies are often hard to understand.</li>
  <li>Perceived irrelevance: “I’m young and healthy, why should I bother?”</li>
  <li>Delayed payouts: People worry they’ll be left waiting—or denied altogether.</li>
  <li>Limited awareness: Many simply don’t know what options exist for them.</li>
</ul>

<h3 class="text-xl font-semibold text-gray-800 mt-6">How Birdview Is Doing Things Differently</h3>
<ul class="list-disc pl-6 mb-4 text-gray-700">
  <li>✅ We cover what really matters — emergency evacuations, repatriation, and critical medical support.</li>
  <li>✅ Get covered in under 4 minutes — via QR code or mobile link.</li>
  <li>✅ Fast claim payouts — no stories, no stress.</li>
  <li>✅ Human-first customer support — clear, warm, and always available.</li>
  <li>✅ Radical transparency — what you see is what you get.</li>
</ul>

<h3 class="text-xl font-semibold text-gray-800 mt-6">Join the Movement</h3>
<p class="mb-4">
  Birdview is more than just an insurance provider—we are a partner in protection for every Kenyan, everywhere. 
  Whether you’re abroad chasing a dream, or back home supporting your family, we’re here to make sure you’re covered with dignity and ease.
</p>
<p class="mb-4">
  Because emergencies don’t give warnings. But together, we can be prepared.
</p>
<p class="mb-4">
  <a href="#" class="text-blue-600 underline">Click here to sign up today.</a>
</p>
`,
    slug: 'Why Birdview Exists: A Story of Purpose, Protection, and Kenyan Resilience',
  },
  {
    title: 'Case Study: The Emotional and Financial Toll of Repatriation – A Call for Preparedness',
    author: 'Birdview',
    content: `<h2 class="text-2xl font-bold text-gray-800 mb-4">Case Study: The Emotional and Financial Toll of Repatriation – A Call for Preparedness</h2>

<h3 class="text-xl font-semibold text-gray-800 mt-6">Introduction</h3>
<p class="mb-4">
  For many Kenyans living and working abroad, the desire to be laid to rest at home remains a deeply emotional and cultural priority. 
  However, the reality of repatriating a body from a foreign country is not only logistically complex—it is also financially crippling.
</p>
<p class="mb-4">
  A recent feature published by <em>The Kenyan Diaspora Media</em> titled, <strong>"To repatriate or not? The high cost and heavy question of bringing loved ones home"</strong> 
  sheds light on the overwhelming burdens families face when tragedy strikes abroad.
</p>

<h3 class="text-xl font-semibold text-gray-800 mt-6">The Heavy Cost of Coming Home</h3>
<p class="mb-4">
  According to the article, repatriating a body can cost between $5,000 and $15,000 (KES 600,000 to 2 million), depending on the country of residence and the logistics involved. These costs often include:
</p>
<ul class="list-disc pl-6 mb-4 text-gray-700">
  <li>Hospital and mortuary charges</li>
  <li>Embalming and casket costs</li>
  <li>International paperwork and death certification</li>
  <li>Air freight for the remains</li>
  <li>Ground transportation upon arrival</li>
</ul>
<p class="mb-4">
  In many cases, the deceased did not have insurance, forcing families to rely on fundraising platforms or diaspora groups—at a time when they are already grieving.
</p>
<p class="mb-4 italic">
  "It is very expensive to bring a body home… families often have no choice but to cremate or bury in the country where the person died," the article notes, highlighting the difficult decisions families must make.
</p>

<h3 class="text-xl font-semibold text-gray-800 mt-6">The Emotional and Cultural Impact</h3>
<p class="mb-4">
  Beyond the financial burden is the emotional and cultural weight. For many African families, funerals are more than a farewell—they are a celebration of life, identity, and heritage. 
  The inability to bring a loved one home can create lasting emotional pain and a sense of unfulfilled duty.
</p>
<p class="mb-4 italic">
  "Not everyone gets the chance to be buried in their ancestral land," shared one diaspora respondent, capturing the heartbreak when repatriation isn’t an option.
</p>
<p class="mb-4">
  This pain is often intensified by the stress of dealing with foreign legal systems, embassies, and logistical challenges—all while coping with loss.
</p>

<h3 class="text-xl font-semibold text-gray-800 mt-6">Birdview’s Response: Last Expense & Repatriation Cover</h3>
<p class="mb-4">
  At Birdview Insurance, we understand this pain deeply. That’s why we created our <strong>Last Expense and Repatriation Cover</strong>, designed specifically for Kenyans in the diaspora. 
  This cover ensures that, in the event of death abroad, families are not left stranded—financially or emotionally.
</p>
<p class="mb-4">
  With a small, manageable premium, Birdview provides:
</p>
<ul class="list-disc pl-6 mb-4 text-gray-700">
  <li>Logistical and financial support for repatriation</li>
  <li>Dignified handling of remains</li>
  <li>Assistance with embassy coordination and international paperwork</li>
  <li>Peace of mind for both the client and their family back home</li>
</ul>
<p class="mb-4">
  We believe no family should have to choose between honoring tradition and surviving financially.
</p>

<h3 class="text-xl font-semibold text-gray-800 mt-6">Why Preparation Matters</h3>
<p class="mb-4">
  The key takeaway from <em>The Kenyan Diaspora Media</em> article is clear: <strong>preparation is protection</strong>. 
  Most families are simply not equipped—logistically or financially—to handle the sudden costs of death abroad.
</p>
<p class="mb-4">
  With Birdview, Kenyans can plan ahead, eliminating uncertainty and lifting the burden from their loved ones. 
  Instead of relying on last-minute fundraisers or embassy interventions, insured families can focus on grieving, healing, and remembering.
</p>

<h3 class="text-xl font-semibold text-gray-800 mt-6">Conclusion</h3>
<p class="mb-4">
  Death is a part of life—but its impact doesn’t have to be devastating. With Birdview’s specialized insurance solutions, 
  Kenyans living abroad can ensure that, no matter where life takes them, they can return home with dignity.
</p>
<p class="mb-4 italic">
  As <em>The Kenyan Diaspora Media</em> rightly stated: “The decision to repatriate is often made out of love. But love, unplanned, can be expensive.”
</p>
<p class="mb-4">
  Let’s plan with love—and with Birdview.
</p>
`,
    slug: 'Case Study: The Emotional and Financial Toll of Repatriation – A Call for Preparedness',
  },
  {
    title: 'Why Traditional Insurance Isn’t Built for Everyone—and How Microinsurance Is Changing the Game',
    author: 'Birdview',
    content: `<h2 class="text-2xl font-bold text-gray-800 mb-4">Why Traditional Insurance Isn’t Built for Everyone—and How Microinsurance Is Changing the Game</h2>

<h3 class="text-xl font-semibold text-gray-800 mt-6">A New Kind of Protection: Microinsurance for the People</h3>
<p class="mb-4">
  Insurance is supposed to offer peace of mind during life’s most uncertain moments. But for many people, especially in low- and middle-income communities, 
  traditional insurance just doesn’t work. It’s not affordable. It’s not accessible. And it doesn’t reflect the realities of everyday life for millions of families.
</p>
<p class="mb-4">
  At Birdview, we believe it’s time to talk about a better way—<strong>microinsurance</strong>. Let’s explore why traditional models fall short, and how microinsurance is rewriting the rules.
</p>

<h3 class="text-xl font-semibold text-gray-800 mt-6">What’s Wrong with Traditional Insurance?</h3>
<p class="mb-4">
  For decades, conventional insurance has served corporations, urban professionals, and higher-income earners. 
  But it often fails to meet the needs of ordinary Kenyans. Here’s why:
</p>
<h4 class="text-lg font-semibold text-gray-800 mt-4">1. It’s Too Expensive</h4>
<p class="mb-4">
  Traditional insurance requires high monthly premiums, making it out of reach for people with irregular or modest income. 
  For many, it’s seen as a luxury—not a necessity.
</p>

<h4 class="text-lg font-semibold text-gray-800 mt-4">2. It’s Complicated</h4>
<p class="mb-4">
  Policies are full of legal jargon and fine print. Customers often don’t know what they’re covered for—or how to file a claim.
</p>

<h4 class="text-lg font-semibold text-gray-800 mt-4">3. It Feels Distant</h4>
<p class="mb-4">
  Insurance offices are concentrated in major towns and cities. If you live in a rural area or work in the informal sector, 
  support is often out of reach.
</p>

<h4 class="text-lg font-semibold text-gray-800 mt-4">4. It Lacks Cultural Relevance</h4>
<p class="mb-4">
  Traditional insurance rarely includes repatriation or last expense cover—products that matter deeply to African families, 
  especially those with loved ones abroad.
</p>

<h4 class="text-lg font-semibold text-gray-800 mt-4">5. People Don’t Trust It</h4>
<p class="mb-4">
  Delayed claims, poor customer service, and stories at payout time have led to widespread mistrust of traditional providers.
</p>

<h3 class="text-xl font-semibold text-gray-800 mt-6">Enter Microinsurance: Insurance for the People</h3>
<p class="mb-4">
  Microinsurance is designed to fill the gap left by traditional models. It’s built for real people, real needs, and real budgets.
</p>

<h4 class="text-lg font-semibold text-gray-800 mt-4">1. It’s Affordable</h4>
<p class="mb-4">
  With low premiums payable weekly, monthly, or in small instalments, microinsurance is ideal for those with fluctuating incomes.
</p>

<h4 class="text-lg font-semibold text-gray-800 mt-4">2. It’s Simple</h4>
<p class="mb-4">
  Clear policies. Fast sign-up. Easy claims. No confusion—just protection when you need it most.
</p>

<h4 class="text-lg font-semibold text-gray-800 mt-4">3. It’s Mobile-First</h4>
<p class="mb-4">
  With Birdview, you can get covered in under 4 minutes using your phone or scanning a QR code. 
  No paperwork, no queues—just access, wherever you are.
</p>

<h4 class="text-lg font-semibold text-gray-800 mt-4">4. It Pays Fast</h4>
<p class="mb-4">
  Our claims process is built for speed. When the unexpected happens, Birdview responds quickly—without stress or stories.
</p>

<h4 class="text-lg font-semibold text-gray-800 mt-4">5. It Reflects Real Life</h4>
<p class="mb-4">
  From emergency evacuations and medical cover to repatriation and last expense, our plans are grounded in the realities 
  faced by everyday Kenyans and diaspora communities.
</p>

<h3 class="text-xl font-semibold text-gray-800 mt-6">Why Choose Birdview Microinsurance?</h3>
<p class="mb-4">
  We’re not just here to sell policies—we’re here to offer peace of mind. Birdview’s microinsurance is built specifically for:
</p>
<ul class="list-disc pl-6 mb-4 text-gray-700">
  <li>Migrant workers</li>
  <li>Families with limited or irregular income</li>
  <li>Students, informal workers, and small business owners</li>
  <li>Kenyans living abroad and diaspora communities</li>
</ul>
<p class="mb-4">
  Using mobile technology, human-first service, and culturally relevant plans, we’re making insurance work the way it should—for everyone.
</p>

<h3 class="text-xl font-semibold text-gray-800 mt-6">The Future is Micro</h3>
<p class="mb-4">
  Traditional insurance has its place—but it’s not for everyone. Microinsurance is flexible, fair, and built on the belief 
  that no one should face life’s hardest moments alone.
</p>
<p class="mb-4">
  At Birdview, we’re proud to be part of this movement—protecting families, empowering communities, 
  and reshaping what insurance can mean for millions.
</p>

<p class="mb-4">
  <a href="https://www.birdviewmicroinsurance.com" class="text-blue-600 underline">Learn more and get covered at birdviewmicroinsurance.com</a>
</p>
`,
    slug: 'Why Traditional Insurance Isn’t Built for Everyone—and How Microinsurance Is Changing the Game',
  },
];

const BlogPostPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (router.isReady) {
      const foundBlog = blogs.find((post) => post.slug === slug);
      setBlog(foundBlog);
    }
  }, [router.isReady, slug]);

  if (!router.isReady) return <div>Loading...</div>;

  if (!blog) return <div>Blog post not found!</div>;

  const currentIndex = blogs.findIndex((post) => post.slug === slug);
  const nextBlog = blogs[currentIndex + 1] || null;
  const prevBlog = blogs[currentIndex - 1] || null;

  return (
    <>
      <MainNavigation />
      <BackgroundImage />
      <div className="relative top-[-40px] left-0 right-0 flex justify-center">
        <div className="bg-white w-full max-w-[1200] p- flex flex-col items-center justify-start overflow-visible rounded-3xl">
          
          {/* Back to Blog Button */}
          <Box sx={{ padding: 1, width: '100%', cursor: 'pointer' }} onClick={() => router.push('/blogs')}>
            <span className="flex items-center hover:text-red-600 transition-colors">
              <DoubleArrowIcon className="text-redCustom" />
              <span className="ml-1 font-semibold">Back to Blog</span>
            </span>
          </Box>

          {/* Blog Content */}
          <AnimationDownToUp index={1}>
            <div
              style={{ boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)' }}
              className="max-w-fit mx-auto bg-white rounded-lg shadow-md overflow-hidden m-4"
            >
              <div className="flex flex-col md:flex-row items-center">
                <div className="flex flex-col border-l-4 border-redCustom p-2">
                  <AnimationRightToLeft index={4}>
                    <h2 className="text-gray-700 text-lg font-bold">{blog.title}</h2>
                    <p className="text-gray-600 italic">By {blog.author}</p>
                    {/* Render the blog content properly */}
                    <div className="mt-5 text-gray-700" dangerouslySetInnerHTML={{ __html: blog.content }} />
                  </AnimationRightToLeft>
                </div>
              </div>
            </div>
          </AnimationDownToUp>

          {/* Navigation Buttons */}
          <div className="flex justify-between w-full mt-4">
            {/* Previous Blog Button */}
            {prevBlog && (
              <Box sx={{ padding: 1, width: '100%', cursor: 'pointer', display: 'flex', justifyContent: 'flex-start' }} onClick={() => router.push(`/blog/${prevBlog.slug}`)}>
                <span className="flex items-center hover:text-red-600 transition-colors">
                  <DoubleArrowIcon className="text-redCustom rotate-180" />
                  <span className="ml-1 font-semibold">Previous Blog</span>
                </span>
              </Box>
            )}

            {/* Next Blog Button */}
            {nextBlog && (
              <Box sx={{ padding: 1, width: '100%', cursor: 'pointer', display: 'flex', justifyContent: 'flex-end' }} onClick={() => router.push(`/blog/${nextBlog.slug}`)}>
                <span className="flex items-center hover:text-red-600 transition-colors">
                  <DoubleArrowIcon className="text-redCustom" />
                  <span className="ml-1 font-semibold">Next Blog</span>
                </span>
              </Box>
            )}
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPostPage;
