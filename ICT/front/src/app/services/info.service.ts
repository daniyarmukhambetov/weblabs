import {enableProdMode, Injectable} from '@angular/core';
import {Course} from "../interfaces/Course";
import {catchError, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  ROOT = 'http://127.0.0.1:8000/api'
  private header: HttpHeaders = new HttpHeaders()
  private token: String = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwiZXhwIjozfQ.Gymjd-wmad49V6b9zxIrq3KDHZk__Sg67evg3dpFAKQ"
  constructor(private client: HttpClient) {
  }
  getCourses(day: String): Observable<Course[]> {
    // document.domain = "front"
    return this.client.get<Course[]>(`${this.ROOT}/course?day=${day}`, {
      headers: new HttpHeaders({
          'content-type':'application/json',
        'Authorization':`Bearer ${this.token}`,
        "Access-Control-Allow-Origin": '*',})});
  }
  getNextCourse(day: number, time: String) {
    return this.client.get<Course>(`${this.ROOT}/info?day=${day}&time=${time}`,
      {headers: new HttpHeaders({
      'content-type':'application/json',
      'Authorization':`Bearer ${this.token}`,
      "Access-Control-Allow-Origin": '*',})}

      )
  }
}
