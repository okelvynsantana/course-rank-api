import { CreateCourseDTO } from '../courses/dtos/createCourse.dto';
import { Course } from '../courses/entities/course.entity';

export interface ICoursesRepository {
  findByTitle(title: string): Promise<Course | undefined>;
  findById(id: string): Promise<Course | undefined>;
  findBySchoolName(schoolName: string): Promise<Course | undefined>;
  create(newCourse: CreateCourseDTO): Promise<Course>;
  save(course: Course): Promise<Course>;
}
