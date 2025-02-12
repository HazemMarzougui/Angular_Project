import { Component } from '@angular/core';
import { Apartment } from '../Core/Models/apartment';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent {

  listApartments: Apartment[] = [
    { apartNum: 1, floorNum: 2, surface: 75, terrace: true, surfaceterrace: 10, category: '2 Bedroom', ResidenceId: 1 },
    { apartNum: 2, floorNum: 1, surface: 80, terrace: false, surfaceterrace: 0, category: '3 Bedroom', ResidenceId: 2 },
    { apartNum: 3, floorNum: 3, surface: 50, terrace: true, surfaceterrace: 12, category: '1 Bedroom', ResidenceId: 1 }
  ];

  filteredApartments: Apartment[] = [...this.listApartments];
  searchQuery: string = '';

  // Array to store favorite apartments
  favoriteApartments: Apartment[] = [];

  // Filter method for apartments based on category, floor, and surface
  filterApartments() {
    const search = this.searchQuery.trim().toLowerCase();

    this.filteredApartments = this.listApartments.filter(apartment => {
      const matchesCategory = apartment.category.toLowerCase().includes(search);
      const matchesFloor = apartment.floorNum.toString().includes(search);
      const matchesSurface = apartment.surface.toString().includes(search);

      return matchesCategory || matchesFloor || matchesSurface;
    });
  }

  // Add or remove an apartment from the favorites list
  toggleFavorite(apartment: Apartment) {
    const index = this.favoriteApartments.findIndex(fav => fav.apartNum === apartment.apartNum);
    if (index > -1) {
      // If the apartment is already in the favorites, remove it
      this.favoriteApartments.splice(index, 1);
    } else {
      // If the apartment is not in the favorites, add it
      this.favoriteApartments.push(apartment);
    }
  }

  // Check if an apartment is in the favorites list
  isFavorite(apartment: Apartment): boolean {
    return this.favoriteApartments.some(fav => fav.apartNum === apartment.apartNum);
  }
}
