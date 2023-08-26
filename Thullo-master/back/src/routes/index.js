const { Router } = require('express');
const routerUsers = require("../handlers/routerUsers")
// const routerActivity = require("../handlers/routerActivity")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
// router.use("/countries", routerCountries)
// router.use("/activities", routerActivity)

router.use("/users" , routerUsers)
// router.use("/users" , routerUsers)
module.exports = router;