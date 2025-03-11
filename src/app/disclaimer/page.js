import AuroraBackgroundDemo from '@/components/auroraBackground/AuroraDemo.jsx';
import DisclaimerPage from '../../components/DisclaimerPage/DisclaimerPage.jsx';
import WaveComponent from '@/components/ui/WaveComponent.jsx';

export default function Page() {


  return (
    <>
    

      <div className="bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section */}
        <AuroraBackgroundDemo 
          title={'Disclaimer'} 
          description={'Important information about our services'} 
          link={'Learn More'}
        />

        {/* Main Content */}
        <DisclaimerPage />
        {/* <WaveComponent />  */}
      </div>
    </>
  );
}