import express from 'express';
import CourseModel from './course.js';

const courseApiRouter = express.Router();

/**
 * POST endpoint - Create a new course
 */
courseApiRouter.post('/', async (request, response) => {
  try {
    const courseData = request.body;
    const newCourse = await CourseModel.create(courseData);
    
    return response.status(201).json({
      success: true,
      data: newCourse,
      message: 'Course created successfully'
    });
  } catch (error) {
    return response.status(400).json({
      success: false,
      error: error.message
    });
  }
});

/**
 * GET endpoint - Retrieve all courses
 */
courseApiRouter.get('/', async (request, response) => {
  try {
    const allCourses = await CourseModel.find().sort({ createdAt: -1 });
    
    return response.status(200).json({
      success: true,
      count: allCourses.length,
      data: allCourses
    });
  } catch (error) {
    return response.status(500).json({
      success: false,
      error: error.message
    });
  }
});

/**
 * GET endpoint - Retrieve a single course by ID
 */
courseApiRouter.get('/:id', async (request, response) => {
  try {
    const courseId = request.params.id;
    const foundCourse = await CourseModel.findById(courseId);
    
    if (!foundCourse) {
      return response.status(404).json({
        success: false,
        error: 'Course not found with the provided ID'
      });
    }

    return response.status(200).json({
      success: true,
      data: foundCourse
    });
  } catch (error) {
    return response.status(500).json({
      success: false,
      error: error.message
    });
  }
});

/**
 * PUT endpoint - Update an existing course
 */
courseApiRouter.put('/:id', async (request, response) => {
  try {
    const courseId = request.params.id;
    const updateData = request.body;
    
    const updatedCourse = await CourseModel.findByIdAndUpdate(
      courseId,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedCourse) {
      return response.status(404).json({
        success: false,
        error: 'Course not found with the provided ID'
      });
    }

    return response.status(200).json({
      success: true,
      data: updatedCourse,
      message: 'Course updated successfully'
    });
  } catch (error) {
    return response.status(400).json({
      success: false,
      error: error.message
    });
  }
});

/**
 * DELETE endpoint - Remove a course
 */
courseApiRouter.delete('/:id', async (request, response) => {
  try {
    const courseId = request.params.id;
    const deletedCourse = await CourseModel.findByIdAndDelete(courseId);

    if (!deletedCourse) {
      return response.status(404).json({
        success: false,
        error: 'Course not found with the provided ID'
      });
    }

    return response.status(200).json({
      success: true,
      message: 'Course deleted successfully',
      data: deletedCourse
    });
  } catch (error) {
    return response.status(500).json({
      success: false,
      error: error.message
    });
  }
});

export default courseApiRouter;
