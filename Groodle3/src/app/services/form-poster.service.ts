import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';
import { Observable } from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { map, catchError } from 'rxjs/operators';


@Injectable()
export class FormPoster
{
    constructor(private http: Http){}

    private extractData(res: Response)
    {
        let body = res.json();
        return body.fields || { };
    }

    private handleError(error: any)
    {
        console.error('Post error: ', error);
        return Observable.throw(error.statusText);
    }

    postStudentForm(student: Student): Observable<any>
    {
        let body = JSON.stringify(student);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });

        return this.http.post('http://localhost:3100/poststudent', body, options).pipe(
            map(this.extractData),
            catchError(this.handleError)
        )
    }
}