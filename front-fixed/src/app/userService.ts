import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = 'http://localhost:3000/';

  constructor(
    public http: HttpClient,
    public https: HttpClient,
  ) {}

  getUserByCI(cedula: string) {
    return new Promise((resolve) => {
      this.http.get(this.url + 'userByCI/' + cedula).subscribe({
        next: (data) => {
          resolve(data);
        },
        error: (err) => {
          console.log(err);
        },
      });
    });
  }

  createUser(data: any) {
    return new Promise((resolve) => {
      this.https.post(this.url + 'createUser', data).subscribe({
        next: (data) => {
          resolve(data);
        },
        error: (err) => {
          console.log(err);
        },
      });
    });
  }

  getAllUsers() {
    return new Promise((resolve) => {
      this.http.get(this.url + 'getAllUsers').subscribe({
        next: (data) => {
          resolve(data);
        },
        error: (err) => {
          console.log(err);
        },
      });
    });
  }

  getUserById(id: number) {
    return new Promise((resolve) => {
      this.http.get(this.url + 'getUserById/' + id).subscribe({
        next: (data) => {
          resolve(data);
        },
        error: (err) => {
          console.log(err);
        },
      });
    });
  }

  updateUser(id: number, data: any) {
    return new Promise((resolve) => {
      this.https.put(this.url + 'updateUser/' + id, data).subscribe({
        next: (data) => {
          resolve(data);
        },
        error: (err) => {
          console.log(err);
        },
      });
    });
  }
}
