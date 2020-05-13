import { Component, OnInit } from '@angular/core';
import { Recipie } from "../recipie.model";

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {

  recipies: Recipie[] = [
new Recipie('a test recipie', 'description', 'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/16:9/w_1600%2Cc_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg'),
new Recipie('a test recipie', 'description', 'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/16:9/w_1600%2Cc_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg'),new Recipie('a test recipie', 'description', 'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/16:9/w_1600%2Cc_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg')

  ];

  constructor() { }

  ngOnInit() {
  }

}
