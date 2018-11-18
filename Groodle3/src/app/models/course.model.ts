export class Course{
    
    constructor(
        public courseId: number,
        public courseTitle: string,
        public creditHours: number,
        public courseDescription: string,
        public concentration: string
    )
    {}

}