"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const course_controller_1 = require("../../controllers/course.controller");
const _router = (0, express_1.Router)({
    mergeParams: true,
});
_router.post('/create', course_controller_1.createCourse);
_router.get('/all', course_controller_1.getAllCourses);
_router.get('/:id', course_controller_1.getCourseById);
_router.patch('/:id', course_controller_1.updateCourse);
_router.delete('/:id', course_controller_1.deleteCourse);
exports.router = _router;
//# sourceMappingURL=course.route.js.map