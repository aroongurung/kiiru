import Aboutme from '@/components/aboutme';
import TimeLine from '@/components/timeline';


const AboutPage: React.FC = () => {
  // Define events array with the appropriate types
  const events = [
    { date: "August 2024", title: "Software Developer Student", location:"Omnia,Espoo" },
    { date: "August 2024", title: "Parking Management Software",location:"php & Sql Database" },
    { date: "October 2024", title: "Hour Tracking Sysytem Program",location:"Project Integrated with  Azure Cloud"},
    { date: "November 2024", title: "Released Kiiru(Blog) v.1",location:"Nextjs with prisma & Supabase" },
    { date: "January 2025", title: "FullStack Development Student",location:"University of Helsinki" },
  ];

  return (
    
    <section className="pb-24 pt-40">
      <div className='container max-w-4xl'>
        <Aboutme />
        <TimeLine events={events} />
      </div>    
    </section>
  
  );
};

export default AboutPage;
