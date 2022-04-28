import { Component, OnInit } from '@angular/core';
import {Course} from "../interfaces/Course";
import {InfoService} from "../services/info.service";

@Component({
  selector: 'app-ct',
  templateUrl: './ct.component.html',
  styleUrls: ['./ct.component.css']
})
export class CtComponent implements OnInit {

  private courses: Course[] = []
  constructor(private service: InfoService) {
  }

  ngOnInit(): void {
    this.getCourses();
  }
  getCourses() {
    this.service.getCourses('4').subscribe(
      courses => {
        this.courses = courses;
        // console.log(courses)
        for (let course of courses) {
          let time = course.schedule.split('-')
          let start = +time[0].split(':', 1)[0]
          let end = +time[1].split(':', 1)[0]
          if (end - start == 1) {
            let div = document.getElementById(`${start}_4`)!!
            div.setAttribute('style', 'color:blue;')
            div.innerHTML = `
              ${course.course_id}
              ${course.course_name}
            `
          } else {
            let div = document.getElementById(`${start}_4`)!!
            div.setAttribute('style', 'color:blue;')
            div.innerHTML = `
              ${course.course_id}
              ${course.course_name}
            `
            let div2 = document.getElementById(`${start + 1}_4`)!!
            div2.setAttribute('style', 'color:blue;')
            div2.innerHTML = `
              ${course.course_id}
              ${course.course_name}
            `
          }
          // console.log(start)
          // console.log(end)

        }
      }
    )
  }
  Courses(): Course[] {
    return this.courses
  }

}
