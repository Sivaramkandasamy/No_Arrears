import mongoose from 'mongoose';

export interface User1Document extends mongoose.Document {
    _id?: any;
    name?: string;
    email?: string;
    mobileNumber?: number;
    password?: string;
    myReferralCode?:string;
    referralCode?:string;
    otp?:Number;
    isDeleted?: boolean;
    status?: number;
    modifiedOn?: Date;
    modifiedBy?: string;
    createdOn?: Date;
    createdBy?: string;
    
};

const user1Schema = new mongoose.Schema({
    _id: { type: mongoose.Types.ObjectId, required: true, auto: true },
    name: { type: String },
    email: { type: String },
    mobileNumber: { type: Number },
    password: { type: String },
    myReferralCode:{type:String},
    referralCode:{type:String},
    otp:{type:Number},
    isDeleted: { type: Boolean, default: false },
    status: { type: Number, default: 1 },
    modifiedOn: { type: Date },
    modifiedBy: { type: String },
    createdOn: { type: Date },
    createdBy: { type: String }
});

export const User1 = mongoose.model('user1', user1Schema);