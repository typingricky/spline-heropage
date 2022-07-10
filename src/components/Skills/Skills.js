import React from 'react'
import {FaPython, FaHtml5, FaJs, FaCss3} from 'react-icons/fa'

const Skills = () => {
  return (
    <section id="skills">
      <section className='flex items-center justify-center py-60'>

        <link href='https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap' rel="stylesheet"></link>
        <link href='https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700&display=swap' rel='stylesheet'></link>

        <div className="transform -rotate-90 text-center">
          <h1 className="font-[Playfair] mb-20">Skills & Work</h1>
        </div>

        <div className="font-[Lato] mr-16">
          <h5 className='font-[Lato] font-bold uppercase text-[#651FFF]'>Work Experience</h5>
          <div className="">
            <h4 className=''>Creative Director</h4>
            <h6>at Fourth Company</h6>
            <small>2015 - Present</small>
            <br /> <br />
          </div>
          <div className="">
            <h4>Senior UI/UX Designer</h4>
            <h6>at Third Company</h6>
            <small>2013 - 2015</small>
            <br /> <br />
          </div>
          <div className="">
            <h4>UI/UX Designer</h4>
            <h6>at Second Company</h6>
            <small>2012 - 2013</small>
            <br /> <br />
          </div>
          <div className="">
            <h4>UI/UX Designer</h4>
            <h6>at First Company</h6>
            <small>2009 - 2011</small>
            <br /> <br />
          </div>
        </div>

        <div className='max-w-screen-sm'>
          <h5 className='font-[Lato] font-bold uppercase text-[#651FFF] ml-14'>SKILL AND EXPERTISE</h5>
            <div className='font-[Lato] font-thin text-sm ml-14'>
              <div className=''>
                <FaHtml5 className='inline-block w-10 h-10'/>
                <h3 className='inline-block'>HTML</h3>
                <div className='w-96 h-2 bg-gradient-to-r from-fuchsia-700 to-violet-600 rounded-3xl mt-3 mr-3 mb-5'></div>
              </div>
              <div className='experience__content'>
                <FaPython className='inline-block w-10 h-10'/>
                <h3 className='inline-block '>Python</h3>
                <div className='w-72 h-2 bg-gradient-to-r from-fuchsia-700 to-violet-600 rounded-3xl mt-3 mr-3 mb-5'></div>
              </div>
              <div className='experience__content'>
                <FaJs className='inline-block w-10 h-10'/>
                <h3 className='inline-block '>JavaScript</h3>
                <div className='w-64 h-2 bg-gradient-to-r from-fuchsia-700 to-violet-600 rounded-3xl mt-3 mr-3 mb-5'></div>
              </div>
              <div className='experience__content'>
                <FaCss3 className='inline-block w-10 h-10'/>
                <h3 className='inline-block '>CSS</h3>
                <div className='w-80 h-2 bg-gradient-to-r from-fuchsia-700 to-violet-600 rounded-3xl mt-3 mr-3 mb-5'></div>
              </div>
            </div>
          </div>
      </section>
    </section>
  )
}

export default Skills