import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";
import { Component, inject, Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpParams} from '@angular/common/http';
import { Observable, of, OperatorFunction } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import {MatIconModule} from "@angular/material/icon";


const WIKI_URL = 'https://en.wikipedia.org/w/api.php';
const PARAMS = new HttpParams({
  fromObject: {
    action: 'opensearch',
    format: 'json',
    origin: '*',
  },
});

@Injectable()
export class WikipediaService {
  private http = inject(HttpClient);

  search(term: string) {
    if (term === '') {
      return of([]);
    }

    return this.http
      .get<[any, string[]]>(WIKI_URL, { params: PARAMS.set('search', term) })
      .pipe(map((response) => response[1]));
  }
}

@Component({
  selector: 'app-custom',
  standalone: true,
  imports: [NgbDropdownModule, NgbTypeaheadModule, FormsModule, JsonPipe, HttpClientModule, MatIconModule],
  templateUrl: './custom.component.html',
  providers: [WikipediaService],
  styleUrl: './custom.component.css'
})

export class CustomComponent {
  private service = inject(WikipediaService);

  model1: any;
  searching1 = false;
  searchFailed1 = false;

  model2: any;
  searching2 = false;
  searchFailed2 = false;

  model3: any;
  searching3 = false;
  searchFailed3 = false;

  model4: any;
  searching4 = false;
  searchFailed4 = false;

  model5: any;
  searching5 = false;
  searchFailed5 = false;

  search1: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => (this.searching1 = true)),
      switchMap((term) =>
        this.service.search(term).pipe(
          tap(() => (this.searchFailed1 = false)),
          catchError(() => {
            this.searchFailed1 = true;
            return of([]);
          }),
        ),
      ),
      tap(() => (this.searching1 = false)),
    );

  search2: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => (this.searching2 = true)),
      switchMap((term) =>
        this.service.search(term).pipe(
          tap(() => (this.searchFailed2 = false)),
          catchError(() => {
            this.searchFailed2 = true;
            return of([]);
          }),
        ),
      ),
      tap(() => (this.searching2 = false)),
    );

  search3: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => (this.searching3 = true)),
      switchMap((term) =>
        this.service.search(term).pipe(
          tap(() => (this.searchFailed3 = false)),
          catchError(() => {
            this.searchFailed3 = true;
            return of([]);
          }),
        ),
      ),
      tap(() => (this.searching3 = false)),
    );
  search4: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => (this.searching4 = true)),
      switchMap((term) =>
        this.service.search(term).pipe(
          tap(() => (this.searchFailed4 = false)),
          catchError(() => {
            this.searchFailed4 = true;
            return of([]);
          }),
        ),
      ),
      tap(() => (this.searching4 = false)),
    );

  search5: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => (this.searching5 = true)),
      switchMap((term) =>
        this.service.search(term).pipe(
          tap(() => (this.searchFailed5 = false)),
          catchError(() => {
            this.searchFailed5 = true;
            return of([]);
          }),
        ),
      ),
      tap(() => (this.searching5 = false)),
    );



}
