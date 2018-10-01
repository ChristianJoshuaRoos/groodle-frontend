import {Component} from '@angular/core';
import { Student } from '../models/student.model';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  courses = ['5101', '5125', '5130', '5208', '5210', '5311', '5401', '5402',
    '5460', '5501', '5525', '5567', '5568', '5587', '5588', '5595', '5621',
    '5622', '5623', '5631', '5632', '5661', '5670', '5675', '6101', '6110',
    '6120', '6130', '6140', '6250', '6350', '6361', '6363', '6401', '6450',
    '6452', '6501', '6588', '6595', '6603', '6621', '6625', '6627', '6631',
    '6633', '6634', '6635', '6640', '6645', '6650'];
  model = new Student('', '', []);

  }
