import mongoose, { Document, Schema } from 'mongoose';
import { ICourse } from '../interfaces';

export interface ICourseModel extends ICourse, Document {}

const CourseSchema: Schema = new Schema(
    {
        name: {
            type: String,
            default: '',
        },
        members: {
            type: [String],
            default: [],
        },
        coachID: {
            type: String,
        },
        description: {
            type: String,
        },
    },
    { timestamps: true }
);
export default mongoose.model<ICourseModel>('Course', CourseSchema);
