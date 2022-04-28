import {Component, OnInit} from '@angular/core';
import {InfoService} from "../services/info.service";
import {Course} from "../interfaces/Course";

@Component({
  selector: 'app-pn',
  templateUrl: './pn.component.html',
  styleUrls: ['./pn.component.css']
})
export class PnComponent implements OnInit {
  private courses: Course[] = []
  constructor(private service: InfoService) {
  }
  ngOnInit(): void {
    this.getCourses();
    // console.log(this.courses)
  }
  getCourses() {
    this.service.getCourses('1').subscribe(
      courses => {
        this.courses = courses;
        for (let course of courses) {
          let time = course.schedule.split('-')
          let start = +time[0].split(':', 1)[0]
          let end = +time[1].split(':', 1)[0]
          if (end - start == 1) {
            let div = document.getElementById(`${start}`)!!
            div.setAttribute('style', 'color:blue;')
            div.innerHTML = `
              <div>
              ${course.course_name}
              </div>
            `
            if (course.cab.length <= 5) {
              div.innerHTML += `(offline) <div>${course.cab}</div>`
            } else {
              div.innerHTML += `
                (online) <div>
                <a href="${course.cab}">Link</a>
                </div>`
            }
          } else {
            let div = document.getElementById(`${start}`)!!
            div.setAttribute('style', 'color:blue;')
            div.innerHTML = `
              <div>
              ${course.course_name}
              </div>
            `
            if (course.cab.length <= 5) {
              div.innerHTML += `(offline) <div>${course.cab}</div>`
            } else {
              div.innerHTML += `
                (online) <div>
                <a href="${course.cab}">Link</a>
                </div>`
            }
            let div2 = document.getElementById(`${start + 1}`)!!
            div2.setAttribute('style', 'color:blue;')
            div2.innerHTML = `
              <div>
              ${course.course_name}
              </div>
            `
            if (course.cab.length <= 5) {
              div2.innerHTML += `(offline) <div>${course.cab}</div>`
            } else {
              div2.innerHTML += `
                (online) <div>
                <a href="${course.cab}">Link</a>
                </div>`
            }
          }
          // console.log(course)
          // console.log(star t)
          // console.log(end)

        }
      }
    )
  }
  Courses(): Course[] {
    return this.courses
  }

}
