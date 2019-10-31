import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


export interface tipsInterface {
  id: number,
  header: string,
  text: string
}

@Injectable({
  providedIn: 'root'
})
export class TipsService {
  tipsUrl: string = 'assets/tips.json'

  constructor(private http: HttpClient){}

  getTips(): Observable<tipsInterface[]>{
    return this.http.get<tipsInterface[]>(this.tipsUrl)
  }
}
