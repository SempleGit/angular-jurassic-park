import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

import { Character } from '../characters';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: Character[] = [];
  constructor(private characterService: CharacterService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {
    this.characterService.getCharacters().subscribe(characters => this.characters = characters);
  }

  goToItems() {
    this.router.navigate(['characters'], { relativeTo: this.route });
  }

}
