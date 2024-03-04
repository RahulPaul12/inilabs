import { useState } from 'react';
import img from '../images/Brainstormwithoutshadow.jpg.png';
const actions = [
        {name:'about' , type:'about'},
        {name:'service' , type:'service'},
        {name:'statistics' , type:'statistics'},
    ]

const BuiltWayofWork = () => {
    
    
    const [content , setContent] =useState("about")
    
    const btns = document.querySelectorAll('.btn')
    btns.forEach((btn)=>{
       btn.addEventListener('click', ()=>{
        btns.forEach((b)=>{b.classList.remove('active'); b.classList.add('inactive')})
        btn.classList.add('active')
       })
    })
    const AboutTab =()=> 
    <div className='grid lg:grid-cols-6 grid-cols-1 gap-14 lg:w-[1060px] w-full px-4 py-8 text-[#050038B2]'>
        <div className='col-span-2 w-full lg:w-[360px] pe-5'>
           <p className='font-normal text-sm'>Brainstorming</p>
           
           <p className='font-normal text-sm mt-9'>Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos, drawing capabilities — the list goes on.</p>
           
           <p className='font-normal text-sm mt-9 text-[#4262FF]'><a href="#" > Learn more →</a></p>
        </div>
        <div className='col-span-4 w-full lg:w-[700px] lg:ms-5 ms-0'>
             <img src={img} alt=""/>
        </div>
    </div>
    

const ServiceTab =()=>  <div className='grid grid-cols-6 gap-14 lg:w-[1060px] w-full px-4 py-8 text-[#050038B2]'>
<div className='col-span-2 w-full lg:w-[360px] pe-5'>
   <p className='font-normal text-sm'>Diagramming</p>
   
   <p className='font-normal text-sm mt-9'>Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos, drawing capabilities — the list goes on.</p>
   
   <p className='font-normal text-sm mt-9 text-[#4262FF]'><a href="#" > Learn more →</a></p>
</div>
<div className='col-span-4 w-full lg:w-[700px] ms-5 text-end'>
     <h1>Coming soon ........</h1>
</div>
</div>

const StatiSticsTab = ()=>  <div className='grid grid-cols-6 gap-14 lg:w-[1060px] w-full px-4 py-8 text-[#050038B2]'>
<div className='col-span-2 w-full lg:w-[360px] pe-5'>
   <p className='font-normal text-sm'>Diagramming</p>
   
   <p className='font-normal text-sm mt-9'>Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos, drawing capabilities — the list goes on.</p>
   
   <p className='font-normal text-sm mt-9 text-[#4262FF]'><a href="#" > Learn more →</a></p>
</div>
<div className='col-span-4 w-full lg:w-[700px] ms-5 text-end'>
     <h1>Coming soon ........</h1>
</div>
</div>


    return (
        <div className='container'>
            <h1 className="font-bold text-5xl margin-auto text-left leading-[56px] my-9"> Built for the way you work</h1>
            

<div className="w-full">
<ul className="flex flex-wrap text-sm font-medium " id="defaultTab" data-tabs-toggle="#defaultTabContent" role="tablist">
   
   {
    actions.map(action=>(
        <li className="me-2">
            <button id={action.type} onClick={()=>{setContent(action.type) }
                }  type="button" role="tab"   className={`w-full lg:w-[135px] h-auto lg:h-12 py-3 px-7 rounded-3xl btn font-normal text-[14px] ${action.type== 'about'? "active": "inactive"}`}>Brainstorming</button>
            </li>
    ))
   }
            
  
    
    </ul>
    <div id="defaultTabContent">
        {content ==="about" && <AboutTab/>}
        {content ==="service" && <ServiceTab/>}
        {content ==="statistics" && <StatiSticsTab/>}
        
    </div>
</div>

        </div>
    );
};

export default BuiltWayofWork;