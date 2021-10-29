const User = require("../models/user.model")

exports.signup = async(req, res) =>{
  try{
    const {name, email, password} = req.body
    if(!name || !email || password){
      return res.state(404).json({ error: "Fill the all field" })
    }
    const user = await User.save()
  }catch(e){
   return e
  }
}

exports.list = async(req, res) =>{
  const userlist = await User.find()
  return res.status(200).json({ success: userlist })
}

exports.view = async(req, res) =>{
  const list = await User.findOne({_id: req.body.id})
  return res.status(200).json({ success: list })
}