import { Component, OnInit } from '@angular/core';

@Component({ // decorator (Typescript) - Add some info to the class bellow. start with@, just before a class.
  //This decorator (@component) said is a web component.
  selector: 'app-checkbox', // The markup's name. <app-checkbox></app-checkbox> in Html.
  templateUrl: './checkbox.component.html', // Where to find the Html file for the component.
  styleUrls: ['./checkbox.component.scss'] // Same for CSS.
})
export class CheckboxComponent implements OnInit {
 private static counter = 0;
 public id: string;;
  constructor() {
    this.id = 'app-checkbox-'  + CheckboxComponent.counter;
    CheckboxComponent.counter++;
   }

  ngOnInit(): void {
  }

}
