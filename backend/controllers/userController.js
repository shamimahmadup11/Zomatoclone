import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken';

class UserController {
    constructor() { }

    async login(req, res) {
        const { email, password } = req.body;

        try {
            const user = await userModel.findOne({ email });
            if (!user) {
                return res.status(401).json({ message: "User not found", success: false });
            }

            const comparePassword = await user.comparePassword(password);
            if (!comparePassword) {
                return res.status(401).json({ message: "Wrong user password", success: false });
            }

            const token = jwt.sign({ email: user.email, id: user._id }, process.env.JWT_SECRETKEY, { expiresIn: '1h' });
            return res.status(200).json({ message: "Login Successful", success: true, accessToken: token });
        } catch (error) {
            return res.status(500).json({ message: "Internal server error", success: false });
        }
    }

    async registerUser(req, res) {
        const { name, email, password, phoneNumber, address } = req.body;

        try {
            const checkUser = await userModel.findOne({ email });
            if (checkUser) {
                return res.status(400).json({ message: "User already registered, please login", success: false });
            }

            const user = new userModel({ name, email, password, phoneNumber, address });
            await user.save();
            return res.status(200).json({ message: "User successfully registered", success: true });
        } catch (err) {
            if (err.code === 11000) {
                const duplicateField = Object.keys(err.keyPattern)[0];
                return res.status(400).json({ message: `Duplicate value for field: ${duplicateField}`, success: false });
            }
            return res.status(500).json({ message: "Error registering new user", success: false, error: err });
        }
    }
    async updateAddress(req,res){
        const {id} = req.body;
        const findUser = await userModel.findById(id);
        if(!findUser){
            return res.status(400).json({message : "User not found!", success : false});
        };
        try{
            const {address} = req.body;
            await findUser.updateAddress(address);
            await findUser.save();
            return res.status(202).json({message : "Address Updated Successfully", data : findUser, success: true});
        }
        catch(err){
            return res.status(402).json({message : "Unexpected Error occured while updating the user", success : false});
        }
    }
}

export default UserController;
