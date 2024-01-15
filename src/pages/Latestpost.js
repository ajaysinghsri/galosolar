import React, { useEffect, useState } from 'react'
import {useFormik} from 'formik';

const Latestpost = () => {
  const [articles,setarticle] = useState([])

  const formik = useFormik({
    initialValues:{
      article:""
    },
    onSubmit:(value)=>{
      try {
        console.log(value,"value-------")
        const existingdata = JSON.parse(localStorage.getItem('articledata'))||[];
      const newdata = [...existingdata,value];
      localStorage.setItem("articledata", JSON.stringify(newdata));
      setarticle(newdata);
      alert("article will post successfully");

      } catch (error) {
        console.log(error.message)
      }
      
    }
  })
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
    <form onSubmit={formik.handleSubmit} className='d-flex justify-content-center mt-4'>
      <textarea name='article' className='form-control w-50' placeholder='post your article here ' onChange={formik.handleChange}></textarea>
      
      <button className='btn btn-warning p-2' >Post</button>
      
       
      
    </form>
    <div className='d-flex justify-content-center mt-4  ' style={{height:"300px"}}>
       
       <div>
       <marquee direction="up" className="text-center" onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}   id='myMarquee' >
        {
          articles.map((item)=>
          <h6 key={item.article} className='text-primary mt-3'><b>{item.article}</b></h6>
          )
        }
       </marquee>
       </div>
       
    </div>
    </> 
  )
}

export default Latestpost