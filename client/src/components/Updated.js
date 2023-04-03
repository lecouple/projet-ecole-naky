import axios from 'axios'
import React, { useState } from 'react'

const Updated = (props) => {
    const [name,setName] = useState(props.student.name)
    const [email,setEmail] = useState(props.student.email)
    const [age,setAge] = useState(props.student.age)

    const handleSubmit = async(e) => {
        e.preventDefault()
        await axios({
            method: 'put',
            url: `http://localhost:5000/students/update-student/${props.student._id}`,
            data: {
                name: name,
                email: email,
                age: age
            }
        })
        .then((response)=>{
            console.log(response)
            props.setStudent(response.data.student)
            props.setShowForm(false)
        })
        .catch((error)=>console.log(error))
    }
  return (
    <div>
      <div className='px-5 pt-3'>
        <hr></hr>
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
  <div>
  <button type="button" class="btn btn-outline-secondary" onClick={()=>props.setShowForm(false)}>Annuler</button>&nbsp;&nbsp;

    <button type="submit" class="btn btn-primary">Modifier</button>
    </div>
</form>
    </div>
    </div>
  )
}

export default Updated
