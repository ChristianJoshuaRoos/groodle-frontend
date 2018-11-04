import {Component} from '@angular/core';
import { Student } from '../models/student.model';
import { Course } from '../models/course.model';
import { CourseService } from '../services/courses.service';
import { FormPoster } from '../services/form-poster.service';
import { NgForm } from '@angular/forms';
import { Recommendation } from '../models/recommendation.model';

/* Component decorator is what marks the file as component, provides the tag to reference it, 
links to the (currently empty) style sheet, and provides the template to display information
through this component. */
@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {

  recommendation: Recommendation;
  concentrations = ['Theoretical Computer Science and Programming Languages',
    'Systems and Network', 'Software Systems', 'Software Engineering',
    'Information Assurance', 'Database Systems and Distributed Applications',
    'Computer Graphics and Visual Computing', 'Artificial Intelligence'];
  
  courses: Course[] = [];
  model = new Student('', '', '', '', []);
  hasCoursesTakenError = false;

  //Must mark FormPoster as a provider in Angular.
  constructor(private formPoster: FormPoster, 
              private courseService: CourseService)
  {
    // fetch courses from database to be interacted with by user
    courseService.getCourses()
      .subscribe(
        data => {
          console.log('Success: ', data);
          this.courses = data;
        },
        err => console.log('Error: ', err)
      )
    console.log(this.courses);
  }

  /* This is the method that will be called when the user hits the submit button. 
     It calls the postStudentForm() method to utilize the formPoster service to send
      the student model to the back end */ 
  submitForm(form: NgForm)
  {
    //Validate form.
    this.validateCoursesTaken(this.model.coursesTaken);
    if (this.hasCoursesTakenError)
      return;

    this.formPoster.postStudentForm(this.model)
      .subscribe(
        data => {console.log('Success: ', data);
        this.recommendation = data;
      },
        err => {console.log('Error: ', err);
        this.recommendation = this.formPoster.dummyData;
      }
      )
  }

  // Checks if the model's courseTaken variable has changed- if not, sends an error
  // (because that means the user hasn't selected any courses)
  validateCoursesTaken(value)
  {
    if (value === ['default'])
      this.hasCoursesTakenError = true;
    else
      this.hasCoursesTakenError = false;
  }

}
