const express = require("express")
const router = express.Router()
const UserController = require("../controller/user.controller")

router.post("/signup", (req, res) =>{
 return UserController.signup(req, res)
})

router.get("/list", (req, res) =>{
  return UserController.list(req, res)
})
router.post("/view", (req, res) =>{
  return UserController.view(req, res)
})

module.exports = router