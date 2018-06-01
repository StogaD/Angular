import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { Machine } from '../Model/machine';
import { PlaneService } from '../plane.service';

@Component({
  selector: 'app-airplane-search',
  templateUrl: './airplane-search.component.html',
  styleUrls: ['./airplane-search.component.css']
})
export class AirplaneSearchComponent implements OnInit {

  planes$: Observable<Machine[]>;
  private searchTerms = new Subject<string>();
 
  constructor(private planeService: PlaneService) {}
 
  // Push a search term into the observable stream.
  search(term: string): void {
  

    this.searchTerms.next(term);
  }

  ngOnInit() {

    this.planes$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),

      switchMap((term:string) => this.planeService.searchPlane(term)),
    )
  }

}
