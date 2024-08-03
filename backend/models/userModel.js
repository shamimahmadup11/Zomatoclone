import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
    },
    address: {
        type: String,
    }
});

userSchema.pre("save", async function (next) {
    if (this.isModified("password") || this.isNew) {
        try {
            const salt = await bcrypt.genSalt(10);
            this.password = await bcrypt.hash(this.password, salt);
            next();
        } catch (err) {
            next(err);
        }
    } else {
        next();
    }
});

userSchema.methods.comparePassword = async function (currentPassword) {
    return await bcrypt.compare(currentPassword, this.password);
};
userSchema.methods.updateAddress = async function (currentAddress){
    this.address = currentAddress;
}

export default mongoose.model("User", userSchema, "users");
