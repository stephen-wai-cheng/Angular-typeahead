import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-type-ahead-route',
  templateUrl: './type-ahead-route.component.html'
})
export class TypeAheadRouteComponent implements OnInit {
  autoCompleteText = '';

  constructor() { }

  ngOnInit() {
  }

  getMovieList(years: number[]) {
    return movies.filter(movie => years.indexOf(movie.year) > -1).map(movie => movie.movie);
  }
}

const movies = [
  { movie: 'Captain America: Civil War', year: 2016 },
  { movie: 'Rogue One: A Star Wars Story', year: 2016 },
  { movie: 'Finding Dory', year: 2016 },
  { movie: 'Zootopia', year: 2016 },
  { movie: 'The Jungle Book', year: 2016 },
  { movie: 'The Secret Life of Pets', year: 2016 },
  { movie: 'Batman v Superman: Dawn of Justice', year: 2016 },
  { movie: 'Fantastic Beasts and Where to Find Them', year: 2016 },
  { movie: 'Deadpool	20th Century Fox', year: 2016 },
  { movie: 'Suicide Squad', year: 2016 },
  { movie: 'Star Wars: The Last Jedi', year: 2017 },
  { movie: 'Beauty and the Beast', year: 2017 },
  { movie: 'The Fate of the Furious', year: 2017 },
  { movie: 'Despicable Me 3', year: 2017 },
  { movie: 'Jumanji: Welcome to the Jungle', year: 2017 },
  { movie: 'Spider-Man: Homecoming', year: 2017 },
  { movie: 'Wolf Warrior 2', year: 2017 },
  { movie: 'Guardians of the Galaxy Vol. 2', year: 2017 },
  { movie: 'Thor: Ragnarok', year: 2017 },
  { movie: 'Wonder Woman', year: 2017 }
];
