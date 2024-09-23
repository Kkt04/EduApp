import React from "react";
import Back from "../common/back/Back";
import CoursesCard from "./CourseCard";


const CourseHome = () => {
  return (
    <>
      <Back title='Explore Courses' />
      <CoursesCard />
   
    </>
  );
};

export default React.memo(CourseHome);
