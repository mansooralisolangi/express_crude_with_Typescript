// import { Router } from "express";
// import {
//   createStudent,
//   getStudents,
//   getStudent,
//   updateStudent,
//   deleteStudent
// } from "../controllers/studentController";

// const router = Router();

// router.post("/create", createStudent);
// router.get("/allstudents", getStudents);
// router.get("/getStudent:id", getStudent);
// router.put("/updateStudent:id", updateStudent);
// router.delete("/deleteStudent:id", deleteStudent);

// export default router;


import { Router } from "express";
import {
  createStudent,
  getStudents,
  getStudent,
  updateStudent,
  deleteStudent
} from "../controllers/studentController";

const router = Router();

router.post("/create", createStudent);
router.get("/allstudents", getStudents);
router.get("/getstudent/:id", getStudent);        
router.put("/updatestudent/:id", updateStudent); 
router.delete("/deletestudent/:id", deleteStudent); 

export default router;