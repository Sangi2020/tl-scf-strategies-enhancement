import AuroraBackgroundDemo from '@/components/auroraBackground/AuroraDemo';
import ConsultingServiceContent from '@/components/services/ConsultingServicesContent';

const ConsultingServices = () => {
  return (
    <>


      <div className="bg-primary">
        <AuroraBackgroundDemo title={'Consulting Services'} description={'Where Expertise Meets Innovation in Supply Chain Finance'} link={'Learn More'} />
        <ConsultingServiceContent />
      </div>
    </>
  );
};

export default ConsultingServices;