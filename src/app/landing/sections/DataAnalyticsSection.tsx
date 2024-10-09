import React from 'react'
const InfoBlock = ({ indexOfDesc, content,subhead}: { indexOfDesc: string, content: string,subhead:string }) => (
    <div className='w-[20%] h-1/2 font-thin flex flex-col items-start justify-start text-balance gap-2'>
        <h3 className='font-bold '>{subhead}</h3>
        <p className='font-[500]'>{indexOfDesc}</p>
        <p className='text-[#989B97] w-3/4 text-body'>{content}</p>
    </div>
);
function DataAnalyticsSection() {
    const wordsArray = "Data Historian & Analytics".split(" ");
    const infoBlocks = [
        { indexOfDesc: 'T01',subhead:'Trending', content: 'inimal code and maximum ' },
        { indexOfDesc: 'T02',subhead:'Easy to use',content: 'High performance screens, ' },
        { indexOfDesc: 'T03',subhead:'Clear', content: 'CrafHigh performance screens' }
    ];
  return (
    <section className='w-screen h-[100vh] flex flex-col items-stretch justify-center pt-6 pl-6 pr-6'>
          <div className='w-auto h-full'>
            <div className='w-full h-1/2 flex flex-col items-center justify-end bg-white'>
                <div className='w-full h-1/2 flex flex-col items-center justify-center'>
                <p>Store and Analyze</p>
                <h1 className="font-onsite w-screen md:w-[80%] text-center font-medium tracking-tight text-black">
                    {wordsArray.map((word, index) => (
                        <span key={index} className="word text-black inline-block px-2 font-9xl font-900 pt-4 pb-4">
                            {word}
                        </span>
                    ))}
                </h1>
                </div>
            </div>

            <div className='h-1/2 w-full flex justify-center items-center bg-white border-b-2'>
                <div className='h-1/2 w-full flex items-center justify-center gap-3'>
                    <div className='w-[50%] h-1/2 flex items-start justify-end'>
                        <h2 className='w-[90%] font-[400] '>
                           View every data captured
                        </h2>
                    </div>
                    {infoBlocks.map((block, index) => (
                        <InfoBlock key={index} indexOfDesc={block.indexOfDesc} content={block.content} subhead={block.subhead} />
                    ))}
                </div>
            </div>
          </div>

        </section>
  )
}

export default DataAnalyticsSection