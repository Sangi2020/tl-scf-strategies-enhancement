import Head from 'next/head';
import Image from 'next/image';
import AdvisoryServicesContent from '../../components/services/AdvisoryServicesContent';
import AuroraBackgroundDemo from '@/components/auroraBackground/AuroraDemo';
import WaveComponent from '@/components/ui/WaveComponent';

const AdvisoryServices = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SCF Strategies",
    "url": "https://www.scfstrategies.com",
    "logo": "https://www.scfstrategies.com/images/logo.png",
    "sameAs": [
      "https://www.facebook.com/SCFStrategies",
      "https://www.instagram.com/SCFStrategies",
      "https://www.linkedin.com/company/scfstrategies",
      "https://www.youtube.com/user/SCFStrategies",
      "https://www.google.com/business/SCFStrategies"
    ]
  };

  return (
    <>


      <div className="bg-primary">
        {/* Hero Section */}
        <AuroraBackgroundDemo title={'Advisory Services'} description={'Elevate Your Supply Chain Finance Strategy'} link={'Learn More'} />

        {/* Main Content */}
        <AdvisoryServicesContent />
        {/* <WaveComponent/ > */}
      </div>
    </>
  );
};

export default AdvisoryServices;