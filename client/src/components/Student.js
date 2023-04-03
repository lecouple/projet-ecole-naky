import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Updated from './Updated'

const Student = () => {
    const [student,setStudent] = useState()
    const [showForm,setShowForm] = useState(false)
    const navigate = useNavigate()
    useEffect(()=>{
        const getStudent = async () =>{
            await axios.get(`http://localhost:5000/students/update-student/${window.location.pathname.split('/')[2]}`)
            .then((response)=>{
                setStudent(response.data)
            })
            .catch((error)=>console.log(error))
        }
        getStudent()
    })

    const deleteStudent = async () => {
        await axios({
            method: 'delete',
            url: 'http://localhost:5000/students/delete-student/'+window.location.pathname.split('/')[2],
        }).then((response)=>{
            navigate('/')
        })
            .catch((err) => console.log(err))
    } 
  return (
    <div>
      <h2 className='text-center pt-2'>Informations sur l'étudiant</h2>
      <hr></hr>
      <div className='px-5'>
        <h2>Nom : {student?.name}</h2>
        <hr></hr>
        <h2>Email : {student?.email}</h2>
        <hr></hr>
        <h2>Age : {student?.age} ans</h2>
        <hr></hr>
        <div>
            <button type="button" class="btn btn-outline-secondary" onClick={()=>setShowForm(true)}><i class="bi bi-pen-fill"></i>&nbsp;Modifier</button>&nbsp;&nbsp;
            <button type="button" class="btn btn-outline-danger" onClick={()=>deleteStudent()}><i class="bi bi-trash-fill"></i>&nbsp;Supprimer</button>
        </div>
      </div>
      <div>
        {(student && showForm)?<Updated student={student} setStudent={setStudent} setShowForm={setShowForm}/>:null}
      </div>
    </div>
  )
}

export default Student
