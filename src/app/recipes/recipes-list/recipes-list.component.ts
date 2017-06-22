import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('test recipe', 'test recipe description', 'http://www.potato.ie/media/1008/cheesy-potato-bites.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
