import React from 'react'
import './individual.css'

import { FcLike } from 'react-icons/fc';
import { BiCommentDots } from 'react-icons/bi';
// import postsdata from '../assets/data/posts';



function Indiposts(props) {


  return (
    <div id={props.code}>
    

      <div id='individual'>
        <div className="indi1">
          <div className="indi-pic">

            <img src={props.img} alt="img" className="post-image" />


          </div>
          <div className="indi-action">
            <p>{props.caption}</p>
            <div className="indiactionbuttons">
              <button className="indibuttons">
                <span>
                  <FcLike />
                </span>
                <span>
                  {props.likes}
                </span>
              </button>
              <button className="indibuttons">
                <span>
                  <BiCommentDots />
                </span>
                <span>
                  {props.num}
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="comments">
          <div className="comm1">
            <span className="author">{props.author}
            </span>
            <span className="comment1">{props.comment}</span>
          </div>
          
          <form action="" className="commsub">
            <input type="text"  required placeholder='Author' />
            <input type="text"  required placeholder='Comment' />
            <button className='submit' type='submit'>Submit</button>
          </form>

        </div>
      </div>
    </div>
    
  )
}

export default Indiposts;