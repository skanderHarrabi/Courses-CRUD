import mongoose, { Document } from 'mongoose';
import { ICourse } from '../interfaces';
export interface ICourseModel extends ICourse, Document {
}
declare const _default: mongoose.Model<ICourseModel, {}, {}, {}, any>;
export default _default;
