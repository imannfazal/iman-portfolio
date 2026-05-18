import React from 'react'
import dashboard from '../../assets/bank/dashboard.png'
import mypage from '../../assets/bank/page2.png'
import borrow1 from '../../assets/bank/borrow.png'
import borrow2 from '../../assets/bank/borrow2.png'
import invest from '../../assets/bank/page4.png'
import withdraw from '../../assets/bank/page5.png'
import sre from '../../assets/SRE.png'
import Daily from '../../assets/daily.png';
import dex from '../../assets/dex.jpg'
import Rush from '../../assets/rush.png'
import Thanks from './Thanks'
import Scroll from './Scroll'

const Bank = () => {
  return (
    <div className='md:mx-20 mx-4 md:py-20 py-6 text-[#ffffff]'>

      {/* Header */}
      <div className='md:text-[14px] text-[7px] font-medium uppercase tracking-widest text-gray-400'>Project</div>
      <div className='md:text-[54px] text-[20px] font-medium'>iNDEXX BANK</div>
      <div className='mb-12 md:mt-7 mt-2 md:text-[18px] text-[10px] font-light'>
        Designed the user interface using Figma and then developed a user-friendly frontend for the indexx Bank by utilizing ReactJS and Tailwind CSS.
      </div>

      {/* Case Study */}
      <div>

        {/* Intro */}
        <div className='mb-16'>
          <div className='text-[11px] uppercase font-medium tracking-widest text-gray-400 mb-2'>Case Study</div>
          <div className='md:text-[36px] text-[22px] font-medium mb-4'>The thinking behind the design</div>
          <div className='md:text-[17px] text-[13px] font-light text-gray-300'>
            I owned the end-to-end pipeline on indexx Bank, from defining user flows in Figma to shipping pixel-accurate React components. Here's how I approached it.
          </div>

          {/* Stats */}
          <div className='flex gap-12 mt-10 mb-4'>
            <div>
              <div className='md:text-[36px] text-[24px] font-medium'>8+</div>
              <div className='text-[12px] text-gray-400'>Screens designed</div>
            </div>
            <div>
              <div className='md:text-[36px] text-[24px] font-medium'>1</div>
              <div className='text-[12px] text-gray-400'>Designer + Developer</div>
            </div>
            <div>
              <div className='md:text-[36px] text-[24px] font-medium'>5+</div>
              <div className='text-[12px] text-gray-400'>User flows mapped</div>
            </div>
          </div>
        </div>

        {/* Problem */}
        <div className='mb-16'>
          <div className='text-[11px] uppercase font-medium tracking-widest text-gray-400 mb-2'>The Problem</div>
          <div className='md:text-[28px] text-[18px] font-medium mb-4'>Crypto platforms are overwhelming. indexx Bank needed to feel different.</div>
          <div className='md:text-[16px] text-[13px] font-light  text-gray-300 mb-8'>
            Most crypto platforms throw every stat, graph, and number at the user at once. indexx Bank needed to serve both casual users checking their portfolio and power users managing active positions, without alienating either. The challenge was designing a banking experience that felt trustworthy and calm while still surfacing real-time data.
          </div>
          <img className='w-full rounded-lg md:w-[800px] mx-auto' alt='indexx Bank dashboard' src={dashboard} />
          <div className='text-[12px] text-gray-500 mt-2 mb-4 text-center'>Dashboard, white background with green accents to communicate stability, not anxiety</div>
        </div>

        {/* My Role */}
        <div className='mb-16'>
          <div className='text-[11px] uppercase font-medium tracking-widest text-gray-400 mb-2'>My Role</div>
          <div className='md:text-[28px] text-[18px] font-medium mb-4'>End-to-end, from Figma to production</div>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-4 md:w-[800px] mb-8'>
            <div className='border border-gray-700 rounded-lg p-5'>
              <div className='font-medium mb-2'>Design</div>
              <div className='text-[14px] text-gray-300 font-light'>Defined user flows, designed all screens in Figma, iterated on feedback from the product team.</div>
            </div>
            <div className='border border-gray-700 rounded-lg p-5'>
              <div className='font-medium mb-2'>Development</div>
              <div className='text-[14px] text-gray-300 font-light'>Implemented all designs in React + TailwindCSS with pixel-accurate layout and cross-browser consistency.</div>
            </div>
          </div>
        </div>

        {/* User Flows */}
        <div className='mb-16'>
          <div className='text-[11px] uppercase font-medium tracking-widest text-gray-400 mb-2'>User Flows</div>
          <div className='md:text-[28px] text-[18px] font-medium mb-4'>Mapping journeys before touching Figma</div>
          <div className='md:text-[16px] text-[13px] font-light text-gray-300 mb-6'>
            Before designing any screen, I mapped out the key user journeys to understand where decisions needed to be made and where users were most likely to drop off.
          </div>

          <div className='mb-10'>
            <div className='text-[14px] font-medium mb-3'>Borrow flow</div>
            <div className='flex flex-wrap gap-2 items-center text-[13px] text-gray-300 mb-6'>
              {['Select asset', 'Set amount & duration', 'Await deposit', 'View operation details', 'Repay'].map((step, i, arr) => (
                <React.Fragment key={step}>
                  <span className='border border-gray-600 rounded px-3 py-1'>{step}</span>
                  {i < arr.length - 1 && <span className='text-gray-500'>→</span>}
                </React.Fragment>
              ))}
            </div>
            <img className='w-full rounded-lg md:w-[800px] mx-auto' alt='Borrow screen' src={borrow1} />
            <div className='text-[12px] text-gray-500 mt-2 mb-8 text-center'>Borrow screen, one step at a time to reduce cognitive load on a high-stakes action</div>
            <img className='w-full rounded-lg md:w-[800px] mx-auto' alt='Awaiting deposit' src={borrow2} />
            <div className='text-[12px] text-gray-500 mt-2 text-center'>Awaiting deposit state, explicit progress indicators so users know exactly where they are</div>
          </div>

          <div>
            <div className='text-[14px] font-medium mb-3'>Withdraw crypto flow</div>
            <div className='flex flex-wrap gap-2 items-center text-[13px] text-gray-300 mb-6'>
              {['Select coin', 'Select network', 'Enter address', 'Confirm & send'].map((step, i, arr) => (
                <React.Fragment key={step}>
                  <span className='border border-gray-600 rounded px-3 py-1'>{step}</span>
                  {i < arr.length - 1 && <span className='text-gray-500'>→</span>}
                </React.Fragment>
              ))}
            </div>
            <img className='w-full rounded-lg md:w-[800px] mx-auto' alt='Withdraw crypto' src={withdraw} />
            <div className='text-[12px] text-gray-500 mt-2 text-center'>Withdraw crypto, coin selection, address input, and network fee all visible before confirmation</div>
          </div>
        </div>

        {/* Design Decisions */}
        <div className='mb-16'>
          <div className='text-[11px] uppercase font-medium tracking-widest text-gray-400 mb-2'>Design Decisions</div>
          <div className='md:text-[28px] text-[18px] font-medium mb-8'>Why I made specific choices</div>

          <div className='border border-gray-700 rounded-lg p-6 mb-6 md:w-[800px]'>
            <div className='font-medium mb-2'>Why a clean white dashboard with green accents?</div>
            <div className='text-[14px] text-gray-300 font-light'>Most crypto platforms use dark themes that feel anxious. White with a single green accent communicates stability and trust, closer to a banking app than a trading terminal.</div>
          </div>

          <div className='border border-gray-700 rounded-lg p-6 mb-6 md:w-[800px]'>
            <div className='font-medium mb-2'>Why break the borrow flow into multiple steps?</div>
            <div className='text-[14px] text-gray-300 font-light'>Borrowing against crypto is high-stakes. One step at a time reduces cognitive load and gives users a clear sense of progress, reducing drop-off on a complex action.</div>
          </div>

          <div className='border border-gray-700 rounded-lg p-6 mb-6 md:w-[800px]'>
            <div className='font-medium mb-2'>Why design empty and error states explicitly?</div>
            <div className='text-[14px] text-gray-300 font-light'>A platform users trust with real money must communicate clearly when something goes wrong. Blank screens feel broken, I designed explicit states for every key screen.</div>
            <img className='w-full rounded-lg mt-4 md:w-[700px] mx-auto' alt='Invest page empty state' src={invest} />
            <div className='text-[12px] text-gray-500 mt-2 text-center'>Invest page, empty state with clear labels so users never feel lost</div>
          </div>

          <div className='border border-gray-700 rounded-lg p-6 mb-6 md:w-[800px]'>
            <div className='font-medium mb-2'>Why tab navigation inside My Page?</div>
            <div className='text-[14px] text-gray-300 font-light'>My Page held Rewards, Earn, and Transaction History. Tabs let users jump directly to what they need instead of scrolling through everything at once.</div>
            <img className='w-full rounded-lg mt-4 md:w-[700px] mx-auto' alt='My Page tab navigation' src={mypage} />
            <div className='text-[12px] text-gray-500 mt-2 text-center'>My Page, tab bar lets users switch between Rewards, Earn, Borrow, Invest, and History without losing context</div>
          </div>
        </div>

        {/* Outcome */}
        <div className='mb-16'>
          <div className='text-[11px] uppercase font-medium tracking-widest text-gray-400 mb-2'>Outcome</div>
          <div className='md:text-[28px] text-[18px] font-medium mb-4'>Designed and shipped, end to end</div>
          <div className='md:text-[16px] text-[13px] font-light text-gray-300'>
            Every screen designed in Figma was implemented in React by me, zero handoff friction, pixel-accurate output. The platform went live as part of the broader indexx ecosystem serving real users.
          </div>
        </div>

        {/* Learnings */}
        <div className='grid md:grid-cols-2 grid-cols-1 gap-4 md:w-[800px] mb-20'>
          <div className='border border-gray-700 rounded-lg p-5'>
            <div className='font-medium mb-2'>What I learned</div>
            <div className='text-[14px] text-gray-300 font-light'>Designing for trust in fintech means every micro-decision matters, error messages, loading states, confirmation flows. Users notice when these are missing.</div>
          </div>
          <div className='border border-gray-700 rounded-lg p-5'>
            <div className='font-medium mb-2'>What I'd do differently</div>
            <div className='text-[14px] text-gray-300 font-light'>I'd conduct usability testing earlier, specifically on the Borrow flow, which has the most steps and highest stakes for users.</div>
          </div>
        </div>

      </div>

      {/* More Work */}
      <div className='mt-12 mb-7 md:text-[18px] text-[13px] font-light md:w-[800px]'>More work</div>
      <div className='inline-flex md:h-[300px]'>
        <a href='/iman-portfolio/#/Fortune-Daily' className='lift cursor-pointer'><img alt='Fortune Daily' className='md:w-[320px] md:h-[260px] w-[320px] h-[85px]' src={Daily} /></a>
        <a href='/iman-portfolio/#/DPS' className='md:ml-8 ml-1 lift cursor-pointer'><img alt='DPS' className='md:w-[320px] md:h-[260px] w-[320px] h-[85px]' src={sre} /></a>
        <a href='/iman-portfolio/#/Decentralized-Exchange' className='md:ml-8 ml-1 lift cursor-pointer'><img alt='Decentralized Exchange' className='md:w-[320px] md:h-[260px] w-[320px] h-[85px]' src={dex} /></a>
        <a href='/iman-portfolio/#/Fortune-Rush' className='md:ml-8 ml-1 lift cursor-pointer'><img alt='Fortune Rush' className='md:w-[320px] md:h-[260px] w-[320px] h-[85px]' src={Rush} /></a>
      </div>

      <Thanks />
      <Scroll />
    </div>
  )
}

export default Bank