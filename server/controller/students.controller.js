const Student = require("../models/student.models");

module.exports.getEtudiant = async(req,res)=>{
    try {
        const students = await Student.find()
        res.status(200).json({students:students})
    } catch (error) {
        res.status(400).json(error)
    }
}


module.exports.setEtudiant = async (req,res)=>{
    const recupEmail = await Student.findOne({email: req.body.email})
    if (recupEmail != null){
        return res.status(400).json("ce mail existe déjà!")
    }
    
    const student = new Student({
        name :  req.body.name,
        age :  req.body.age,
        email :  req.body.email
    })

    try {
      const newEtudiant = await student.save()
    res.status(200).json({newstudent:newEtudiant})
        
    } catch (error) {
        res.status(400).json(error)
        
    }

}

module.exports.deleteEtudiant = async(req,res) =>{
    
    const supp = await Student.findById(req.params.id)
    if (supp==null){
        return res.status(400).json("cet etudiant n'existe pas ") 
    }

    try {
        
        await supp.deleteOne()
        res.status(200).json('Etudiant supprimé avec succès')
    } catch (error) {
        res.status(400).json(error)
        
    }
}
module.exports.updateEtudiant = async(req,res)=>{
const ajout = await Student.findById(req.params.id)
if (ajout == null){
   return res.status(400).json("cet etudiant n'existe pas")
}

try {
    
    const stud = await Student.findByIdAndUpdate(ajout,req.body,{new: true})
    res.status(200).json({student:stud})
    
} catch (error) {
    res.status(400).json(error)
    
}
}

module.exports.selectOneEtudiant= async(req,res)=>{
    const etudiantSeul = await Student.findById(req.params.id)
if (etudiantSeul == null){
   return res.status(400).json("cet etudiant n'existe pas")
}
res.status(200).json(etudiantSeul)

}
    
   


