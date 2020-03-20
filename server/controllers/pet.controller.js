const {Pet} = require("../models/pet.model");

module.exports.getAllPets = (req,res) => {
    Pet.find({})
        .then(allPets => res.json(allPets))
        .catch(err => res.json(err))
}

module.exports.createPet = (req,res) => {
    Pet.create(req.body)
        .then(newPet => res.json(newPet))
        .catch(err => res.status(400).json(err))
}

module.exports.getOnePet = (req,res) => {
    const {id} = req.params
    Pet.findOne({_id:id})
        .then(onePet => res.json(onePet))
        .catch(err => res.json(err))
}

module.exports.deletePet = (req,res) => {
    const {id} = req.params;
    Pet.deleteOne({_id:id})
        .then(deletedResult => res.json(deletedResult))
        .catch(err => res.json(err))

}


module.exports.editPet = (req, res) => {
    const {id} = req.params;
    Pet.findByIdAndUpdate({_id:id}, req.body, {new:true})
        .then(editedPet => res.json(editedPet))
        .catch(err => res.json(err))
}
