import React, {useState} from 'react'
import './individual.css'

import { FcLike } from 'react-icons/fc';
import { BiCommentDots } from 'react-icons/bi';
// import postsdata from '../assets/data/posts';



function Indiposts(what) {
  const [like, setlike] = useState(what.likes);
  const inclike = () =>{
      setlike(like + 1);
  };


  return (
   
    

      <div id='individual'>
        <div className="indi1">
          <div className="indi-pic">

            <img src={what.img} alt="img" className="post-image" />


          </div>
          <div className="indi-action">
            <p>{what.caption}</p>
            <div className="indiactionbuttons">
              <button onClick={inclike} className="indibuttons">
                <span>
                  <FcLike />
                </span>
                <span>
                  {what.likes}
                </span>
              </button>
              <button className="indibuttons">
                <span>
                  <BiCommentDots />
                </span>
                <span>
                  {what.num}
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="comments">
          <div className="comm1">
            <span className="author">{what.uid}
            </span>
            <span className="comment1">{what.comm}</span>
          </div>
          
          <form action="" className="commsub">
            <input type="text"  required placeholder='Author' />
            <input type="text"  required placeholder='Comment' />
            <button className='submit' type='submit'>Submit</button>
          </form>

        </div>
      </div>
    
    
  )
}

export default Indiposts;