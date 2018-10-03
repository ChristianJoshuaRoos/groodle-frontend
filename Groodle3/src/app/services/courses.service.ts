import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/Rx";
import { Observable } from "rxjs/Rx";
import { Course } from "../models/course.model";

@Injectable()
export class CourseService
{
    constructor(private http: Http)
    {}

    private extractData(res: Response)
    {
        let body = res.json();
        return body || { };
    }

    private handleError(error: any)
    {
        console.error('Post error: ', error);
        return Observable.throw(error.statusText);
    }

    public getCourses():Observable<Course[]>
    {
        return this.http.get("http://localhost:8080/api/course/getCourseList")
                .map(this.extractData)
                .catch(this.handleError);
    }
}