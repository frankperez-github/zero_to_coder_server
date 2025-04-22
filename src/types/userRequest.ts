import User from "../models/User";
import { Request } from "express";

interface UserRequest extends Request {
  user?: User;
}
export default UserRequest;