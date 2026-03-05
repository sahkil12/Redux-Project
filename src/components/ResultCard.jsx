import React from 'react';

const ResultCard = ({ item }) => {
     console.log(item);
     return (
          <div className='bg-white text-black w-80 h-80 rounded-xl relative'>
               {item.types === "photo" ? <img loading='lazy' className='w-full object-cover h-full' src={item.src} alt="" /> : ''}
               {item.types === "video" ? <video className='w-full object-cover h-full' autoPlay loop muted src={item.src}></video> : ''}

               <div id='bottom' className='h-[30%] p-2 bottom-0 w-full absolute'>
                    <h1 className='font-semibold text-white font-xl capitalize tracking-wide '>{item.title}</h1>
               </div>

          </div>
     );
};

export default ResultCard;