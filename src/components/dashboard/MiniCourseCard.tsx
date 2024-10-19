import React from "react";
import { formatDuration } from "@/lib/utils";
import { CourseProps } from "@/app/types";
import { FaHeart } from "react-icons/fa6";

interface MiniCourseCardProps {
  course: CourseProps;
  onclick: (id: number) => void;
}

function MiniCourseCard({ course, onclick }: MiniCourseCardProps) {
  return (
    <div className="min-h-[300px] h-[300px] rounded-md overflow-hidden">
      <div className="bg-[#081627] text-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 h-full">
        <div className="relative">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-10 object-cover"
          />
        </div>

        <div className="p-4 flex flex-col gap-8">
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
            <p className="text-gray-300 text-md">
              {course.description.slice(0, 100)}...
            </p>
          </div>

          <div className="flex items-center justify-between mb-4 px-4 gap-4 w-full">
            <button className="rounded-full w-10 h-10 text-2xl cursor-pointer p-2 bg-blue-900 flex items-center justify-center">
              <FaHeart />
            </button>
            <button
              onClick={() => onclick(course.id)}
              className="bg-blue-600 p-2 rounded-full block w-5/6"
            >
              View Course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiniCourseCard;
