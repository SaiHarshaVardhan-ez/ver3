import React from 'react'
import Editor from './components/Editor'
import Features from './components/Features'

const Interface = () => {
  return (
    <div className='h-screen w-screen flex flex-row p-4'>
      <Features/>
      <Editor/>
    </div>
  )
}

export default Interface
