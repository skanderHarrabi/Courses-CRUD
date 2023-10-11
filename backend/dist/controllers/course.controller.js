"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCourse = exports.updateCourse = exports.getCourseById = exports.getAllCourses = exports.createCourse = void 0;
const courses_1 = __importDefault(require("../models/courses"));
const createCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, members, coachID, description } = req.body;
        const newCourse = new courses_1.default({
            name,
            members,
            coachID,
            description,
        });
        yield newCourse.save();
        res.status(200).json(newCourse);
    }
    catch (error) {
        res.status(500).json({ error: 'Error creating course' });
    }
});
exports.createCourse = createCourse;
const getAllCourses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const courses = yield courses_1.default.find();
        res.status(200).json(courses);
    }
    catch (error) {
        res.status(500).json({ error: 'Error fetching courses' });
    }
});
exports.getAllCourses = getAllCourses;
const getCourseById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const courseId = req.params.id;
    try {
        const course = yield courses_1.default.findById(courseId);
        if (!course) {
            res.status(404).json({ error: 'Course not found' });
            return;
        }
        res.status(200).json(course);
    }
    catch (error) {
        res.status(500).json({ error: 'Error fetching course' });
    }
});
exports.getCourseById = getCourseById;
const updateCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const courseId = req.params.id;
    const { name, members, coachID, description } = req.body;
    try {
        const updatedCourse = yield courses_1.default.findByIdAndUpdate(courseId, { name, members, coachID, description }, { new: true });
        if (!updatedCourse) {
            res.status(404).json({ error: 'Course not found' });
            return;
        }
        res.status(200).json(updatedCourse);
    }
    catch (error) {
        res.status(500).json({ error: 'Error updating course' });
    }
});
exports.updateCourse = updateCourse;
const deleteCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const courseId = req.params.id;
    try {
        const deletedCourse = yield courses_1.default.findByIdAndDelete(courseId);
        if (!deletedCourse) {
            res.status(404).json({ error: 'Course not found' });
            return;
        }
        res.status(200).send(deletedCourse);
    }
    catch (error) {
        res.status(500).json({ error: 'Error deleting course' });
    }
});
exports.deleteCourse = deleteCourse;
//# sourceMappingURL=course.controller.js.map