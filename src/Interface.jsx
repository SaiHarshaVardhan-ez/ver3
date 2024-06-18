import React, { useState } from 'react'
import Editor from './components/Editor'
import Features from './components/Features'

const Interface = () => {
  const [content,setContent]=useState([])
  return (
    <div className='h-screen w-screen flex flex-row p-4'>
      <Features content={content} setContent={setContent}/>
      <Editor content={content} setContent={setContent}/>
    </div>
  )
}

export default Interface
