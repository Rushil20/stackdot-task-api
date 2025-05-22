import { Schema, model } from 'mongoose';

const institueSchema = new Schema(
    {
        institute_name: {
            type: String,
            unqiue: true,
            required: true,
            trim: true,
            min: 5,
            max: 50,
        },
        institute_description: {
            type: String,
            required: true,
            trim: true,
            min: 5,
            max: 100,
        },
        institute_tye: {
            type: Object,
            required: true,
            properties: {
                
            }
            /** Other sub things like medium & class for School type i assume that from the front end 
            we'll be handling that with different form handling for different type of institute types. **/
        },
        institute_email: {
            type: String,
            unqiue: true,
            required: true,
            trim: true,
            min: 5,
            max: 50,
        },
        institute_status: {
            type: Number,
            required: true,
            enum: [0, 1],
            default: 1
        }
    },
    {
        timestamps: true
    }
);

const InstituteModel = model('institutes', institueSchema);

export default InstituteModel;