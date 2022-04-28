import { Component, OnInit } from '@angular/core';
import {InfoService} from "../services/info.service";
import {Course} from "../interfaces/Course";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  private next_lesson: String = "";
  private time_before: String = "";
  course: any;
  constructor(private service : InfoService) { }

  ngOnInit(): void {
    this.get_next_lesson();
  }
  get_next_lesson() {
    let date = new Date()
    let day = +date.getDay().toString()
    let time = date.toTimeString().split(' ', 1)[0]
    this.service.getNextCourse(day, time).subscribe(course => {
      this.course = course;
      console.log(day, time, course)
    }
    )
    // console.log(day, time, date)
  }

}
