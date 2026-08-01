import {user} from "../models/user.models.js";

import { ApiError } from "../utils/api-errors.js";
import { asyncHandler } from "../utils/async-handler.js";

export const verifyJWT = asyncHandler (async(req,res ,nest)=>
    {
        req.cookies?.accessToken || req.headers("Authorization")?.replace("Bearer ","")

        if(!token){
            throw new ApiError (401, "Unauthorized request")
        }

        try {
            const decodedToken = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
            await User.findById(decodedToken?._id).select(
              "-password -refreshToken -emailVerificationToken -emailVerificationExpiry",
            );

            if (!token) {
              throw new ApiError(401, "Invalid Access Token.");
            }
            req.user = user
            next()
        } catch (error) {
            throw new ApiError(401, "Invalid Access Token.");
        }
}
)