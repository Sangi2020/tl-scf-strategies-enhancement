'use client';
import React, { useEffect } from 'react';
import AuroraBackgroundDemo from '@/components/auroraBackground/AuroraDemo';
import ContactForm from '@/components/contact/ContactForm';
import { Mail, Phone } from 'lucide-react';
import useCompanyStore from '@/store/useCompanyStore';
// import useCompanyStore from '@/store/companyStore'; // Adjust the import path if necessary

const ContactContent = () => {
  const { companymail, phone, fetchCompanyDetails } = useCompanyStore();

  useEffect(() => {
    fetchCompanyDetails();
  }, [fetchCompanyDetails]);

  return (
    <>
      {/* Hero Section */}
      <AuroraBackgroundDemo title="Contact Us" description="We Love to Hear From You!" link="Learn More" />

      {/* Contact Form Section */}
      <div className="bg-primary max-w-7xl mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10">
            <h2 className="subheading">Get in Touch</h2>
            <p className="paragraph">We are here to help. Reach out anytime.</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-4 py-8">
              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="subheading">Send Us a Message</h2>
                <ContactForm />
              </div>

              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                {/* companymail Card */}
                {companymail && (
                  <a href={`mailto:${companymail}`} className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-200 hover:scale-105">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="p-3 bg-blue-100 rounded-full">
                        <Mail className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-gray-800">mail Us</h3>
                      <p className="text-2xl text-title">{companymail}</p>
                    </div>
                  </a>
                )}

                {/* Phone Card */}
                {phone && (
                  <a href={`tel:${phone}`} className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-200 hover:scale-105">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="p-3 bg-blue-100 rounded-full">
                        <Phone className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-gray-800">Call Us</h3>
                      <p className="text-2xl text-title">{phone}</p>
                    </div>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactContent;
