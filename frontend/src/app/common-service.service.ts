import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Iuser } from './modelos/Iuser';
import { user } from './modelos/user';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  private data = new BehaviorSubject(new user("user","user","user"));
  data$ = this.data.asObservable();

  changeData(data: Iuser) {
    this.data.next(data)
  }
}
