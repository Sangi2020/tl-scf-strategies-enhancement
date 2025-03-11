import React from 'react';
import { motion } from 'framer-motion';
import { LockKeyhole } from 'lucide-react';
import Link from 'next/link';
import AuroraBackgroundDemo from '@/components/auroraBackground/AuroraDemo';
import PrivacyPolicySection from '@/components/privacy-policy/PrivacyPolicySection';
import WaveComponent from '@/components/ui/WaveComponent';
import CustomeButton from '@/components/ui/CustomeButton';



const PrivacyPolicyContent = () => {
  const policyData = [
    {
      title: "1. Information We Collect",
      content: ["Personal Information: Name, email address, phone number, and business details provided through contact forms, registration, or email communication.", "Payment information if engaging in any of our services.", "Non-Personal Information: Data on your interactions with our website, including IP address, browser type, referring website, and pages viewed."]
    },
    {
      title: "2. How We Use Your Information",
      content: ["Service Delivery: To communicate with you, provide the services requested, and respond to inquiries.", "Improvement of Services: To improve our website, services, and offerings based on feedback and user behavior.", "Marketing: With your consent, we may send you marketing communications or updates on our services. You can opt out at any time.", "Legal Compliance: To comply with legal obligations, enforce our policies, and protect our business interests."]
    },
    {
      title: "3. Sharing Your Information",
      content: ["Service Providers: Trusted partners who assist us in operating our website, conducting our business, or servicing clients, as long as they agree to keep this information confidential.", "Legal Obligations: In cases where disclosure is required by law, legal processes, or to protect our rights."]
    },
    {
      title: "4. Data Security",
      content: "We take appropriate security measures to protect your personal data from unauthorized access, disclosure, or destruction. These measures include encryption, secure servers, and access control protocols. However, please be aware that no data transmission over the internet can be guaranteed as 100% secure."
    },
    {
      title: "5. Data Retention",
      content: "We retain your personal data for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law. If you wish to request deletion of your data, you can contact us, and we will remove your data unless we are legally obligated to retain it."
    },
    {
      title: "6. Your Rights",
      content: ["Access: Request access to the personal information we hold about you.", "Rectification: Request correction of inaccurate or incomplete data.", "Deletion: Request deletion of your personal data under certain circumstances.", "Objection: Object to the processing of your data for direct marketing purposes."]
    },
    {
      title: "7. Cookies Policy",
      content: "Our website uses cookies to enhance the user experience and gather information about user activity. Cookies are small files that are placed on your device. You can choose to disable cookies through your browser settings, though some features of the website may not function properly."
    },
    {
      title: "8. Third-Party Links",
      content: "Our website may contain links to third-party websites. These sites have their own privacy policies, and we are not responsible for their practices. We encourage you to review the privacy policies of those sites before sharing any personal information."
    },
    {
      title: "9. Updates to This Policy",
      content: "We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. Any updates will be posted on this page, and the date of the latest revision will be indicated at the top."
    }
  ];

  return (
    <div className="min-h-screen bg-primary">
      <AuroraBackgroundDemo
        title="Privacy Policy"
        description="Know how we handle your data"
        link={'Learn More'}
      />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <div className="flex flex-row justify-center items-center">
            <LockKeyhole className="w-8 h-8 text-blue-600 mr-3" />
            <h1 className="subheading">Privacy Policy</h1>
          </div>

          <h2 className="text-sm md:text-lg text-gray-500 mt-2 mb-8">
            November 1st, 2024
          </h2>

          <p className="paragraph">
            At SCF Strategies, we are committed to protecting your privacy and ensuring the security of your personal information. <br/> This Privacy Policy outlines how we collect, use, and safeguard your data when you interact with our website, services, and communications.
          </p>
        </div>

        {policyData.map((section, index) => (
          <PrivacyPolicySection
            key={index}
            title={section.title}
            content={section.content}
          />
        ))}

        <div className="mt-12 py-8 flex flex-col bg-white  shadow-xl rounded-xl items-center relative z-10">
          <p className="paragraph text-center">
            If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your data, please contact us at:
          </p>
          <CustomeButton title={'Contact Us'} link={'/contact-us'} />

        </div>
      </div>

    </div>
  );
};

export default PrivacyPolicyContent;