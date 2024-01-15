import React,{useState} from 'react'
import "../components/about.css";
const About = () => {
  const [userComment, setUserComment] = useState('');
  const [comments, setComments] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the user's comment, for example, you can send it to a server or store it in state
    setComments([...comments, userComment]);
    // Clear the comment box
    setUserComment('');
  };
  return (
    <>
    <div className='container-fluid row'>
    <div className='col-lg-6 col-md-6 col-sm-6'>
      <img src='./images/solar.jpg' height="100%" width="100%" alt='img'></img>
      </div>
      <div className='col-lg-6 col-md-6 col-sm-6 ' >
      
        <form onSubmit={handleSubmit} className='comment'>
            <h2 className='text-center mt-4'><label htmlFor="comment">Your Feedback:</label></h2>
           <div>
           <textarea className='form-control mt-4 '
              id="comment"
              value={userComment}
              onChange={(e) => setUserComment(e.target.value)}
              placeholder="Type your feedback here..."
            />
           </div>
            <div className='mt-4  d-flex flex-wrap justify-content-center '>
               <button type="submit" className='btn btn-primary'>Submit Feedback</button>
               <button onClick={() => alert("Subscribed!")} className='btn btn-success ms-2'>Subscribe</button>
            </div>
          </form>
          <div className='mt-4'>
            <h3>Comments:</h3>
            {comments.map((comment, index) => (
              <p key={index}>{comment}</p>
            ))}
          </div>

      
          
     </div>
    </div>
    </>
  )
}

export default About