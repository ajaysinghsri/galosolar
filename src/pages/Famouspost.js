import React , { useEffect, useState } from 'react'

const Famouspost = () => {
  const [articles,setarticle] = useState([])

 
  useEffect(()=>{
    setarticle(JSON.parse(localStorage.getItem('articledata'))||[]);
  },[])

  const handleMouseEnter = () => {
    // Stop the scroll when the mouse enters
    const marquee = document.getElementById('myMarquee');
    if (marquee) {
      marquee.stop();
    }
  };

  const handleMouseLeave = () => {
    // Start the scroll when the mouse leaves
    const marquee = document.getElementById('myMarquee');
    if (marquee) {
      marquee.start();
      
    }
  };


  return (
   <>
      <div className='d-flex justify-content-center mt-4  ' style={{height:"300px"}}>
       
      <div>
      <marquee direction="up" className="text-center"  onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}   id='myMarquee'>
        {
          articles.map((item)=>
          <h6 key={item.article} className='text-danger mt-3' ><b>{item.article}</b></h6>
          )
        }
       </marquee>
      </div>
       
    </div>
   </>
  )
}

export default Famouspost