export interface Courses {
    id: number;
    progress: number;
    name: string;
    image: string;
    lecturerName: string;
    lecturerImage: string;
    price: number;
    rating: number;
    review: number;
    totalCompleted: number;
    priceWas?: number;
    lecturers: number;
    totalHour: number;
    level: string;
  }