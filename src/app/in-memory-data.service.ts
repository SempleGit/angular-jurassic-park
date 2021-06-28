import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Character } from './characters';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const characters = [
      { id: 11, 
        name: 'Dr. Alan Grant', 
        bio: 'Alan Grant is one of the main characters in the Jurassic Park franchise and the main protagonist in the first Jurassic Park and Jurassic Park III. He is a paleontologist who was invited by John Hammond to his dinosaur park, Jurassic Park. Alan is portrayed very differently over the various canons.', //Wikipedia
        img: '../../assets/images/Alangrant.jpg',
        alt: 'Headshot of Dr. Alan Grant'
      },
      { id: 12, 
        name: 'Dr. Ellie Sattler', 
        bio: 'Ellen "Ellie" Sattler is the only child of Terry and Diane Sattler. She was a graduate student at the Snakewater dig site. Her professor was Dr. Alan Grant. She was a paleobotanist, a paleontologist who specializes in the study of prehistoric plants. She was 24 years old and darkly tanned, most likely due to sun exposure during her digs. She was engaged to Dr. Reiman, a physicist from Berkeley.', //Wiki
        img: '../../assets/images/EllieSattler.jpg',
        alt: 'Dr. Sattler standing in a field'
      },
    ];
    return {characters};
  }

  // Overrides the genId method to ensure that a character always has an id.
  // If the characters array is empty,
  // the method below returns the initial number (11).
  // if the characters array is not empty, the method below returns the highest
  // character id + 1.
  genId(characters: Character[]): number {
    return characters.length > 0 ? Math.max(...characters.map(character => character.id)) + 1 : 11;
  }
}