import { useState } from 'react';
import img from '../images/uxdesignwithoutshadow.jpg.png';
import logo1 from '../images/Vector(6).png'
import logo2 from '../images/Vector(7).png'
import logo3 from '../images/Vector(8).png'
import logo4 from '../images/Vector(9).png'

// declare button type and name

const actions = [
        {name:'UX & Design' , type:'UX & Design'},
        {name:'Marketing' , type:'Marketing'},
        {name:'Product Management' , type:'Product Management'},
        {name:'Engineering' , type:'Engineering'},
        {name:'Consultants' , type:'Consultants'},
        {name:'Agile Coaches' , type:'Agile Coaches'},
        {name:'Sales' , type:'Sales'},
    ]
const BuiltTeams = () => {
    
    const [content , setContent] =useState("UX & Design")

    // onclick function for active and inactive
    
    const btns = document.querySelectorAll('.btn')
    btns.forEach((btn)=>{
       btn.addEventListener('click', ()=>{
        btns.forEach((b)=>{b.classList.remove('active'); b.classList.add('inactive')})
        btn.classList.add('active')
       })
    })

    // button wise content

    const UXDesign =()=> 
    <div className='grid lg:grid-cols-6 grid-cols-1 gap-14 lg:w-[1060px] w-full px-4 py-8 text-[#050038B2]'>
        <div className='col-span-2 w-full lg:w-[360px] pe-5'>
           
           <ul className='font-normal text-[18px] mt-9 me-5'>
            <li><span className='me-3'>&#10003;</span> Build low-fi wireframes</li>
            <li ><span className='me-3 inline-block'>&#10003;</span> <span className=''>Involve stakeholders in the design process</span></li>
            <li><span className='me-3'>&#10003;</span> Run engaging design workshops</li>
            
           </ul>
           
           <p className='font-normal text-sm mt-9 text-[#4262FF]'><a href="#" > Learn more →</a></p>

           <div className='font-normal text-sm mt-9'>
            <p>Integrate your favorite tools</p>
            <div className='mt-5 flex'>
                <img className='me-3' src={logo1} alt="" />
                <img className='me-3' src={logo2} alt="" />
                <img className='me-3' src={logo3} alt="" />
                <img src={logo4} alt="" />
            </div>

           </div>
        </div>
        <div className='col-span-4 w-full lg:w-[700px] lg:ms-5 ms-0'>
             <img src={img} alt=""/>
        </div>
    </div>
    

const Marketing =()=>  <div className='grid grid-cols-6 gap-14 lg:w-[1060px] w-full px-4 py-8 text-[#050038B2]'>
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
            <h1 className="font-bold text-5xl margin-auto text-left leading-[56px] my-9"> Built for all kinds of teams</h1>
            

<div className="w-full">
<ul className="flex flex-wrap text-sm font-medium " id="defaultTab" data-tabs-toggle="#defaultTabContent" role="tablist">

    {/* mapping button from array  */}
   
   {
    actions.map(action=>(
        <li className="me-2">
            <button id={action.type} onClick={()=>{setContent(action.type) }
                }  type="button" role="tab"   className={`w-full h-auto lg:h-12 py-3 px-7 rounded-3xl btn font-normal text-[14px] ${action.type== 'Ux & Design'? "active": "inactive"}`}>{action.name }</button>
            </li>
    ))
   }
            
  
    
    </ul>
    <div id="defaultTabContent">
        {content ==="UX & Design" && <UXDesign/>}
        {content ==="Marketing" && <Marketing/>}
        
        
    </div>
</div>

        </div>
    );
};

export default BuiltTeams;