import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';
import { Bedroom } from './classes/bedroom';

@Injectable()
export class BedroomService {

  // private bedroomURL = 'http://localhost:3000/api/bedrooms';  // URL to local api
  private bedroomURL = 'https://ghi-danh-server.herokuapp.com/api/bedrooms';  // URL to web api
  
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  // /** GET bedrooms from the server */
    getBedrooms():Observable<any> {

    return this.http.get(`${this.bedroomURL}`)
      .pipe(
        tap(data => this.log(`fetched bedrooms`)),
        catchError(this.handleError('getBedrooms', []))
      );
  }

    getOneBedroom(id: string):Observable<any> {
     console.log(id)
    return this.http.get(`${this.bedroomURL}/${id}`)
      .pipe(
        tap(data => this.log("getOneBedroom")),
        catchError(this.handleError('getOneBedroom', []))
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

  /** Log a message with the MessageService */
  private log(message: string) {
    this.messageService.add('BedroomService: ' + message);
  }

}
