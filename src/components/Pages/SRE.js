import React from 'react'
import Daily from '../../assets/daily.png'
import bank from '../../assets/bank.png'
import dex from '../../assets/dex.jpg'
import Rush from '../../assets/rush.png'
import activities from '../../assets/sre/activities.png'
import home from '../../assets/sre/Home.png'
import welcome from '../../assets/sre/Welcome.png'
import info from '../../assets/sre/personal-info.png'
import report from '../../assets/sre/report.png'
import Thanks from './Thanks'
import Scroll from './Scroll'

const SRE = () => {
  return (
    <div className='md:mx-20 mx-4 md:py-20 py-6 text-[#ffffff]'>

      {/* Header */}
      <div className='md:text-[14px] text-[7px] font-medium uppercase tracking-widest text-gray-400'>Project</div>
      <div className='md:text-[54px] text-[20px] font-medium'>DISCIPLINE PLANNING <div className='-mt-2'>SYSTEM</div></div>
      <div className='mb-12 md:mt-7 mt-2 md:text-[18px] text-[10px] font-light'>
        Designed the user interface of Discipline Planning System using Figma, a student-focused platform that guides users through self-assessment activities and generates a personalised discipline report.
      </div>

      {/* Case Study */}
      <div>

        {/* Intro */}
        <div className='mb-16'>
          <div className='text-[11px] uppercase tracking-widest text-gray-400 mb-2'>Case Study</div>
          <div className='md:text-[36px] text-[22px] font-medium mb-4'>Designing a guided self-assessment for students</div>
          <div className='md:text-[17px] text-[13px] font-light md:w-[700px] text-gray-300'>
            DPS helps students understand their own discipline and study habits through a structured flow, personal info, activities, and a generated report. My job was to make a multi-step process feel approachable rather than clinical.
          </div>

          {/* Stats */}
          <div className='flex gap-12 mt-10 mb-4'>
            <div>
              <div className='md:text-[36px] text-[24px] font-medium'>5</div>
              <div className='text-[12px] text-gray-400'>Screens designed</div>
            </div>
            <div>
              <div className='md:text-[36px] text-[24px] font-medium'>1</div>
              <div className='text-[12px] text-gray-400'>Designer</div>
            </div>
            <div>
              <div className='md:text-[36px] text-[24px] font-medium'>4</div>
              <div className='text-[12px] text-gray-400'>Step user flow</div>
            </div>
          </div>
        </div>

        {/* Problem */}
        <div className='mb-16'>
          <div className='text-[11px] uppercase tracking-widest text-gray-400 mb-2'>The Problem</div>
          <div className='md:text-[28px] text-[18px] font-medium mb-4'>Self-assessment tools feel like homework. DPS needed to feel supportive.</div>
          <div className='md:text-[16px] text-[13px] font-light text-gray-300 mb-8'>
            Most discipline or productivity tools are built for professionals, they feel cold and corporate. DPS is for students, by students. The design needed to feel warm, calm, and encouraging so that users actually complete the full flow rather than dropping off halfway through.
          </div>
          <img className='mx-auto w-full md:w-[700px] rounded-lg' alt='DPS home page' src={home} />
          <div className='text-center text-[12px] text-gray-500 mt-2 mb-4'>Landing page, "by students, for students" messaging sets a peer tone immediately, not an institutional one</div>
        </div>

        {/* My Role */}
        <div className='mb-16'>
          <div className='text-[11px] uppercase tracking-widest text-gray-400 mb-2'>My Role</div>
          <div className='md:text-[28px] text-[18px] font-medium mb-4'>UI design in Figma</div>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-4 md:w-[800px]'>
            <div className='border border-gray-700 rounded-lg p-5'>
              <div className='font-medium mb-2'>Design</div>
              <div className='text-[14px] text-gray-300 font-light'>Designed all screens in Figma, from the landing page through the full onboarding and activity flow to the final report output.</div>
            </div>
            <div className='border border-gray-700 rounded-lg p-5'>
              <div className='font-medium mb-2'>Focus</div>
              <div className='text-[14px] text-gray-300 font-light'>Kept the visual language soft and approachable, light backgrounds, teal accents, botanical illustrations, to reduce the anxiety of self-assessment.</div>
            </div>
          </div>
        </div>

        {/* User Flow */}
        <div className='mb-16'>
          <div className='text-[11px] uppercase tracking-widest text-gray-400 mb-2'>User Flow</div>
          <div className='md:text-[28px] text-[18px] font-medium mb-4'>A four-step guided journey</div>
          <div className='md:text-[16px] text-[13px] font-light text-gray-300 mb-6'>
            The entire product is a linear flow. Each step builds on the last, personal context first, then activities, then a report. I designed each screen to feel like a natural next step rather than a new task.
          </div>

          <div className='flex flex-wrap gap-2 items-center text-[13px] text-gray-300 mb-10'>
            {['Fill personal info', 'Complete activities', 'Generate report', 'Fill survey'].map((step, i, arr) => (
              <React.Fragment key={step}>
                <span className='border border-gray-600 rounded px-3 py-1'>{step}</span>
                {i < arr.length - 1 && <span className='text-gray-500'>→</span>}
              </React.Fragment>
            ))}
          </div>

          <img className='w-full md:w-[700px] rounded-lg mx-auto' alt='Welcome screen' src={welcome} />
          <div className='text-[12px] text-gray-500 mt-2 mb-8 text-center'>Welcome screen, the four steps are shown upfront so users know exactly what to expect before starting</div>

          <img className='w-full md:w-[700px] md:w-[700px] rounded-lg mx-auto' alt='Personal information form' src={info} />
          <div className='text-[12px] text-gray-500 mt-2 mb-8 text-center'>Personal information form, educational background, financial info, and location collected in a clean single-page layout</div>

          <img className='w-full md:w-[700px] rounded-lg mx-auto' alt='Activities screen' src={activities} />
          <div className='text-[12px] text-gray-500 mt-2 mb-8 text-center'>Activities screen, aptitude test, personality test, and puzzles grouped clearly with a generate report CTA at the bottom</div>

          <img className='w-full md:w-[700px] rounded-lg mx-auto' alt='Report screen' src={report} />
          <div className='text-[12px] text-gray-500 mt-2 text-center'>Report screen, pie chart visualisation with three discipline categories and a save action</div>
        </div>

        {/* Design Decisions */}
        <div className='mb-16'>
          <div className='text-[11px] uppercase tracking-widest text-gray-400 mb-2'>Design Decisions</div>
          <div className='md:text-[28px] text-[18px] font-medium mb-8'>Why I made specific choices</div>

          <div className='border border-gray-700 rounded-lg p-6 mb-6 md:w-[800px]'>
            <div className='font-medium mb-2'>Why show all four steps on the welcome screen?</div>
            <div className='text-[14px] text-gray-300 font-light'>Users are more likely to complete a multi-step flow when they know what's ahead. Showing the full journey upfront removes uncertainty and sets realistic expectations, reducing drop-off.</div>
          </div>

          <div className='border border-gray-700 rounded-lg p-6 mb-6 md:w-[800px]'>
            <div className='font-medium mb-2'>Why use light backgrounds and botanical illustrations?</div>
            <div className='text-[14px] text-gray-300 font-light'>Self-assessment can feel stressful. A soft, light visual language with organic illustration elements keeps the emotional tone calm and encouraging, closer to a wellness app than an academic test.</div>
          </div>

          <div className='border border-gray-700 rounded-lg p-6 mb-6 md:w-[800px]'>
            <div className='font-medium mb-2'>Why use a pie chart for the report output?</div>
            <div className='text-[14px] text-gray-300 font-light'>Students need to understand their results at a glance, not interpret a data table. A pie chart immediately communicates proportion between discipline areas, it's readable in seconds.</div>
          </div>

          <div className='border border-gray-700 rounded-lg p-6 mb-6 md:w-[800px]'>
            <div className='font-medium mb-2'>Why keep each form screen to one category at a time?</div>
            <div className='text-[14px] text-gray-300 font-light'>Showing all form fields at once would make the product feel overwhelming. Breaking it into Personal Info → Activities → Report keeps cognitive load low and each screen feels completable.</div>
          </div>
        </div>

        {/* Outcome */}
        <div className='mb-6'>
          <div className='text-[11px] uppercase tracking-widest text-gray-400 mb-2'>Outcome</div>
          <div className='md:text-[28px] text-[18px] font-medium mb-4'>A complete UI system handed off for development</div>
          <div className='md:text-[16px] text-[13px] font-light text-gray-300'>
            All five screens were designed in Figma with a consistent component system, typography, colour tokens, form inputs, and illustration placement, ready for developer handoff.
          </div>
        </div>

        {/* Learnings */}
        <div className='grid md:grid-cols-2 grid-cols-1 gap-4 md:w-[800px] mb-20'>
          <div className='border border-gray-700 rounded-lg p-5'>
            <div className='font-medium mb-2'>What I learned</div>
            <div className='text-[14px] text-gray-300 font-light'>Designing for students taught me that emotional tone matters as much as layout. The same information presented coldly vs warmly produces completely different willingness to engage.</div>
          </div>
          <div className='border border-gray-700 rounded-lg p-5'>
            <div className='font-medium mb-2'>What I'd do differently</div>
            <div className='text-[14px] text-gray-300 font-light'>I'd add progress indicators between steps, a simple "Step 2 of 4" would reinforce the sense of advancement and further reduce drop-off at each transition.</div>
          </div>
        </div>

      </div>

      {/* More Work */}
      <div className='mt-12 mb-7 md:text-[18px] text-[13px] font-light md:w-[800px]'>More work</div>
      <div className='inline-flex md:h-[300px]'>
        <a href='/iman-portfolio/#/Fortune-Daily' className='lift cursor-pointer'><img alt='Fortune Daily' className='md:w-[320px] md:h-[260px] w-[320px] h-[85px]' src={Daily} /></a>
        <a href='/iman-portfolio/#/indexxBank' className='md:ml-8 ml-1 lift cursor-pointer'><img alt='indexx Bank' className='md:w-[320px] md:h-[260px] w-[320px] h-[85px]' src={bank} /></a>
        <a href='/iman-portfolio/#/Decentralized-Exchange' className='md:ml-8 ml-1 lift cursor-pointer'><img alt='Decentralized Exchange' className='md:w-[320px] md:h-[260px] w-[320px] h-[85px]' src={dex} /></a>
        <a href='/iman-portfolio/#/Fortune-Rush' className='md:ml-8 ml-1 lift cursor-pointer'><img alt='Fortune Rush' className='md:w-[320px] md:h-[260px] w-[320px] h-[85px]' src={Rush} /></a>
      </div>

      <Thanks />
      <Scroll />
    </div>
  )
}

export default SRE