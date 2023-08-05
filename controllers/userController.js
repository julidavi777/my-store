import User from '../models/userModel.js' 
import { resData } from '../utils/resData.js';
exports.signup = async (req,res)=>{
const user = await User.create({
    photo: req.body.photo,
    name: req.body.name,
    last_name: req.body.last_name,
    address: req.body.address,
    password: req.body.password,
}); 
    resData(201,'success',user); 

}