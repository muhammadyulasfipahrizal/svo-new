import type { Student } from "./Student.type";

export const StudentDummyData: Student[] = [
    {
        id: 1,
        name: "Graphic Design",
        image: '/assets/img/svo-student/grades/1.png',
        progress: Math.round(Math.random() * 100),
        grade: Math.round(Math.random() * 100),
        status: "pass",
        daily: 70,
        quiz: Math.round(Math.random() * 100),
        assesment: Math.round(Math.random() * 100),
        midterm: Math.round(Math.random() * 100),
        final: Math.round(Math.random() * 100),
    },
    {
        id: 2,
        name: "Web Development",
        image: '/assets/img/svo-student/grades/2.png',
        progress: Math.round(Math.random() * 100),
        grade: Math.round(Math.random() * 100),
        status: "fail",
        daily: Math.round(Math.random() * 100),
        quiz: Math.round(Math.random() * 100),
        assesment: Math.round(Math.random() * 100),
        midterm: Math.round(Math.random() * 100),
        final: Math.round(Math.random() * 100),
    },
    {
        id: 3,
        name: "UI UX Design",
        image: '/assets/img/svo-student/grades/3.png',
        progress: 0,
        grade: 0,
        status: "none",
        daily: 0,
        quiz: 0,
        assesment: 0,
        midterm: 0,
        final: 0,
    },
    {
        id: 4,
        name: "Coding",
        image: '/assets/img/svo-student/grades/4.jpg',
        progress: Math.round(Math.random() * 100),
        grade: Math.round(Math.random() * 100),
        status: "fail",
        daily: Math.round(Math.random() * 100),
        quiz: Math.round(Math.random() * 100),
        assesment: Math.round(Math.random() * 100),
        midterm: Math.round(Math.random() * 100),
        final: Math.round(Math.random() * 100),
    },
]