import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import { Course } from "../models/course.model";
import { map, catchError } from 'rxjs/operators';
/* This component contains the class files for both the Course 
and formPoster services. The extractData() and handleError() methods are standard. */
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

    // gets course list from backend
    public getCourses():Observable<Course[]>
    {
        return this.http.get("http://localhost:8080/api/course/getCourseList").pipe(
            map(this.extractData),
            catchError(this.handleError)
        )
    }
}