import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person, Card } from '../models/person.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  public getPeople(): Observable<Person[]> {
    return this.http.post<Person[]>('http://localhost:3000/person/list', {});
  }

  public getPersonCards(id: number): Observable<Card[]> {
    return this.http.post<Card[]>('http://localhost:3000/person/list', {person: id});
  }
}
