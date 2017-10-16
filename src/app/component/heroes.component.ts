import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Hero } from '../model/hero';
import { HeroService } from '../service/hero.service'

@Component({
  selector: 'my-heroes',
  templateUrl: '../html/heroes.component.html',
  styleUrls: ['../css/heroes.component.css']
})

export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService, private router: Router) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes)
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  goToDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}

