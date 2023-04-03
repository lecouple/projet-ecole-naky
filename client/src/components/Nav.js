import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <nav>
        <Link to={'/'} type="button" class="btn btn-outline-dark btn-lg shadow ">Liste des étudiants</Link>
        <Link to={'/create-student'} type="button" class="btn btn-outline-dark btn-lg shadow ">Ajouter un étudiant</Link>
    </nav>
  )
}

export default Nav
