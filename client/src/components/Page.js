import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Liste from './Liste'
import Ajout from './Ajout'
import Student from './Student'
const Page = () => {
  return (
    <div className='page rounded shadow'>
      <Routes>
        <Route path='/' element={<Liste/>}/>
        <Route path='/create-student' element={<Ajout/>}/>
        <Route path='/student/:id' element={<Student/>}/>
      </Routes>
    </div>
  )
}

export default Page
