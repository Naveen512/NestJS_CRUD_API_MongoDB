import * as mongoose from 'mongoose';

export const extinctAnimalSchema = new mongoose.Schema({
    Name:String,
    Location:String,
    ExtinctYear:Number
},{
    versionKey:false
});