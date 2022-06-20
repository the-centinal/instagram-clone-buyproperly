import React, {Fragment} from 'react'
import './individual.css'

import lastfullfinaldata from './practice';
import Head from './header';
import Indiposts from './indiposts';



function Individual() {
  const gupshup = lastfullfinaldata.map(item => {
    return (
      <Indiposts
        ucode={item.code}
        caption={item.caption}
        img={item.display_src}
        likes={item.likes}
        num={item.matching}
        comm={item.baate.text}
        uid={item.baate.user}
      />

    )
  })


  return (
    <>
    <Head />
    { gupshup }
    </>
  )
}
export default Individual;