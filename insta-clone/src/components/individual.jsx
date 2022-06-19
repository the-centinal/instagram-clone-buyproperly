import React from 'react'
import './individual.css'

import finaldata from './practice';
import Head from './header';
import Indiposts from './indiposts';



function Individual() {
  const comments = finaldata.map(item => {
    return (
      <Indiposts
        code={item.code}

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
    {comments}
    </>
  )
}
export default Individual;