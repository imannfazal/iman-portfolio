import React from 'react'
import main from '../../assets/Daily/main.png'
import profile from '../../assets/Daily/profile.png'
import edit from '../../assets/Daily/edit.png'
import buy from '../../assets/Daily/buy.png'
import sre from '../../assets/SRE.png'
import pred from '../../assets/prediction.jpg'
import dex from '../../assets/dex.jpg'
import Rush from '../../assets/rush.png'
import Thanks from './Thanks'
import Scroll from './Scroll'

const Daily = () => {
  return (
    <div className='md:mx-20 mx-4 md:py-20 py-6 text-[#ffffff]'>

      {/* Header */}
      <div className='md:text-[14px] text-[7px] font-medium uppercase tracking-widest text-gray-400'>Project</div>
      <div className='md:text-[54px] text-[20px] font-medium'>FORTUNE DAILY</div>
      <div className='mb-12 md:mt-7 mt-2 md:text-[18px] text-[10px] font-light'>
        Designed and developed the frontend of indexx Fortune Daily utilizing Figma, ReactJS and TailwindCSS, ensuring a seamless user experience.
      </div>

      {/* Case Study */}
      <div>

        {/* Intro */}
        <div className='mb-16'>
          <div className='text-[11px] uppercase tracking-widest text-gray-400 mb-2'>Case Study</div>
          <div className='md:text-[36px] text-[22px] font-medium mb-4'>Making a crypto lottery feel trustworthy</div>
          <div className='md:text-[17px] text-[13px] font-light text-gray-300'>
            Fortune Daily is a daily lottery platform built on the indexx ecosystem. Users buy tickets, pick numbers, and check results, all on-chain. My job was to make a product that could feel unfamiliar and risky feel clear, fun, and trustworthy.
          </div>

          {/* Stats */}
          <div className='flex gap-12 mt-10 mb-4'>
            <div>
              <div className='md:text-[36px] text-[24px] font-medium'>4+</div>
              <div className='text-[12px] text-gray-400'>Screens designed</div>
            </div>
            <div>
              <div className='md:text-[36px] text-[24px] font-medium'>1</div>
              <div className='text-[12px] text-gray-400'>Designer + Developer</div>
            </div>
            <div>
              <div className='md:text-[36px] text-[24px] font-medium'>3</div>
              <div className='text-[12px] text-gray-400'>Core user flows</div>
            </div>
          </div>
        </div>

        {/* Problem */}
        <div className='mb-16'>
          <div className='text-[11px] uppercase tracking-widest text-gray-400 mb-2'>The Problem</div>
          <div className='md:text-[28px] text-[18px] font-medium mb-4'>Crypto lotteries feel scammy. This one needed to feel legitimate.</div>
          <div className='md:text-[16px] text-[13px] font-light text-gray-300 mb-8'>
            Most crypto lottery products look chaotic, flashing numbers, unclear prize structures, no transparency. Fortune Daily needed to clearly communicate how the lottery works, what the prize pool is, and when the next draw happens, all before a user commits any funds.
          </div>
          <img className='w-full rounded-lg md:w-[800px] mx-auto' alt='Fortune Daily main page' src={main} />
          <div className='text-[12px] text-gray-500 mt-2 mb-4 text-center'>Main page, countdown timer, prize pot, and ticket purchase CTA immediately visible above the fold</div>
        </div>

        {/* My Role */}
        <div className='mb-16'>
          <div className='text-[11px] uppercase tracking-widest text-gray-400 mb-2'>My Role</div>
          <div className='md:text-[28px] text-[18px] font-medium mb-4'>End-to-end, from Figma to production</div>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-4 md:w-[800px]'>
            <div className='border border-gray-700 rounded-lg p-5'>
              <div className='font-medium mb-2'>Design</div>
              <div className='text-[14px] text-gray-300 font-light'>Defined user flows for ticket purchase, number editing, and history viewing. Designed all screens in Figma with the indexx brand system.</div>
            </div>
            <div className='border border-gray-700 rounded-lg p-5'>
              <div className='font-medium mb-2'>Development</div>
              <div className='text-[14px] text-gray-300 font-light'>Implemented all screens in React + TailwindCSS, handling wallet connection states, dynamic countdowns, and ticket history.</div>
            </div>
          </div>
        </div>

        {/* User Flows */}
        <div className='mb-16'>
          <div className='text-[11px] uppercase tracking-widest text-gray-400 mb-2'>User Flows</div>
          <div className='md:text-[28px] text-[18px] font-medium mb-4'>Three flows, each with a different stakes level</div>

          <div className='mb-10'>
            <div className='text-[14px] font-medium mb-3'>Buy tickets flow</div>
            <div className='flex flex-wrap gap-2 items-center text-[13px] text-gray-300 mb-6'>
              {['View prize pot & countdown', 'Enter ticket quantity', 'View/edit numbers', 'Confirm and buy'].map((step, i, arr) => (
                <React.Fragment key={step}>
                  <span className='border border-gray-600 rounded px-3 py-1'>{step}</span>
                  {i < arr.length - 1 && <span className='text-gray-500'>→</span>}
                </React.Fragment>
              ))}
            </div>
            <img className='w-full rounded-lg md:w-[700px] mx-auto' alt='Buy tickets modal' src={buy} />
            <div className='text-[12px] text-gray-500 mt-2 mb-8 text-center'>Buy tickets modal, quantity input with live cost calculation and a clear path to edit numbers before committing</div>
            <img className='w-full rounded-lg md:w-[700px] mx-auto' alt='Edit numbers screen' src={edit} />
            <div className='text-[12px] text-gray-500 mt-2 text-center'>Edit numbers, randomize option plus manual digit editing, with confirm and go-back clearly separated</div>
          </div>

          <div>
            <div className='text-[14px] font-medium mb-3'>Check results flow</div>
            <div className='flex flex-wrap gap-2 items-center text-[13px] text-gray-300 mb-6'>
              {['Connect wallet', 'View participated rounds', 'Check ticket numbers', 'Claim prize'].map((step, i, arr) => (
                <React.Fragment key={step}>
                  <span className='border border-gray-600 rounded px-3 py-1'>{step}</span>
                  {i < arr.length - 1 && <span className='text-gray-500'>→</span>}
                </React.Fragment>
              ))}
            </div>
            <img className='w-full rounded-lg md:w-[700px] mx-auto' alt='User profile and history' src={profile} />
            <div className='text-[12px] text-gray-500 mt-2 text-center'>Profile page, participated rounds, ticket numbers, and claimable status all in one place</div>
          </div>
        </div>

        {/* Design Decisions */}
        <div className='mb-16'>
          <div className='text-[11px] uppercase tracking-widest text-gray-400 mb-2'>Design Decisions</div>
          <div className='md:text-[28px] text-[18px] font-medium mb-8'>Why I made specific choices</div>

          <div className='border border-gray-700 rounded-lg p-6 mb-6 md:w-[800px]'>
            <div className='font-medium mb-2'>Why show the countdown and prize pot above the fold?</div>
            <div className='text-[14px] text-gray-300 font-light'>Lottery participation is time-sensitive and prize-driven. Surfacing both immediately removes the need for users to hunt for the most important information, it's the first thing they see, so the decision to participate is easier to make.</div>
          </div>

          <div className='border border-gray-700 rounded-lg p-6 mb-6 md:w-[800px]'>
            <div className='font-medium mb-2'>Why separate "buy" and "edit numbers" into two steps?</div>
            <div className='text-[14px] text-gray-300 font-light'>Forcing users to choose numbers before seeing the cost creates friction. Showing cost first, then offering the option to edit numbers, respects the user's decision flow, they know what they're paying before they customize.</div>
          </div>

          <div className='border border-gray-700 rounded-lg p-6 mb-6 md:w-[800px]'>
            <div className='font-medium mb-2'>Why include a randomize button on the edit screen?</div>
            <div className='text-[14px] text-gray-300 font-light'>Most users don't have meaningful preferences for lottery numbers. A prominent randomize option reduces decision fatigue and keeps the purchase flow fast, manual editing is there for those who want it, not the default path.</div>
          </div>

          <div className='border border-gray-700 rounded-lg p-6 mb-6 md:w-[800px]'>
            <div className='font-medium mb-2'>Why show full ticket history on the profile page?</div>
            <div className='text-[14px] text-gray-300 font-light'>Trust in a lottery product depends on transparency. Showing every round participated, every ticket number, and claimable status gives users full visibility, which matters especially when real money is involved.</div>
          </div>
        </div>

        {/* Outcome */}
        <div className='mb-6'>
          <div className='text-[11px] uppercase tracking-widest text-gray-400 mb-2'>Outcome</div>
          <div className='md:text-[28px] text-[18px] font-medium mb-4'>Designed and shipped as part of the indexx ecosystem</div>
          <div className='md:text-[16px] text-[13px] font-light text-gray-300'>
            Every screen designed in Figma was implemented in React by me. Fortune Daily launched as part of the broader indexx platform serving real users with real funds on the line.
          </div>
        </div>

        {/* Learnings */}
        <div className='grid md:grid-cols-2 grid-cols-1 gap-4 md:w-[800px] mb-20'>
          <div className='border border-gray-700 rounded-lg p-5'>
            <div className='font-medium mb-2'>What I learned</div>
            <div className='text-[14px] text-gray-300 font-light'>Designing for financial products means clarity beats cleverness every time. Every piece of information a user needs before committing funds should be visible without scrolling or searching.</div>
          </div>
          <div className='border border-gray-700 rounded-lg p-5'>
            <div className='font-medium mb-2'>What I'd do differently</div>
            <div className='text-[14px] text-gray-300 font-light'>I'd add clearer win/loss states after a draw, the current design doesn't make it immediately obvious whether a user has won, which is the most important moment in the entire product.</div>
          </div>
        </div>

      </div>

      {/* More Work */}
      <div className='mt-12 mb-7 md:text-[18px] text-[13px] font-light md:w-[800px]'>More work</div>
      <div className='inline-flex md:h-[300px]'>
        <a href='/iman-portfolio/#/prediction' className='lift cursor-pointer'><img alt='Prediction Beta' className='md:w-[320px] md:h-[260px] w-[320px] h-[85px]' src={pred} /></a>
        <a href='/iman-portfolio/#/DPS' className='md:ml-8 ml-1 lift cursor-pointer'><img alt='DPS' className='md:w-[320px] md:h-[260px] w-[320px] h-[85px]' src={sre} /></a>
        <a href='/iman-portfolio/#/Decentralized-Exchange' className='md:ml-8 ml-1 lift cursor-pointer'><img alt='Decentralized Exchange' className='md:w-[320px] md:h-[260px] w-[320px] h-[85px]' src={dex} /></a>
        <a href='/iman-portfolio/#/Fortune-Rush' className='md:ml-8 ml-1 lift cursor-pointer'><img alt='Fortune Rush' className='md:w-[320px] md:h-[260px] w-[320px] h-[85px]' src={Rush} /></a>
      </div>

      <Thanks />
      <Scroll />
    </div>
  )
}

export default Daily