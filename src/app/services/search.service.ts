import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private _restaurantList = new BehaviorSubject<any[]>([]);

  get restaurantList() {
    return this._restaurantList.asObservable();
  }

  updateRestaurantList(newList: any[]) {
    this._restaurantList.next(newList);
    localStorage.setItem("viewRestaurantList", JSON.stringify(newList));
  }
}
