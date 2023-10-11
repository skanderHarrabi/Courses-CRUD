import { Router } from 'express';
import { router as CourseRouter } from './course.route';

const _router: Router = Router();
_router.use('/v1/course', CourseRouter);

export const router = _router;
