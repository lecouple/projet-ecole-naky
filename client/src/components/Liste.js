import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { Link } from 'react-router-dom'

const Liste = () => {
    const [students,setStudents] = useState([])
    useEffect(()=>{
        const getStudents = async ()=>{
            await axios.get("http://localhost:5000/students/")
            .then((response) => setStudents(response.data.students.reverse()))
            .catch((err)=>console.log(err))
        }
        getStudents()
    },[])
  return (
    <div>
      <h2 className='text-center pt-2'>Liste des étudiants</h2>
      <hr></hr>
      <div className='d-flex justify-content-center liste'>
        {(students.length)?
            <div>
            <table class="table table-hover"  style={{width:"700px"}}>
  
            <tbody>
              {students?.map((student)=>(
                  <tr key={student._id}>
                      <td className='display'><h3>{student.name}</h3></td>
                      <td className='pt-3 text-end'><Link to={"/student/"+student._id} type="button" class="btn btn-outline-success"><i class="bi bi-eye-fill"></i></Link></td>
                  </tr>
              ))}
            </tbody>
          </table>
            <h5 className='text-center text-muted'>{students.length +" étudiant"+((students.length > 1)?"s":"")}</h5>
            </div>
        :<h5>Aucun étudiant</h5>}
      </div>
      
    </div>
  )
}

export default Liste
