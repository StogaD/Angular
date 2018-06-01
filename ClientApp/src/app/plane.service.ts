import { Injectable } from '@angular/core';
import {Machine} from "../app/Model/machine";
import {PLANES} from "../app/Mock/mock-planes"
import {Observable, of} from 'rxjs'
import {MessageService} from './message.service'
import {HttpClient, HttpHeaders} from '@angular/common/http'
      
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PlaneService {
private planeUrl = 'api/planes'; //URL to planes
  
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
  
    
  getPlanes(): Observable<Machine[]>
  {
    this.messageService.add('PlaneService: fetched planes');
   // return of(PLANES);

   return this.http.get<Machine[]>(this.planeUrl)
   .pipe(
    tap(heroes => this.log(`fetched heroes`)),

     catchError(this.handleError('getPlanes',[]))
   );
  }

  getPlane(id: number): Observable<Machine>
  {
    const url = `${this.planeUrl}/${id}`;

    this.messageService.add(`PlaneService: fetched plane id=${id}`);
    var founds = PLANES.find(pl => pl.id == id);

    return this.http.get<Machine>(url).pipe(
    tap(_=> this.log(`fetched hero id=${id}`)),
    catchError(this.handleError<Machine>(`getHero id=${id}`))
    );
    //return of(PLANES.find(plane=> plane.id === id));

  }

  /** POST: add a new hero to the server */
addMachine (plane: Machine): Observable<Machine> {
  return this.http.post<Machine>(this.planeUrl, plane, httpOptions).pipe(
    tap((plane: Machine) => this.log(`added hero w/ id=${plane.id}`)),
    catchError(this.handleError<Machine>('addHero'))
  );
}
/** DELETE: delete the hero from the server */
deletePlane (deletedPlane: Machine | number): Observable<Machine> {
  const id = typeof deletedPlane === 'number' ? deletedPlane : deletedPlane.id;
  const url = `${this.planeUrl}/${id}`;

  return this.http.delete<Machine>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted plane id=${id}`)),
    catchError(this.handleError<Machine>('deletePlane'))
  );
}

/** Search: search the hero in  the server */
searchPlane (term : string):Observable<Machine[]>
{
if(!term.trim())
{
    return of([]);
}
return this.http.get<Machine[]>(`${this.planeUrl}/?name=${term}`).pipe(

  tap(_ => this.log(`found planes matching "${term}"`)),
    catchError(this.handleError<Machine[]>('searchAirplanes', []))

)

}

   /** Log a HeroService message with the MessageService */
   private log(message: string) {
    this.messageService.add('HeroService: ' + message);
   }


updatePlane(plane :Machine):Observable<any>
{
return this.http.put(this.planeUrl, plane, httpOptions ).pipe(
tap(_ => this.log(`updated plane id=${plane.id}`)),
    catchError(this.handleError<any>('updatedPlane'))
)
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
}
