export class Course{
    
    constructor(
        public course_id: number,
        public course_name: string,
        public credit_hours: number,
        public course_description: string,
        public speciality: string
    )
    {}

}