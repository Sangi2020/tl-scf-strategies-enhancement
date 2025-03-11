import React from 'react';
import { LockKeyhole, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import AuroraBackgroundDemo from '@/components/auroraBackground/AuroraDemo';
import TermsConditionSection from '@/components/termsandconditions/TermsConditonSection';
import WaveComponent from '@/components/ui/WaveComponent';
import { CgFileDocument } from "react-icons/cg";

const TermsAndConditionsPage = () => {
    const termsData = [
        {
            title: "1. Agreement to Terms",
            content: "By engaging with SCF Strategies, you agree to comply with these terms and conditions, which govern the relationship between you (the “Client”) and SCF Strategies (the “Service Provider”). If you do not agree to these terms, do not engage our services."
        },
        {
            title: "2. Scope of Services",
            content: [
                "SCF Strategies provides a wide range of SCF advisory and enablement services, including but not limited to:",
                "• Strategic Go-to-Market Planning: Market assessment, sales strategy, and performance tracking for SCF initiatives.",
                "• Solution Audit: Comprehensive reviews of SCF platform performance, feature analysis, and recommendations.",
                "• Platform & Partner Selection: Support in evaluating and selecting suitable SCF technology, origination, and funding partners.",
                "• Accounting Advisory: Guidance on accounting treatment related to SCF and industry best practices.",
                "• Working Capital Analytics: Identifying opportunities to improve working capital through our benchmark analytics.",
                "• Program Design: Designing Supplier Finance programs to optimize results.",
                "• Supplier Onboarding: Managing supplier onboarding via telephone, email, and mail outreach.",
                "• Sales & Operations Enablement: Training sales and operations teams to effectively manage and grow SCF programs.",
                "Each engagement’s specific scope will be outlined in the individual agreement for each Client."
            ]
        },
        {
            title: "3. Client Obligations",
            content: [
                "To ensure smooth delivery of services, the Client agrees to:",
                "• Provide accurate and timely information to SCF Strategies.",
                "• Facilitate access to business data, personnel, and third-party consents as required.",
                "• Act on SCF Strategies’ recommendations in a timely manner."
            ]
        },
        {
            title: "4. Payment Terms",
            content: [
                "All payments are due as outlined in the engagement agreement:",
                "• Fees: Detailed in the engagement agreement and may include one-time or recurring payments.",
                "• Payment Schedule: Payments are due upon receipt of invoices unless specified otherwise.",
                "• Late Payments: Overdue amounts may incur interest at [insert percentage] per month. Non-payment may result in suspension or termination of services."
            ]
        },
        {
            title: "5. Confidentiality",
            content: [
                "Both parties agree to maintain the confidentiality of all non-public information shared during the engagement:",
                "• Non-Disclosure: Information shared by either party cannot be disclosed or used outside the engagement.",
                "• Data Protection: SCF Strategies will adhere to applicable data protection laws when handling the Client’s data."
            ]
        },
        {
            title: "6. Intellectual Property",
            content: [
                "Any deliverables, work products, reports, or materials developed by SCF Strategies during the engagement remain the intellectual property of SCF Strategies unless otherwise agreed upon in writing.",
                "• License to Use: The Client is granted a non-exclusive, non-transferable license to use the deliverables for internal business purposes only."
            ]
        },
        {
            title: "7. Limitation of Liability",
            content: [
                "SCF Strategies will use reasonable skill and care in providing its services. However:",
                "• No Guarantees: SCF Strategies does not guarantee any specific financial outcomes or success from SCF initiatives.",
                "• Limitations: Liability for damages is limited to the total fees paid by the Client in the preceding 12 months.",
                "• No Indirect Liability: SCF Strategies is not liable for indirect or consequential damages such as lost profits or revenues."
            ]
        },
        {
            title: "8. Termination",
            content: [
                "This agreement may be terminated by either party under the following conditions:",
                "• By the Client: The Client may terminate the agreement with 30 days' written notice, provided all outstanding payments are made.",
                "• By SCF Strategies: SCF Strategies may terminate the agreement immediately for non-payment or material breach of contract by the Client.",
                "Upon termination, all work will cease, and outstanding deliverables or invoices will be provided to the Client."
            ]
        },
        {
            title: "9. Amendments",
            content: "SCF Strategies reserves the right to modify or update these terms at any time. Any changes will be communicated to the Client, and continued use of the services implies acceptance of the new terms."
        },
        {
            title: "10. Governing Law and Dispute Resolution",
            content: [
                "This agreement is governed by the laws of [Country/State]. In the event of a dispute, both parties agree to resolve the matter through amicable negotiations.",
                "If unresolved, the dispute will be referred to arbitration in accordance with [Arbitration Rules] conducted in [City, Country]."
            ]
        },
        {
            title: "11. Force Majeure",
            content: "Neither party shall be held liable for delays or failures in performance due to circumstances beyond their control, including natural disasters, war, or government actions."
        },
        {
            title: "12. Introduction of SCF Strategies",
            content: [
                "🌐 Introducing SCF Strategies: Global Expertise in Supply Chain Finance Solutions",
                "At SCF Strategies, we specialize in optimizing Supply Chain Finance (SCF) programs for corporates, financial institutions, and fintechs. With more than 100 successful SCF programs implemented globally, we leverage a combination of best practices, technology, and funding to deliver measurable results.",
                "Our Services include:",
                "• Go-to-Market Strategy: Helping businesses enter and compete in the fast-growing SCF market.",
                "• Solution Audit: Comprehensive review and analysis of SCF platforms and features.",
                "• Platform & Partner Selection: Assistance in choosing the right SCF technology and funding partners.",
                "• Accounting Treatment: Navigating complex accounting treatment related to SCF programs.",
                "• Supplier Onboarding: Seamless management of supplier onboarding to ensure program success.",
                "Partner with SCF Strategies to elevate your SCF program today."
            ]
        },

    ];

    return (
        <div className="min-h-screen bg-primary">
            <AuroraBackgroundDemo
                title="Terms and Conditions"
                description="Understand the terms of our services"
                link={'Learn More'}
            />

            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* <div className="mb-12 text-center">
                    <div className="flex justify-center items-center mb-12">
                        <CgFileDocument className="w-8 h-8 text-blue-600 mr-3" />
                        <h1 className="text-xl md:text-3xl font-bold text-gray-900">
                            Terms and Conditions
                        </h1>
                    </div>
                    <h2 className=" text-lg md:text-2xl font-semibold text-gray-800 mb-4">
                        Supply Chain Finance (SCF) Advisory Services - November 1st, 2024
                    </h2>
                    <p className="text-gray-700 text-lg">
                        Welcome to SCF Strategies, where we specialize in helping businesses maximize the success of their Supply Chain Finance (SCF) programs. By engaging with our advisory services, you agree to the following terms and conditions. Please read them carefully before proceeding.
                    </p>
                </div> */}

              
                    <TermsConditionSection
                        
                    />
             

                <div className="max-w-5xl mx-auto mb-12 text-center">
                    <div className="flex justify-center items-center mb-8">


                        <h2 className="text-2xl font-semibold text-gray-800 ">
                            Agreement Confirmation
                        </h2>
                    </div>
                    <p className="text-gray-700 text-lg">
                        By using our Supply Chain Finance (SCF) Advisory Services, you confirm that you have read, understood, and agree to these Terms and Conditions. For further questions or clarifications
                    </p>
                    <h3 className='text-xl  text-gray-800 my-4'> For further questions or clarifications, please contact us at:
                    </h3>
                    {/* Contact Section */}
                    <div className="space-y-6 mt-4 py-4">
                        <div className="grid grid-cols-1 md:grid-cols-3  gap-6">
                            {/* Email Card */}
                            <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-200 hover:scale-105">
                                <div className="flex flex-col items-center text-center space-y-4">
                                    <div className="p-3 bg-indigo-100 rounded-full">
                                        <Mail className="w-6 h-6 text-indigo-600" />
                                    </div>
                                    <h3 className="font-semibold text-gray-800">Email Us</h3>
                                    <p className="text-gray-600">nsimek@scfstrategies.com</p>
                                </div>
                            </div>

                            {/* Phone Card */}
                            <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-200 hover:scale-105">
                                <div className="flex flex-col items-center text-center space-y-4">
                                    <div className="p-3 bg-indigo-100 rounded-full">
                                        <Phone className="w-6 h-6 text-indigo-600" />
                                    </div>
                                    <h3 className="font-semibold text-gray-800">Call Us</h3>
                                    <p className="text-gray-600">+1 (203) 470-9377</p>
                                </div>
                            </div>

                            {/* Location Card */}
                            <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-200 hover:scale-105">
                                <div className="flex flex-col items-center text-center space-y-4">
                                    <div className="p-3 bg-indigo-100 rounded-full">
                                        <MapPin className="w-6 h-6 text-indigo-600" />
                                    </div>
                                    <h3 className="font-semibold text-gray-800">Visit Us</h3>
                                    <p className="text-gray-600">Bonita Springs, FL</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TermsAndConditionsPage;
