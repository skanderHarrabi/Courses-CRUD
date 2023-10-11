import { Request, Response } from 'express';
import Course, { ICourseModel } from '../models/courses';

// Create a new course
export const createCourse = async (req: Request, res: Response) => {
    try {
        const { name, members, coachID, description } = req.body;
        const newCourse: ICourseModel = new Course({
            name,
            members,
            coachID,
            description,
        });
        await newCourse.save();
        res.status(200).json(newCourse);
    } catch (error) {
        res.status(500).json({ error: 'Error creating course' });
    }
};

// Get a list of all courses
export const getAllCourses = async (req: Request, res: Response) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching courses' });
    }
};

// Get a specific course by ID
export const getCourseById = async (req: Request, res: Response) => {
    const courseId = req.params.id;
    try {
        const course = await Course.findById(courseId);
        if (!course) {
            res.status(404).json({ error: 'Course not found' });
            return;
        }
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching course' });
    }
};

// Update a course by ID
export const updateCourse = async (req: Request, res: Response) => {
    const courseId = req.params.id;
    const { name, members, coachID, description } = req.body;
    try {
        const updatedCourse = await Course.findByIdAndUpdate(
            courseId,
            { name, members, coachID, description },
            { new: true }
        );
        if (!updatedCourse) {
            res.status(404).json({ error: 'Course not found' });
            return;
        }
        res.status(200).json(updatedCourse);
    } catch (error) {
        res.status(500).json({ error: 'Error updating course' });
    }
};

// Delete a course by ID
export const deleteCourse = async (req: Request, res: Response) => {
    const courseId = req.params.id;
    try {
        const deletedCourse = await Course.findByIdAndDelete(courseId);
        if (!deletedCourse) {
            res.status(404).json({ error: 'Course not found' });
            return;
        }
        res.status(200).send(deletedCourse);
    } catch (error) {
        res.status(500).json({ error: 'Error deleting course' });
    }
};
