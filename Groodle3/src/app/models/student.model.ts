
export class Student{
    constructor(
        public firstName: string,
        public lastName: string,
        public specialty: string,
        public studentID: number,
        public coursesTaken: string[],
    )
    {}
}