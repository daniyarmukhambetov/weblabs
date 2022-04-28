import { Component, OnInit } from '@angular/core';
import {Course} from "../interfaces/Course";
import {InfoService} from "../services/info.service";

@Component({
  selector: 'app-sb',
  templateUrl: './sb.component.html',
  styleUrls: ['./sb.component.css']
})
export class SbComponent implements OnInit {

  private courses: Course[] = []
  constructor(private service: InfoService) {
  }

  ngOnInit(): void {
    this.getCourses();
  }
  getCourses() {
    this.service.getCourses('6').subscribe(
      courses => {
        this.courses = courses;
        // console.log(courses)
      }
    )
  }
  Courses(): Course[] {
    return this.courses
  }

}
