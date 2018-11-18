import { Course } from "./course.model";

export class Student{
    constructor(
        public firstName: string,
        public lastName: string,
        public concentration: string,
        public studentID: string,
        public coursesTaken: Course[],
    )
    {}
}