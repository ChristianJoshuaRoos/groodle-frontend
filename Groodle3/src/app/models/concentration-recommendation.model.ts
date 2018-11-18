import { Course } from "./course.model";

export class ConcentrationRecommendation
{
    constructor(
        public concentration: String,
        public recommendedCourses: Course[]
    )
    {}
}