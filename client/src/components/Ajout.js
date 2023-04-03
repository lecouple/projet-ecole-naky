import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Ajout = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [age,setAge] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async(e) =>{
        e.preventDefault()
        await axios({
            method: 'post',
            url: "http://localhost:5000/students/create-student",
            data: {
              name: name,
              age: age,
              email: email
            }
        }).then((response)=>{
            setName("")
            setEmail("")
            setAge("")
            navigate('/')
        }).catch((err)=>{
            alert("Email déjà existant")
        })
    }
  return (
    <div>
      <h2 className='text-center pt-2'>Ajouter un étudiant</h2>
      <hr></hr>
      <div className='px-5 pt-5'>
      <form onSubmit={handleSubmit}>
      <div class="mb-3">
    <label for="exampleInputName" class="form-label">Nom et prénoms</label>
    <input type="text" class="form-control" id="exampleInputName" aria-describedby="nameHelp" value={name} onChange={(e)=>setName(e.target.value)}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Adresse Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=>setEmail(e.target.value)}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Age</label>
    <input type="number" class="form-control w-25" id="exampleInputPassword1" value={age} onChange={(e)=>setAge(e.target.value)}/>
  </div>
  <button type="submit" class="btn btn-primary">Ajouter</button>
</form>
      </div>
      <hr></hr>
    </div>
  )
}

export default Ajout
