import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Loginmodel, user } from '../model/Loginmodel';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private http: HttpClient) {}
  Proceedlogin(_data: Loginmodel) {
    return this.http.get<user[]>(
      'http://localhost:3000/user?id=' +
        _data.username +
        '&&password=' +
        _data.password
    );
  }

  isLoggedIn() {
    return localStorage.getItem('username') != null;
  }

  ProceedRegister(_data: user) {
    return this.http.post('http://localhost:3000/user', _data);
  }
}
