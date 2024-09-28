import React from 'react';
import { Headphones, HardHat } from 'lucide-react';

// ServiceCard Component
interface ServiceCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => (
  <div className="flex  flex-col items-start h-full  bg-[#EEF3ED]   ">
    <div className="flex h-[80%] justify-center items-center w-full ">
      <Icon className="w-20 h-20  text-gray-700" />
    </div>
    <div className='bg-white h-[20%] w-full'>
        <h3 className="font-[600]">{title}</h3>
        <hr className='w-full h-[.09rem] bg-black' />
        <p className="  text-gray-600">{description}</p>
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
    <div className="h-[120vh] w-screen flex flex-col  items-center justify-start  ">
      <div className='h-full w-[90%] '>
        <div className='h-fit flex justify-center items-center p-5 '>
          <h1 className="font-onsite   text-center">
          On-Time Fixes,<br />
          Just When You Need Them Most.
          </h1>
        </div>
        <div className="h-3/4 grid grid-cols-1  md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
