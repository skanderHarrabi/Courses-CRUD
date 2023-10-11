import { Request, Response } from 'express';
export declare const createCourse: (req: Request, res: Response) => Promise<void>;
export declare const getAllCourses: (req: Request, res: Response) => Promise<void>;
export declare const getCourseById: (req: Request, res: Response) => Promise<void>;
export declare const updateCourse: (req: Request, res: Response) => Promise<void>;
export declare const deleteCourse: (req: Request, res: Response) => Promise<void>;
