import React from 'react';
import { Headphones, HardHat } from 'lucide-react';

// ServiceCard Component
interface ServiceCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => (
  <div className="flex  flex-col items-start h-full mt-10   bg-[#EEF3ED]   ">
    <div className="flex h-[80%] justify-center items-center w-full ">
      <Icon className="w-20 h-20  text-gray-700" />
    </div>
    <div className='bg-white h-[20%] w-full '>
    <h3 className="text-lg font-semibold mb-1">{title}</h3>
    <hr className='w-full h-1 border-3 border-black' />
    <p className="text-sm  text-gray-600">{description}</p>
   </div>
  </div>
);

// Main Component
const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Headphones,
      title: "Remote Support",
      description: "Real-Time Remote Support: Monitoring and Fixing Problems "
    },
    {
      icon: HardHat,
      title: "Engineer Resourcing",
      description: "Skilled Engineers: Crafting Superior HMI Interfaces"
    },
    {
      icon: Headphones, // You can replace this with another icon if needed
      title: "Annual Maintenance",
      description: "Preventative Care: Monthly HMI Support Through Our Annual Maintenance Contracts"
    }
  ];

  return (
    <div className="min-h-[150vh]  flex items-start justify-center">
      <div className="max-w-screen h-screen w-full p-8 bg-white ">
        <h1 className="font-onsite mt-10 text-[35px] leading-[38px] lg:text-[65px] lg:leading-[62px] font-[500] tracking-[-2px] text-center">
          On-Time Fixes,<br />
          Just When You Need Them Most.
        </h1>
        <div className="grid grid-cols-1 h-[80%] md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
