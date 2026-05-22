import React from 'react'
import main from '../../assets/Rush/main.png'
import howtoplay from '../../assets/Rush/howtoplay.png'
import profile from '../../assets/Rush/profile.png'
import sre from '../../assets/SRE.png'
import Daily from '../../assets/daily.png';
import dex from '../../assets/dex.jpg'
import pred from '../../assets/prediction.jpg'
import Thanks from './Thanks'
import Scroll from './Scroll'

const Rush = () => {
  return (
    <div className='md:mx-20 mx-4 md:py-20 py-6 text-[#ffffff]'>

      {/* Header */}
      <div className='md:text-[14px] text-[7px] font-medium uppercase tracking-widest text-gray-400'>Project</div>
      <div className='md:text-[54px] text-[20px] font-medium'>FORTUNE RUSH</div>
      <div className='mb-12 md:mt-7 mt-2 md:text-[18px] text-[10px] font-light'>
        Took charge of designing and building the front-end for Fortune Rush, a high-energy hourly crypto lottery, utilizing Figma, ReactJS and TailwindCSS, creating an impressive and user-friendly interface from scratch.
      </div>

      {/* Case Study */}
      <div>

        {/* Intro */}
        <div className='mb-16'>
          <div className='text-[11px] uppercase tracking-widest text-gray-400 mb-2'>Case Study</div>
          <div className='md:text-[36px] text-[22px] font-medium mb-4'>Designing urgency without chaos</div>
          <div className='md:text-[17px] text-[13px] font-light md:w-[700px] text-gray-300'>
            Fortune Rush runs hourly lottery rounds powered by AI and blockchain. Unlike Fortune Daily, the pace is faster and the energy is higher. The design challenge was making urgency feel exciting rather than overwhelming, and making a complex product easy to understand quickly.
          </div>

          {/* Stats */}
          <div className='flex gap-12 mt-10 mb-4'>
            <div>
              <div className='md:text-[36px] text-[24px] font-medium'>3</div>
              <div className='text-[12px] text-gray-400'>Screens designed</div>
            </div>
            <div>
              <div className='md:text-[36px] text-[24px] font-medium'>1</div>
              <div className='text-[12px] text-gray-400'>Designer + Developer</div>
            </div>
            <div>
              <div className='md:text-[36px] text-[24px] font-medium'>2</div>
              <div className='text-[12px] text-gray-400'>Core user flows</div>
            </div>
          </div>
        </div>

        {/* Problem */}
        <div className='mb-16'>
          <div className='text-[11px] uppercase tracking-widest text-gray-400 mb-2'>The Problem</div>
          <div className='md:text-[28px] text-[18px] font-medium mb-4'>Fortune Rush runs every hour. Users need to decide fast, the design had to support that.</div>
          <div className='md:text-[16px] text-[13px] font-light text-gray-300 mb-8'>
            Hourly lotteries create natural time pressure. The design needed to surface the countdown, prize pot, and ticket purchase CTA immediately, while also making winning criteria and prize structure clear enough that users felt informed, not rushed into a decision they didn't understand.
          </div>
          <img className='w-full rounded-lg mx-auto md:w-[700px]' alt='Fortune Rush main page' src={main} />
          <div className='text-[12px] md:w-[700px] mx-auto text-gray-500 mt-2 mb-6 text-center'>Main page, bold branding, live countdown, prize pot, and buy CTA all above the fold; finished rounds and winning criteria below for users who want more detail</div>
        </div>

        {/* My Role */}
        <div className='mb-16'>
          <div className='text-[11px] uppercase tracking-widest text-gray-400 mb-2'>My Role</div>
          <div className='md:text-[28px] text-[18px] font-medium mb-4'>End-to-end, from Figma to production</div>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-4 md:w-[800px]'>
            <div className='border border-gray-700 rounded-lg p-5'>
              <div className='font-medium mb-2'>Design</div>
              <div className='text-[14px] text-gray-300 font-light'>Designed the full UI in Figma, main lottery page, how-to-play guide, and user profile with ticket history.</div>
            </div>
            <div className='border border-gray-700 rounded-lg p-5'>
              <div className='font-medium mb-2'>Development</div>
              <div className='text-[14px] text-gray-300 font-light'>Built all screens in React + TailwindCSS with live countdowns, dynamic prize pool display, and wallet-connected ticket history.</div>
            </div>
          </div>
        </div>

        {/* User Flows */}
        <div className='mb-16'>
          <div className='text-[11px] uppercase tracking-widest text-gray-400 mb-2'>User Flows</div>
          <div className='md:text-[28px] text-[18px] font-medium mb-4'>Two distinct journeys, buy and learn</div>

          <div className='mb-10'>
            <div className='text-[14px] font-medium mb-3'>Buy tickets flow</div>
            <div className='flex flex-wrap gap-2 items-center text-[13px] text-gray-300 mb-6'>
              {['Check prize pot & countdown', 'Buy tickets', 'Choose randomised or manual numbers', 'Confirm purchase', 'Check results'].map((step, i, arr) => (
                <React.Fragment key={step}>
                  <span className='border border-gray-600 rounded px-3 py-1'>{step}</span>
                  {i < arr.length - 1 && <span className='text-gray-500'>→</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className='mb-6'>
            <div className='text-[14px] font-medium mb-3'>Learn how to play flow</div>
            <div className='flex flex-wrap gap-2 items-center text-[13px] text-gray-300 mb-6'>
              {['Read how to play guide', 'Understand winning criteria', 'Understand prize funds', 'Return to buy'].map((step, i, arr) => (
                <React.Fragment key={step}>
                  <span className='border border-gray-600 rounded px-3 py-1'>{step}</span>
                  {i < arr.length - 1 && <span className='text-gray-500'>→</span>}
                </React.Fragment>
              ))}
            </div>
            <img className='w-full rounded-lg mx-auto md:w-[700px]' alt='How to play guide' src={howtoplay} />
            <div className='text-[12px] text-gray-500 mt-2 text-center md:w-[700px] mx-auto'>How to play guide, step-by-step breakdown of buying tickets, viewing results, and understanding the prize structure; designed to build confidence before committing funds</div>
          </div>
        </div>

        {/* Design Decisions */}
        <div className='mb-16'>
          <div className='text-[11px] uppercase tracking-widest text-gray-400 mb-2'>Design Decisions</div>
          <div className='md:text-[28px] text-[18px] font-medium mb-8'>Why I made specific choices</div>

          <div className='border border-gray-700 rounded-lg p-6 mb-6 md:w-[800px]'>
            <div className='font-medium mb-2'>Why use bold, high-energy branding vs the calmer Fortune Daily?</div>
            <div className='text-[14px] text-gray-300 font-light'>Fortune Rush is faster-paced and targets users who want more frequent action. The vibrant colours, pop-art illustration style, and bold typography communicate energy and excitement, the right emotional register for an hourly lottery.</div>
          </div>

          <div className='border border-gray-700 rounded-lg p-6 mb-6 md:w-[800px]'>
            <div className='font-medium mb-2'>Why include a dedicated "How to Play" page?</div>
            <div className='text-[14px] text-gray-300 font-light'>Crypto lotteries with AI and blockchain mechanics are unfamiliar to many users. A detailed guide builds trust and reduces drop-off from users who would otherwise hesitate because they don't understand the product well enough to feel safe participating.</div>
          </div>

          <div className='border border-gray-700 rounded-lg p-6 mb-6 md:w-[800px]'>
            <div className='font-medium mb-2'>Why show finished rounds on the main page?</div>
            <div className='text-[14px] text-gray-300 font-light'>Showing past rounds with real prize pots and winner counts is social proof. It demonstrates the lottery is active and paying out, which is one of the biggest trust signals for new users considering their first purchase.</div>
          </div>

          <div className='border border-gray-700 rounded-lg p-6 mb-6 md:w-[800px]'>
            <div className='font-medium mb-2'>Why keep the profile page minimal?</div>
            <div className='text-[14px] text-gray-300 font-light'>After a round ends, users just want to know: did I win? The profile page strips away everything except participated rounds, ticket numbers, and claimable status, the three things that answer that question.</div>
          </div>

          <img className='w-full rounded-lg mt-2 mx-auto md:w-[700px]' alt='User profile and ticket history' src={profile} />
          <div className='text-[12px] text-gray-500 mt-2 text-center '>Profile page, clean ticket history with lottery ID, status, and ticket numbers; "See Prize" CTA for claimable rounds</div>
        </div>

        {/* Outcome */}
        <div className='mb-6'>
          <div className='text-[11px] uppercase tracking-widest text-gray-400 mb-2'>Outcome</div>
          <div className='md:text-[28px] text-[18px] font-medium mb-4'>Designed and shipped as part of the indexx ecosystem</div>
          <div className='md:text-[16px] text-[13px] font-light md:w-[800px] text-gray-300'>
            All screens designed in Figma and implemented in React, consistent with the broader indexx visual language while having its own distinct high-energy identity. Fortune Rush launched serving real users alongside Fortune Daily and indexx Bank.
          </div>
        </div>

        {/* Learnings */}
        <div className='grid md:grid-cols-2 grid-cols-1 gap-4 md:w-[800px] mb-16'>
          <div className='border border-gray-700 rounded-lg p-5'>
            <div className='font-medium mb-2'>What I learned</div>
            <div className='text-[14px] text-gray-300 font-light'>Designing two products in the same ecosystem (Fortune Daily and Fortune Rush) taught me how to maintain brand consistency while creating distinct emotional registers, same system, different energy.</div>
          </div>
          <div className='border border-gray-800 rounded-lg p-5'>
            <div className='font-medium mb-2'>What I'd do differently</div>
            <div className='text-[14px] text-gray-300 font-light'>I'd design a clearer win/loss notification state, right now users have to navigate to their profile to find out if they won. That moment of discovery deserves its own dedicated screen.</div>
          </div>
        </div>

      </div>

      {/* More Work */}
      <div className='mt-12 mb-7 md:text-[18px] text-[13px] font-light md:w-[800px]'>More work</div>
      <div className='inline-flex md:h-[300px]'>
        <a href='/iman-portfolio/#/Fortune-Daily' className='lift cursor-pointer'><img alt='Fortune Daily' className='md:w-[320px] md:h-[260px] w-[320px] h-[85px]' src={Daily} /></a>
        <a href='/iman-portfolio/#/DPS' className='md:ml-8 ml-1 lift cursor-pointer'><img alt='DPS' className='md:w-[320px] md:h-[260px] w-[320px] h-[85px]' src={sre} /></a>
        <a href='/iman-portfolio/#/Decentralized-Exchange' className='md:ml-8 ml-1 lift cursor-pointer'><img alt='Decentralized Exchange' className='md:w-[320px] md:h-[260px] w-[320px] h-[85px]' src={dex} /></a>
        <a href='/iman-portfolio/#/prediction' className='md:ml-8 ml-1 lift cursor-pointer'><img alt='Prediction Beta' className='md:w-[320px] md:h-[260px] w-[320px] h-[85px]' src={pred} /></a>
      </div>

      <Thanks />
      <Scroll />
    </div>
  )
}

export default Rush