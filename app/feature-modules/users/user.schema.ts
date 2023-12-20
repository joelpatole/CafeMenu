import mongoose from "mongoose";
import { Roles, roles } from "../../utility/roles";
import {UserType} from '../users/user.type'

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default : roles.ADMIN,
    required: true,
  },
});


export const User = mongoose.model<UserType>('User', userSchema);
