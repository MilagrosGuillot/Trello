const express = require("express");
const routerUsers = express();
routerUsers.use(express.json());


routerUsers.get("/", async (req, res) => {
    try{
        res.status(200).json("hola")
    } catch(error){
        res.status(400).json({error: error.message})
    }
})

// routerCountries.get("/:id", async (req, res) => {
//     const {id} = req.params
//     try{
//         const country = await getCountry(id)
//         res.status(200).json(country)
//     } catch(error){
//         res.status(400).json({error: error.message})
//     }
// })



module.exports = routerUsers