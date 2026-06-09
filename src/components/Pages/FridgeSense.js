import React from 'react'
import screen1 from '../../assets/fridgesense/screen-1.jpg'
import screen2 from '../../assets/fridgesense/screen-2.jpg'
import screen3 from '../../assets/fridgesense/screen-3.jpg'
import screen4 from '../../assets/fridgesense/screen-4.jpg'
import screen5 from '../../assets/fridgesense/screen-5.jpg'
import screen6 from '../../assets/fridgesense/screen-6.jpg'
import bank from '../../assets/bank.png'
import sre from '../../assets/SRE.png'
import dex from '../../assets/dex.jpg'
import Thanks from './Thanks'
import Scroll from './Scroll'

const FridgeSense = () => {
  return (
    <div className='md:mx-20 mx-4 md:py-20 py-6 text-[#ffffff]'>

      {/* Header */}
      <div className='md:text-[14px] text-[7px] font-medium uppercase tracking-widest text-gray-400'>Project</div>
      <div className='md:text-[54px] text-[20px] font-medium'>Fridge Sense</div>
      <div className='mb-12 md:mt-7 mt-2 md:text-[18px] text-[10px] font-light'>
        A smart AI-powered fridge assistant that helps you track what's inside your fridge, understand your eating habits, and suggest healthy, personalised recipes.
      </div>

      {/* Case Study */}
      <div>

        {/* Intro */}
        <div className='mb-16'>
          <div className='text-[11px] uppercase font-medium tracking-widest text-gray-400 mb-2'>Case Study</div>
          <div className='md:text-[36px] text-[22px] font-medium mb-4'>Premium aesthetic. Real functionality.</div>
          <div className='md:text-[17px] text-[13px] font-light text-gray-300'>
            Fridge Sense is a personal project, a full design and development exploration into AI-powered personalisation, conversational onboarding, and food UX. I owned the concept, design, and full-stack implementation end to end.
          </div>

          {/* Stats */}
          <div className='flex gap-12 mt-10 mb-4'>
            <div>
              <div className='md:text-[36px] text-[24px] font-medium'>6</div>
              <div className='text-[12px] text-gray-400'>Screens designed</div>
            </div>
            <div>
              <div className='md:text-[36px] text-[24px] font-medium'>4</div>
              <div className='text-[12px] text-gray-400'>Onboarding steps</div>
            </div>
            <div>
              <div className='md:text-[36px] text-[24px] font-medium'>1</div>
              <div className='text-[12px] text-gray-400'>Designer + Developer</div>
            </div>
          </div>
        </div>

        {/* Problem */}
        <div className='mb-16'>
          <div className='text-[11px] uppercase font-medium tracking-widest text-gray-400 mb-2'>The Problem</div>
          <div className='md:text-[28px] text-[18px] font-medium mb-4'>Most recipe apps feel like a grocery store, not a kitchen companion.</div>
          <div className='md:text-[16px] text-[13px] font-light text-gray-300 mb-8'>
            Recipe apps overwhelm users with options before understanding them. They don't know your health goals, your allergies, or what you actually have at home. Fridge Sense flips this, it starts with you, not a search bar. The design challenge was making this feel premium and effortless, not clinical or app-like.
          </div>
          <img className='w-full rounded-lg md:w-[800px] mx-auto' alt='Fridge Sense landing' src={screen1} />
          <div className='text-[12px] text-gray-500 mt-2 mb-4 text-center'>Landing screen, floating ingredient tags communicate the concept before the user reads a single word</div>
        </div>

        {/* My Role */}
        <div className='mb-16'>
          <div className='text-[11px] uppercase font-medium tracking-widest text-gray-400 mb-2'>My Role</div>
          <div className='md:text-[28px] text-[18px] font-medium mb-4'>Solo, concept, design, and full-stack development</div>
          <div className='grid md:grid-cols-3 grid-cols-1 gap-4 md:w-[900px]'>
            <div className='border border-gray-700 rounded-lg p-5'>
              <div className='font-medium mb-2'>Design</div>
              <div className='text-[14px] text-gray-300 font-light'>Concept, user flows, all screens in Figma. Visual identity, typography, and interaction design.</div>
            </div>
            <div className='border border-gray-700 rounded-lg p-5'>
              <div className='font-medium mb-2'>Frontend</div>
              <div className='text-[14px] text-gray-300 font-light'>Next.js + React + TailwindCSS. Component architecture, responsive layout, animated transitions.</div>
            </div>
            <div className='border border-gray-700 rounded-lg p-5'>
              <div className='font-medium mb-2'>Backend & AI</div>
              <div className='text-[14px] text-gray-300 font-light'>Python FastAPI. VoyageAI embeddings (voyage-3.5) + FAISS vector store for semantic recipe search. Custom scoring pipeline for inventory coverage, allergy filtering, and preference boosting.</div>
            </div>
          </div>
        </div>

        {/* User Flow */}
        <div className='mb-16'>
          <div className='text-[11px] uppercase font-medium tracking-widest text-gray-400 mb-2'>User Flow</div>
          <div className='md:text-[28px] text-[18px] font-medium mb-4'>Conversational onboarding, one question at a time</div>
          <div className='md:text-[16px] text-[13px] font-light text-gray-300 mb-6'>
            Before designing any screen, I mapped the full onboarding journey. Each step asks exactly one thing, no overwhelming forms. By the time users reach the fridge input, the app already knows their name, goals, and restrictions.
          </div>

          <div className='flex flex-wrap gap-2 items-center text-[13px] text-gray-300 mb-10'>
            {['Landing', "What's your name?", 'Health goals', 'Allergies', 'Add ingredients', "Here's tonight"].map((step, i, arr) => (
              <React.Fragment key={step}>
                <span className='border border-gray-600 rounded px-3 py-1'>{step}</span>
                {i < arr.length - 1 && <span className='text-gray-500'>→</span>}
              </React.Fragment>
            ))}
          </div>

          <img className='w-full rounded-lg md:w-[800px] mx-auto' alt='Name onboarding' src={screen2} />
          <div className='text-[12px] text-gray-500 mt-2 mb-8 text-center'>Step 1, "first, what should we call you?" Full-screen, one question, press enter to continue</div>

          <img className='w-full rounded-lg md:w-[800px] mx-auto' alt='Health goals' src={screen3} />
          <div className='text-[12px] text-gray-500 mt-2 mb-8 text-center'>Step 2, Health goals as pill selectors, multi-select with a free-text fallback for anything else</div>

          <img className='w-full rounded-lg md:w-[800px] mx-auto' alt='Allergies' src={screen4} />
          <div className='text-[12px] text-gray-500 mt-2 text-center'>Step 3, Allergies, open input with placeholder copy that guides without overwhelming</div>
        </div>

        {/* How the AI Works */}
        <div className='mb-16'>
          <div className='text-[11px] uppercase font-medium tracking-widest text-gray-400 mb-2'>How the AI Works</div>
          <div className='md:text-[28px] text-[18px] font-medium mb-4'>Not a search bar. A semantic reasoning engine.</div>
          <div className='md:text-[16px] text-[13px] font-light text-gray-300 mb-8'>
            The recipe suggestion system is built on a multi-layer NLP pipeline. When a user inputs their ingredients, the query is embedded using VoyageAI's <span className='text-white font-medium'>voyage-3.5</span> model, a state-of-the-art text embedding model, and matched semantically against a pre-indexed recipe database stored in a <span className='text-white font-medium'>FAISS vector store</span>. This means the system understands meaning, not just keywords.
          </div>

          {/* Pipeline steps */}
          <div className='flex flex-wrap gap-2 items-center text-[13px] text-gray-300 mb-8'>
            {['User inputs ingredients', 'VoyageAI embeds query', 'FAISS semantic search', 'Inventory coverage scoring', 'Allergy filtering', 'Preference boosting', 'Ranked results'].map((step, i, arr) => (
              <React.Fragment key={step}>
                <span className='border border-gray-600 rounded px-3 py-1'>{step}</span>
                {i < arr.length - 1 && <span className='text-gray-500'>→</span>}
              </React.Fragment>
            ))}
          </div>

          <div className='grid md:grid-cols-3 grid-cols-1 gap-4 md:w-[900px] mb-8'>
            <div className='border border-gray-700 rounded-lg p-5'>
              <div className='font-medium mb-2'>Semantic Search</div>
              <div className='text-[14px] text-gray-300 font-light'>VoyageAI voyage-3.5 embeds the user's query into a vector. FAISS finds the top-K semantically similar recipes, not by exact ingredient match, but by meaning. "Spicy chicken" finds recipes that are conceptually close, even with different wording.</div>
            </div>
            <div className='border border-gray-700 rounded-lg p-5'>
              <div className='font-medium mb-2'>Inventory Coverage Score</div>
              <div className='text-[14px] text-gray-300 font-light'>Each returned recipe is scored by how many of its ingredients you actually have. If you have 4 of 8 ingredients, that's a 50% coverage score. This is what powers the "% match" displayed on recipe cards.</div>
            </div>
            <div className='border border-gray-700 rounded-lg p-5'>
              <div className='font-medium mb-2'>Personalisation Layer</div>
              <div className='text-[14px] text-gray-300 font-light'>Allergy ingredients are hard-filtered out before results are shown. User preferences (spicy, quick, healthy) trigger keyword expansion boosts, recipes matching these tags score higher. Diet modes (vegetarian, low-carb) apply additional filtering.</div>
            </div>
          </div>

          <div className='border border-gray-700 rounded-lg p-6 md:w-[900px]'>
            <div className='font-medium mb-2'>Why this matters for the UX</div>
            <div className='text-[14px] text-gray-300 font-light'>The final score each recipe receives is a combination of semantic relevance + inventory coverage + preference boost. This composite score is what gets displayed as the percentage match on the results screen, making a complex multi-signal ranking feel simple and trustworthy to the user.</div>
          </div>
        </div>

        {/* Design Decisions */}
        <div className='mb-16'>
          <div className='text-[11px] uppercase font-medium tracking-widest text-gray-400 mb-2'>Design Decisions</div>
          <div className='md:text-[28px] text-[18px] font-medium mb-8'>Why every choice was intentional</div>

          <div className='border border-gray-700 rounded-lg p-6 mb-6 md:w-[900px]'>
            <div className='font-medium mb-2'>Why dark green with warm amber accents?</div>
            <div className='text-[14px] text-gray-300 font-light'>Food photography pops against deep, moody backgrounds. Dark green evokes freshness and nature without feeling clinical. Amber is warm and appetite-stimulating, used sparingly on CTAs so every action feels inviting, not urgent.</div>
          </div>

          <div className='border border-gray-700 rounded-lg p-6 mb-6 md:w-[900px]'>
            <div className='font-medium mb-2'>Why one question per screen?</div>
            <div className='text-[14px] text-gray-300 font-light'>Onboarding drop-off happens when users feel the effort upfront. Splitting the flow into single-question screens makes each step feel trivial, but together they build a complete user profile. "Press enter to continue" keeps the pacing conversational, not form-like.</div>
          </div>

          <div className='border border-gray-700 rounded-lg p-6 mb-6 md:w-[900px]'>
            <div className='font-medium mb-2'>Why floating ingredient tags on the hero?</div>
            <div className='text-[14px] text-gray-300 font-light mb-4'>The scattered tags (garlic, eggs, tomato, chicken) immediately communicate the core concept without a single word of explanation. The user understands what the app does before reading anything.</div>
            <img className='w-full rounded-lg md:w-[700px] mx-auto' alt='Ingredient input' src={screen5} />
            <div className='text-[12px] text-gray-500 mt-2 text-center'>Ingredient input, chips appear as users type, removable with ×, right panel shows a food visual to reinforce context</div>
          </div>

          <div className='border border-gray-700 rounded-lg p-6 mb-6 md:w-[900px]'>
            <div className='font-medium mb-2'>Why show the user's name on the results screen?</div>
            <div className='text-[14px] text-gray-300 font-light mb-4'>"Here's tonight, Iman." feels personal. It signals the app remembered you, and that the recipes aren't generic, they're yours. Small detail, massive trust impact.</div>
            <img className='w-full rounded-lg md:w-[700px] mx-auto' alt='Results screen' src={screen6} />
            <div className='text-[12px] text-gray-500 mt-2 text-center'>Results, personalised header, percentage match score, diet tags and cook time on every card</div>
          </div>

          <div className='border border-gray-700 rounded-lg p-6 mb-6 md:w-[900px]'>
            <div className='font-medium mb-2'>Why percentage match on recipe cards?</div>
            <div className='text-[14px] text-gray-300 font-light'>The percentage is real, it's a composite of inventory coverage score + preference boost from the backend ranking pipeline. Surfacing this number reframes the output as intelligent and personal, not a generic search result. Users trust it because it's actually computed specifically for their fridge and goals.</div>
          </div>
        </div>

        {/* Core Challenge */}
        <div className='mb-16'>
          <div className='text-[11px] uppercase font-medium tracking-widest text-gray-400 mb-2'>The Core Challenge</div>
          <div className='md:text-[28px] text-[18px] font-medium mb-4'>Premium aesthetic that still works.</div>
          <div className='md:text-[16px] text-[13px] font-light text-gray-300'>
            The hardest tension in this project was making something that looked like a luxury editorial food magazine while still functioning as a usable, data-driven app. Most beautiful apps sacrifice usability. Most functional apps sacrifice beauty. Restrained use of UI elements, no heavy cards, borders, or shadows, lets the design breathe. Functional elements use the same typographic language as the editorial copy, so nothing ever feels out of place.
          </div>
        </div>

        {/* Outcome */}
        <div className='mb-16'>
          <div className='text-[11px] uppercase font-medium tracking-widest text-gray-400 mb-2'>Outcome</div>
          <div className='md:text-[28px] text-[18px] font-medium mb-4'>A personal project that proves the full pipeline.</div>
          <div className='md:text-[16px] text-[13px] font-light text-gray-300'>
            Fridge Sense demonstrates the complete design-to-development loop, brand identity, UX flows, high-fidelity Figma, and a working full-stack implementation. It's a proof of concept for what AI-personalised food experiences could look like when design is taken seriously.
          </div>
        </div>

        {/* Learnings */}
        <div className='grid md:grid-cols-2 grid-cols-1 gap-4 md:w-[900px] mb-20'>
          <div className='border border-gray-700 rounded-lg p-5'>
            <div className='font-medium mb-2'>What I learned</div>
            <div className='text-[14px] text-gray-300 font-light'>Whitespace, or dark space, is a design element. Removing things is harder than adding them. Every element on screen should earn its place.</div>
          </div>
          <div className='border border-gray-700 rounded-lg p-5'>
            <div className='font-medium mb-2'>What I'd add next</div>
            <div className='text-[14px] text-gray-300 font-light'>Fridge inventory tracking over time, expiry date alerts, and a weekly meal planner that learns from what you actually cook, closing the loop between suggestion and habit.</div>
          </div>
        </div>

      </div>

      {/* More Work */}
      <div className='mt-12 mb-7 md:text-[18px] text-[13px] font-light md:w-[800px]'>More work</div>
      <div className='inline-flex md:h-[300px]'>
        <a href='/iman-portfolio/#/indexxBank' className='lift cursor-pointer'><img alt='indexx Bank' className='md:w-[320px] md:h-[260px] w-[320px] h-[85px]' src={bank} /></a>
        <a href='/iman-portfolio/#/DPS' className='md:ml-8 ml-1 lift cursor-pointer'><img alt='DPS' className='md:w-[320px] md:h-[260px] w-[320px] h-[85px]' src={sre} /></a>
        <a href='/iman-portfolio/#/Decentralized-Exchange' className='md:ml-8 ml-1 lift cursor-pointer'><img alt='Decentralized Exchange' className='md:w-[320px] md:h-[260px] w-[320px] h-[85px]' src={dex} /></a>
      </div>

      <Thanks />
      <Scroll />
    </div>
  )
}

export default FridgeSense