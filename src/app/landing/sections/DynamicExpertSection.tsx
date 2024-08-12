import React from 'react';

const expertData = [
  {
    id: 'T01',
    title: 'Debugging',
    description: 'We understand the problem, review system logs, identify issues, and fix them',
  },
  {
    id: 'T02',
    title: 'Migration',
    description: 'We assess system, plan and design, migrate data and graphics, then test and validate',
  },
  {
    id: 'T03',
    title: 'Optimization',
    description: 'We analyze performance, plan and design, optimize code and enhance interfaces',
  },
];

function DynamicExpertSection() {
  return (
    <div className='w-screen h-screen flex flex-col gap-5 items-center justify-start'>
      <div>
        <h1 className='text-4xl font-black'>
          Your dynamic expert
        </h1>
      </div>

      <div className='w-screen h-screen flex flex-col justify-around items-center '>
        {expertData.map((item) => (
          <div key={item.id} className='w-screen flex justify-around items-center p-5  border-t-2'>
            <div className='w-1/4 h-full gap-5 flex items-center justify-start text-center'>
              <span className='font-thin'>{item.id}</span>
              <h2 className='font-thin text-xl'>{item.title}</h2>
            </div>
            <div className='w-1/4 h-full flex items-center justify-start'>
              <p className='text-xl font-thin'>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DynamicExpertSection;
