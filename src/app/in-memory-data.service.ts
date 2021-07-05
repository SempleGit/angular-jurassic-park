import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Character } from './characters';
import { ShopItems } from './shop-items';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const characters = [
      { 
        id: 11, 
        name: 'Dr. Alan Grant', 
        bio: 'Alan Grant is one of the main characters in the Jurassic Park franchise and the main protagonist in the first Jurassic Park and Jurassic Park III. He is a paleontologist who was invited by John Hammond to his dinosaur park, Jurassic Park. Alan is portrayed very differently over the various canons.', //Wikipedia
        img: './assets/images/characters/Alangrant.jpg',
        alt: 'Headshot of Dr. Alan Grant',
        figcaption: 'Headshot of Dr. Alan Grant.'
      },
      { 
        id: 12, 
        name: 'Dr. Ellie Sattler', 
        bio: 'Ellen "Ellie" Sattler is the only child of Terry and Diane Sattler. She was a graduate student at the Snakewater dig site. Her professor was Dr. Alan Grant. She was a paleobotanist, a paleontologist who specializes in the study of prehistoric plants. She was 24 years old and darkly tanned, most likely due to sun exposure during her digs. She was engaged to Dr. Reiman, a physicist from Berkeley.', //Wiki
        img: './assets/images/characters/EllieSattler.jpg',
        alt: 'Dr. Sattler standing in a field',
        figcaption: 'Dr. Sattler standing in an open during a tour of Jurassic Park.'
      },
      { 
        id: 13, 
        name: 'Owen Grady', 
        bio: 'Owen Grady is an animal behaviorist who was employed by Jurassic World as a Velociraptor trainer. After the fall of Jurassic World in 2015, Grady briefly entered a relationship with Claire Dearing, the former park manager of Jurassic World.[1] However this did not last and Owen would later go off to live on his own in Northern California. Dearing would later recruit him to help save Blue, a raptor he raised, from the eruption of Mt. Sibo. Owen would later participate in an incident at Lockwood Manor in which he witnessed dinosaurs being released into the wider world.', //Wiki
        img: './assets/images/characters/OwenGrady.jpg',
        alt: 'Owen Grady looking determined',
        figcaption: 'Owen Grady preparing to rescue the island in Jurassic World.'
      },
    ];

    const shopItems = [
      {
        id: 11,
        itemName: 'Jurassic Park T-Shirt',
        price: 18.99,
        img: './assets/images/shopItems/jpT.jfif',
        alt: 'Heather Grey Jurassic Park T-Shirt',
      },
      {
        id: 12,
        itemName: 'Jurassic World 5-Movie Collection',
        price: 31.99,
        img: './assets/images/shopItems/jpBluRay.jpg',
        alt: 'Blu-Ray collection cover art for the 5 Jurassic World Movies',
      },
      {
        id: 13,
        itemName: 'Jurassic World Pajama Pants',
        price: 21.99,
        img: './assets/images/shopItems/jpPants.jpg',
        alt: 'Pajama Pants with Jurassic Park logo',
      },
      {
        id: 14,
        itemName: 'Jurassic Park: A Novel',
        price: 14.99,
        img: './assets/images/shopItems/jpBookCover.jpg',
        alt: 'Jurassic Park Novel Cover Art',
      },
      {
        id: 15,
        itemName: 'Jurassic World Pajama Pants',
        price: 21.99,
        img: './assets/images/shopItems/jpPants.jpg',
        alt: 'Pajama Pants with Jurassic Park logo',
      },

    ];

    return {characters, shopItems};
  }

  // Overrides the genId method to ensure that a an item always has an id.
  // If the array is empty, the method below returns the initial number.
  // if the array is not empty, the method below returns the highest id + 1.
  // 
  genId(characters: Character[]): number;
  genId(shopItems: ShopItems[]): number;
  genId(elements: any[]): number {
    return elements.length > 0 ? Math.max(...elements.map(element => element.id)) + 1 : 11;
  }

}