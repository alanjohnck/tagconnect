import React from 'react'
import { Rocket, Mountain, Heart, Smile } from 'lucide-react'

function Goals() {

  const contentData = [
    {
      id: 'A01',
      title: 'Develop future proof solutions',
      description: `Developing future-proof solutions means creating HMI and SCADA systems that are designed to adapt and scale with new technologies. We build systems that not only meet current needs but can also easily integrate with future advancements like IoT, cloud computing, and data analytics.

Our solutions are flexible and modular, allowing for easy upgrades and expansions as your business evolves. By using industry standards like MQTT and OPC UA, we ensure our systems can communicate effectively with other platforms and devices, both now and in the future.`,
      icon: Rocket
    },
    {
      id: 'A02',
      title: 'Conquer the impossible',
      description: `It's the core of how we approach HMI and SCADA development. In an industry where challenges are tough and demands keep changing, we are committed to pushing the limits of what's possible.

when we say "conquer the impossible", we mean solving the hardest problems that evolve to deliver the best optimized HMI or SCADA solutions. Whether its debugging or optimizing your existing HMI or SCADA systems. 

HMI and SCADA development, this means building systems that handle even the most demanding environments while giving operators clear and useful insights. We focus on making what seems impossible, like achieving zero downtime.`,
      icon: Mountain
    },
    {
      id: 'A03',
      title: 'Honesty is the best policy',
      description: `We believe that transparency and integrity are essential in building strong and reliable connections. This means being upfront about the capabilities and limitations of our solutions, ensuring that our clients have a clear understanding of what to expect. By maintaining honest communication throughout the development process, we build trust and deliver HMI and SCADA systems that truly meet our clients' needs.

Our commitment to honesty ensures that our solutions are not only effective but also aligned with our clients' goals and expectations.`,
      icon: Heart
    },
    {
      id: 'A04',
      title: 'Employee Wellness',
      description: `We know that when our team is healthy and motivated, they create better, more reliable solutions. By supporting our employees' well-being, we ensure a positive work environment where great ideas and smart work can thrive. This focus on wellness helps us deliver the best, as our team is at their best when building them. 

Taking care of our employees leads to better results for our clients.`,
      icon: Smile
    },
  ];
  
  
  return (
 <div>
    <div className='w-screen h-auto'>
      <div className='w-full h-1/4 flex flex-col'>
        <div className='w-full h-3/4 flex items-center p-8'>
          <h1 className='w-1/2 font-bold '>Our Goals</h1>
        </div>
      </div>
      {contentData.map((item, index) => (
        <div key={index} className='w-screen h-screen flex flex-col'>
          <div className='w-full h-1/2 flex'>
            <div className='w-1/2 h-full flex items-center justify-center'>
               <item.icon size={200} className="text-[#999999]" />
            </div>
            <div className='w-1/2 h-full flex flex-col justify-evenly'>
              <div className='flex items-center '>
                    <p className='mr-2 font-thin text-[#999999]'>{item.id}</p>
                <h2 className='font-bold'>{item.title}</h2>
              </div>
              <p className='w-3/4 font-medium leading-normal m-10'>
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
 </div>
  )
}

export default Goals;