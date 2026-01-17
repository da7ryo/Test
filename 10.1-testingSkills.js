const courses = [
  { title: 'English', duration: 30, students: 17, isActive: true },
  { title: 'IT', duration: 70, students: 11, isActive: true },
  { title: 'Math', duration: 45, students: 9, isActive: false },
  { title: 'Biology', duration: 20, students: 18, isActive: false },
  { title: 'Sport', duration: 100, students: 53, isActive: true },
];

function processCourses() {
  return courses.map((item) => {
    return {
      title: item.title,
      students: item.students,
      status: item.isActive === true ? 'ACTIVE' : 'INACTIVE',
    };
  });
}

function getPopularCourses(courses, minStudents) {
  return courses.filter((item) => item.isActive && item.students > minStudents);
}

function getCourseStats(course) {
  return {
    totalCourses: course.length,
    activeCourses: course.filter((item) => item.isActive).length,
    totalStudents: course.reduce((acc, item) => acc + item.students, 0),
  };
}

console.log(getCourseStats(courses));
