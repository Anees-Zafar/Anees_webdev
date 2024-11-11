import React from 'react'
import Form from './Form'
import AnimatedLinks from './Linksfooteranimated'

function Footerform() {
  return (
    <>

    <div className=' h-[100vh] bg-black p-10 pt-10 flex justify-center mainfooter items-center gap-5'>
        <div className='w-[90vw] md:w-[40vw]'>
            <Form/>
        </div>
        <div className='w-[80vw] md:w-[40vw]'>
        <AnimatedLinks/>
      
        </div>
    </div>
      
    </>
  )
}

export default Footerform
