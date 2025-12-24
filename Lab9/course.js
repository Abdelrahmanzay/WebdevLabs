import mongoose from "mongoose";

const { Schema, model } = mongoose;

const courseDataSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Course title is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Course description is required"],
      trim: true,
    },
    instructorName: {
      type: String,
      required: [true, "Instructor name is required"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Course price is required"],
      min: [0, "Price cannot be negative"],
    },
    category: {
      type: String,
      required: [true, "Course category is required"],
      enum: {
        values: ["Web Development", "Design", "Marketing", "Business", "Other"],
        message: "{VALUE} is not a valid category",
      },
    },
    enrolledStudents: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

const CourseModel = model("Course", courseDataSchema);

export default CourseModel;
