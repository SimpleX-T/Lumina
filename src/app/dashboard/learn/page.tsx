"use client";
import { CourseProps } from "@/app/types";
import CourseDetails from "../../../components/dashboard/CourseDetails";
import { useState } from "react";
import { courseData } from "@/lib/courses";
const Courses = () => {
  const [id, setID] = useState<number | null>(null);
  const ids = [123, 124, 125];

};

export default Courses;
