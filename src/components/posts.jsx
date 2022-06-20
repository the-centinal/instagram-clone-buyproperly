import React, { useState } from 'react'
import './posts.css';
import { FcLike } from 'react-icons/fc';
import { BiCommentDots } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom'



function Posts(props) {
    let navigate = useNavigate()

    const [like, setlike] = useState(props.likes);
    const inclike = () =>{
        setlike(like + 1);
    };


    return (
        <>


            <div className="post1">
                <a href="/individual">
                    <div className="post-image">
                        <img src={props.img} alt="img" />

                    </div>
                </a>
                <div className="posts-action">
                    <p>{props.caption}</p>
                    <div className="actionbuttons">
                        <button  onClick= {inclike} className="buttons">
                            <span>
                                <FcLike />
                            </span>
                            <span>
                                {like}
                            </span>
                        </button>
                        <button onClick={() => {
                            navigate('/individual')
                        }} className="buttons">
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







        </>
    )
}

export default Posts