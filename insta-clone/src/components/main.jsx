import React from 'react'
import Head from './header'
import Posts from './posts'
// import postsdata from '../assets/data/posts';
import '../components/posts.css'
// import Individual from './individual';
import finaldata from './practice';

function Main() {
    const post = finaldata.map(item => {
        return (
          <Posts
            key={item.id}
            caption={item.caption}
            img={item.display_src}
            likes={item.likes}
            num={item.matching}
          />
    
        )
      })

  return (
    <>
    <Head />
    <div className="uploads">
    {post}
  
    </div>
    </>
  )
}

export default Main