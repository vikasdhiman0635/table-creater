import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  displayIndex: number[] = [];


  tableHeaders: any[] =[];


  constructor() { }
}
