import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import {
  SingleUserResponseI,
  User,
} from '../interfaces/user-request.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl: string = 'https://reqres.in/api/users';
  private httpClient = inject(HttpClient);

  getUserById(id: number): Observable<User> {
    return this.httpClient
      .get<SingleUserResponseI>(`${this.baseUrl}/${id}`)
      .pipe(
        map((response) => response.data),
        tap((user) => console.log(user))
      );
  }
}
