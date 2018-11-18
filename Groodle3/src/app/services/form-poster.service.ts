import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';
import { Observable } from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class FormPoster
{
    public dummyData: any = {
        "depthRecommendation": {
            "concentration": "Systems and Networks",
            "recommendedCourses": [
                {
                    "courseId": 5311,
                    "courseTitle": "Computer Networks and Telecommunications",
                    "creditHours": 3,
                    "courseDescription": "Overview of modern computer communication networks covering the theoretic multi-layered model from the top down with an emphasis on working protocols and algorithms. Topics include client-server model, common application protocols, connectionless and reliable transport, flow and congestion control, routing, switching, shared medium protocols, transmission media and network hardware. ",
                    "concentration": "Systems and Networks"
                },
                {
                    "courseId": 5101,
                    "courseTitle": "Analysis of Algorithms",
                    "creditHours": 3,
                    "courseDescription": "Precise definition of the concept of an algorithm; techniques for algorithm verification; analyzing algorithm performance; applications to practical algorithms.",
                    "concentration": "Theoretical Computer Science and Programming Languages"
                }
            ]
        },
        "breadthRecommendations": [
            {
                "concentration": "Theoretical Computer Science and Programming Languages",
                "recommendedCourses": [
                    {
                        "courseId": 5101,
                        "courseTitle": "Analysis of Algorithms",
                        "creditHours": 3,
                        "courseDescription": "Precise definition of the concept of an algorithm; techniques for algorithm verification; analyzing algorithm performance; applications to practical algorithms.",
                        "concentration": "Theoretical Computer Science and Programming Languages"
                    }
                ]
            },
            {
                "concentration": "Information Assurance",
                "recommendedCourses": [
                    {
                        "courseId": 5621,
                        "courseTitle": "Intro to Cyber Security",
                        "creditHours": 3,
                        "courseDescription": "Overview of cyber security; physical security models; authentication and access control mechanisms; application and operating system level security; malicious software; overview of digital forensics; encryption, including private- and public-key encryption methods. A balance between theory and historical/current practice. Students will be required to develop a large project in a team setting.",
                        "concentration": "Information Assurance"
                    }
                ]
            },
            {
                "concentration": "Software Systems",
                "recommendedCourses": [
                    {
                        "courseId": 6220,
                        "courseTitle": "Software Testing and Quality Assurance",
                        "creditHours": 3,
                        "courseDescription": "Theories and techniques for designing and implementing effective software tests and quality assurance mechanisms. Topics include: Introduction to software testing, Unit Testing, Functional Testing, Black-box Testing (random testing, partition testing, data testing, syntax-based testing), White-box Testing (control flow testing, data flow testing), Software Quantification (metrics), Software Quality Metrics, Test Quality and Code Coverage, Test Driven Development, Code Quality, Code Smells, Refactoring, Regression Testing, Smoke Testing, Usability Testing, and Security Testing.",
                        "concentration": "Software Systems"
                    }
                ]
            },
            {
                "concentration": "Database Systems and Distributed Applications",
                "recommendedCourses": [
                    {
                        "courseId": 6250,
                        "courseTitle": "Big Data Analytics and Systems",
                        "creditHours": 3,
                        "courseDescription": "This course covers a combination of knowledge in data mining, database warehousing, and distributed systems for utilizing information assets of high volume, high velocity, high variety, and high veracity. The class discussions will cover the key problems, theoretical perspectives, methodologies, algorithms, technologies and tools in these involved areas such as data exploration techniques, linked data perspectives, semantic data services, statistical analysis for big data, and the supporting tools in distributed systems including HADOOP, Map Reduce, Hive and HBase as well as Sal OLAP extensions.",
                        "concentration": "Database Systems and Distributed Applications"
                    }
                ]
            },
            {
                "concentration": "Computer Graphics and Visual Computing",
                "recommendedCourses": [
                    {
                        "courseId": 6633,
                        "courseTitle": "Computer Vision",
                        "creditHours": 3,
                        "courseDescription": "This course provides an overview of fundamental techniques for representing and recognizing visual patterns in two or three dimensions. Topics covered include segmentation and morphology, pattern recognition and classification, color- and text-based measures, motion analysis and optical flow, three-dimensional models from stereo imaging, knowledge-based systems and scene understanding.",
                        "concentration": "Computer Graphics and Visual Computing"
                    }
                ]
            },
            {
                "concentration": "Artificial Intelligence",
                "recommendedCourses": [
                    {
                        "courseId": 5525,
                        "courseTitle": "Introduction to Artificial Intelligence",
                        "creditHours": 3,
                        "courseDescription": "Introduction to the problem domain of artificial intelligence and the methods used to solve those problems. Topics include knowledge representation, search strategies, and surveys of principal subareas of artificial intelligence such as expert systems, natural language processing, reasoning systems, games, learning, and vision. Programming assignments in a current artificial intelligence language will be required.",
                        "concentration": "Artificial Intelligence"
                    }
                ]
            },
            {
                "concentration": "Bioinformatics",
                "recommendedCourses": [
                    {
                        "courseId": 6587,
                        "courseTitle": "Advanced Machine Learning in Bioinformatics I",
                        "creditHours": 3,
                        "courseDescription": "An in-depth survey of advanced machine learning algorithms and their applications to bioinformatics. Selected supervised and unsupervised learning algorithms will be discussed in much technical detail. Applications to computational systems biology, personalized medicine, and biomarker discovery will be introduced. Students will have opportunities to learn state-of-the-art machine learning algorithms and implementations.",
                        "concentration": "Bioinformatics"
                    }
                ]
            }
        ]
    };

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

        return this.http.post('http://localhost:8080/api/planning/getRecommendation', body, options).pipe(
            map(this.extractData),
            catchError(this.handleError)
        )
    }
}