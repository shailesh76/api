import { findAUser } from "../models/user/UserModel.js";
export const isAuth = async (req, res, next) => {
  // if valid user then return true otherwise false
  try {
    const { authorization } = req.headers;
    console.log(authorization);
    //if this authorization id is valide then go to next middlewere
    const user = authorization ? await findAUser({ _id: authorization }) : null;

    user?._id
      ? next()
      : res.json({
          status: "error",
          message: "Unauthorized",
        });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
