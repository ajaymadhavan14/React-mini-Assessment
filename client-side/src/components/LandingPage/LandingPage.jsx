import React from 'react'

function LandingPage() {
  return (
    <div className='w-screen h-screen '>
      <div className='h-[557px] w-screen flex'>
        <div className='h-full w-1/2'>
            <h3>The say, when life gives you</h3>
            <h3>lemons, make lemonade!</h3>
            <p>But your lemonade might tasted different from others</p>
            <p>considering how well you play with the intgredients.</p>

            <div>
                <p>Let's see how your lemonade tastes!</p>
                <button className='rounded bg-gradient-to-r from-[#E75553] to-[#ED8663]'>Join now</button>
            </div>

        </div>
        <div className='h-full w-1/2'>
      <img className='h-[321px] w-[150px]' src="/Frame.png" alt="image" />
      <img className='h-[206px] w-[216px] z-10' src="/Group.png" alt="image" />
        </div>
      </div>
      <div className='h-[557px] w-screen'>
       <div>
         <h2>Take the test & know which of the </h2>
         <h2>lemon personalities you resonate with</h2>
       </div>
       <div className='flex'>
        <div className='w-[205px] h-[314px]'>
            <img className='w-full h-full' src="/Frame 1114.png" alt="image" />
        </div>
        <div className='w-[205px] h-[314px]'>
        <img className='w-full h-full' src="/Frame 1115.png" alt="image" />
        </div>
        <div className='w-[205px] h-[314px]'>
        <img className='w-full h-full' src="/Frame 1116.png" alt="image" />
        </div>
        <div className='w-[205px] h-[314px]'>
        <img className='w-full h-full' src="/Frame 1117.png" alt="image" />
        </div>
        <div className='w-[205px] h-[314px]'>
        <img className='w-full h-full' src="/Frame 1118.png" alt="image" />
        </div>

       </div>
      </div>
    </div>
  )
}

export default LandingPage
