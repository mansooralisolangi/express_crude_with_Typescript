import { Request, Response } from "express";
import Student from "../models/student";

// Create student
export const createStudent = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, age, course } = req.body;

    if (!name || !email || !age || !course) {
      res.status(400).json({ message: "All fields are required" });
      return;
    }

    const student = new Student({ name, email, age, course });
    await student.save();

    res.status(201).json({ student, message: "Student created successfully" });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Get all students
export const getStudents = async (_req: Request, res: Response): Promise<void> => {
  try {
    const students = await Student.find();
    // const students = await Student.find().sort({ age: -1 });
    // const students = await Student.find().select("name email");
    // const students = await Student.find().limit(3);

    // const students = await Student.find({},{
    //   name: 1,
    //   email: 1,
    //   _id: 0  
    // });


    res.status(200).json(students);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Get single student
export const getStudent = async (req: Request, res: Response): Promise<void> => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      res.status(404).json({ message: "Student not found" });
      return;
    }

    res.status(200).json({ student, message: "Student fetched successfully" });
  } catch (error: any) {
    res.status(500).json({ message: "Invalid ID" });
  }
};

// Update student
export const updateStudent = async (req: Request, res: Response): Promise<void> => {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!student) {
      res.status(404).json({ message: "Student not found" });
      return;
    }

    res.status(200).json({ student, message: "Student updated successfully" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Delete student
export const deleteStudent = async (req: Request, res: Response): Promise<void> => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);

    if (!student) {
      res.status(404).json({ message: "Student not found" });
      return;
    }

    res.status(200).json({ message: "Student deleted successfully" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
