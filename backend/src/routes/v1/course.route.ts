import { Router } from 'express';
import {
    createCourse,
    getAllCourses,
    getCourseById,
    updateCourse,
    deleteCourse,
} from '../../controllers/course.controller';

const _router: Router = Router({
    mergeParams: true,
});

// CREATE A NEW COURSE
_router.post('/create', createCourse);

// GET ALL COURSES
_router.get('/all', getAllCourses);

// GET A COURSE BY ID
_router.get('/:id', getCourseById);

// UPDATE A COURSE BY ID
_router.patch('/:id', updateCourse);

// DELETE A COURSE BY ID
_router.delete('/:id', deleteCourse);

export const router = _router;
