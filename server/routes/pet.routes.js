const PetController = require("../controllers/pet.controller")

module.exports = app => {
    app.get("/pets", PetController.getAllPets)
    app.post("/pets", PetController.createPet)
    app.get("/pets/:id", PetController.getOnePet)
    app.delete("/pets/:id", PetController.deletePet)
    app.put("/pets/:id", PetController.editPet)
}
