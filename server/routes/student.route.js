const { getEtudiant, setEtudiant, deleteEtudiant, updateEtudiant, selectOneEtudiant } = require('../controller/students.controller')

const router = require('express').Router()

router.get('/',getEtudiant)
router.post('/create-student',setEtudiant)
router.delete('/delete-student/:id',deleteEtudiant)
router.put('/update-student/:id',updateEtudiant)
router.get('/update-student/:id',selectOneEtudiant)


module.exports = router