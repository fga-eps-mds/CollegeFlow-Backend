const router = require('express').Router()
const Student = require('../models/Student')

router.post('/', async (req, res) => {
    const { name, phone, approved } = req.body

    if(!name) {
        res.status(422).json({error: "O nome é obrigatório!"})
    }

    const student = {
        name,
        phone,
        approved
    }

    try{
        // criando dados
        await Student.create(student)
        res.status(201).json({message: "Aluno inserido com sucesso!"})
    } catch(error){
        res.status(500).json({error: error})
    }
})

module.exports = router