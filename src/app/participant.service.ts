import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Participant } from './classes/participant';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ParticipantService {

  private participantUrl = 'http://localhost:3000/api/participants';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET participants from the server */
  getParticipants (): Observable<Participant[]> {

    return this.http.get<Participant[]>(this.participantUrl)
      .pipe(
        tap(data => this.log(`fetched participant`)),
        catchError(this.handleError('getParticipants', []))
      );
  }

  /** GET participant by id. Return `undefined` when id not found */
  getParticipantNo404<Data>(id: number): Observable<Participant> {
    const url = `${this.participantUrl}/?id=${id}`;
    return this.http.get<Participant[]>(url)
      .pipe(
        map(participant => participant[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} participant id=${id}`);
        }),
        catchError(this.handleError<Participant>(`getParticipant id=${id}`))
      );
  }

  /** GET participant by id. Will 404 if id not found */
  getParticipant(id: string): Observable<Participant> {
    const url = `${this.participantUrl}/${id}`;
    return this.http.get<Participant>(url).pipe(
      tap(_ => this.log(`fetched participant id=${id}`)),
      catchError(this.handleError<Participant>(`getParticipant id=${id}`))
    );
  }

  /* GET participant whose name contains search term */
  searchParticipant(term: string): Observable<Participant[]> {
    if (!term.trim()) {
      // if not search term, return empty participant array.
      return of([]);
    }
    return this.http.get<Participant[]>(`api/participant/?name=${term}`).pipe(
      tap(_ => this.log(`found participants matching "${term}"`)),
      catchError(this.handleError<Participant[]>('searchParticipant', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new participant to the server */
  addParticipant (participant: Participant): Observable<Participant> {
    return this.http.post<Participant>(this.participantUrl, participant, httpOptions).pipe(
      tap((participant: Participant) => this.log(`added participant`)),
      catchError(this.handleError<Participant>('addParticipant'))
    );
  }

  /** DELETE: delete the participant from the server */
  deleteParticipant (participant: Participant | number): Observable<Participant> {
    const _id = typeof participant === 'number' ? participant : participant._id;
    const url = `${this.participantUrl}/${_id}`;

    return this.http.delete<Participant>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted participant _id=${_id}`)),
      catchError(this.handleError<Participant>('deleteParticipant'))
    );
  }

  /** PUT: update the participant on the server */
  updateParticipant (participant: Participant): Observable<any> {
    return this.http.put(this.participantUrl, participant, httpOptions).pipe(
      tap(_ => this.log(`updated participant id=${participant._id}`)),
      catchError(this.handleError<any>('updateParticipant'))
    );
  }

  getClasses():Observable<any> {

    return this.http.get('http://localhost:3000/api/classes')
      .pipe(
        tap(data => this.log(`fetched classes`)),
        catchError(this.handleError('getClasses', []))
      );
  }

   getClassesCSV():Observable<any> {

    return this.http.get('http://localhost:3000/api/csv/class/1')
  }

  getBedrooms():Observable<any> {

    return this.http.get('http://localhost:3000/api/bedrooms')
      .pipe(
        tap(data => this.log(`fetched bedrooms`)),
        catchError(this.handleError('getBedrooms', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a ParticipantService message with the MessageService */
  private log(message: string) {
    this.messageService.add('ParticipantService: ' + message);
  }
}