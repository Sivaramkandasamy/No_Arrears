
import { response ,generate, sendOtp,} from "../helper/commonResponseHandler";
import { errorMessage,clientError } from "../helper/ErrorMessage";  
import {validationResult} from "express-validator";
import * as TokenManager from "../utils/tokenManager";
import { User1, User1Document } from "../model/user1.model";
import { hashPassword } from "../helper/Encryption";

let activity="User"

export let createuser = async (req, res, next) => {
    const errors = validationResult(req); 
    if (errors.isEmpty()) {
        try {
            const usersData = await User1.findOne({ $and: [{ isDeleted: false }, { email: req.body.email }] }); 
            if(!usersData) {
                req.body.password = await hashPassword(req.body.password)
                const userDetails : User1Document = req.body;
                userDetails.myReferralCode = generate(6);
                const UserData = new User1(userDetails);
                let insertUser = await UserData.save();
                                      
                    response(req, res, activity, 'Level-2', 'Save-User', true, 200, insertUser, clientError.success.registerSuccessfully);
            
            } else {
                response(req, res, activity, 'Level-3', 'Save-User', true, 200, {}, 'Email (or) Mobile Number already registered');
            }
        } catch (err: any) {
            response(req, res, activity, 'Level-3', 'Save-User', false, 500, {}, errorMessage.internalServer, err.message);
        }
    } else {
        response(req, res, activity, 'Level-3', 'Save-User', false, 422, {}, errorMessage.fieldValidation, JSON.stringify(errors.mapped()));
    }
};




