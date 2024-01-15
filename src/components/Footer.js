import React from 'react'

const Footer = () => {
  return (
   <>
   <div style={{height:"200px"}} className=" bg-dark">
   
    
      <div className='d-flex flex-wrap  justify-content-center'>
        <div className='mt-4'>
          <h1 className='mt-4 ms-4'><a href='https://www.instagram.com/accounts/login/?hl=en' target='blank'><i class="bi bi-instagram"></i></a></h1>
        </div>
        <div className='mt-4'>
          <h1 className='mt-4 ms-4'><a href='https://www.facebook.com/login' target='blank'><i class="bi bi-facebook"></i></a></h1>
        </div>
        <div className='mt-4'>
          <h1 className='mt-4 ms-4'><a href='https://web.whatsapp.com' target='blank'><i class="bi bi-whatsapp"></i></a></h1>
        </div>
        <div className='mt-4'>
          <h1 className='mt-4 ms-4'><a href='https://www.linkedin.com' target='blank'><i class="bi bi-linkedin"></i></a></h1>
        </div>
      </div>
    </div>
   
   </>
  )
}

export default Footer