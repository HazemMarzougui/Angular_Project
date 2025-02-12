import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apartment } from 'src/app/Core/Models/apartment';

@Component({
  selector: 'app-apartments-by-residence',
  templateUrl: './apartments-by-residence.component.html',
  styleUrls: ['./apartments-by-residence.component.css']
})
export class ApartmentsByResidenceComponent implements OnInit {

  // List of apartments (you can fetch this from your API or service)
  listApartments: Apartment[] = [
    { apartNum: 1, floorNum: 2, surface: 75, terrace: true, surfaceterrace: 10, category: '2 Bedroom', ResidenceId: 1 },
    { apartNum: 2, floorNum: 1, surface: 80, terrace: false, surfaceterrace: 0, category: '3 Bedroom', ResidenceId: 2 },
    { apartNum: 3, floorNum: 3, surface: 50, terrace: true, surfaceterrace: 12, category: '1 Bedroom', ResidenceId: 1 }
  ];

  // Apartments filtered by the selected residence ID
  filteredApartments: Apartment[] = [];

  // Current residence ID from the route
  residenceId: number = 0;

  // Search query for filtering apartments
  searchQuery: string = '';

  // List of favorite apartments
  favoriteApartments: Apartment[] = [];

  // Initialize and get the residence ID from the route
  ngOnInit(): void {
    // Get the residenceId from route params
    this.residenceId = Number(this.route.snapshot.paramMap.get('residenceId'));

    // Filter apartments by the residenceId
    this.filteredApartments = this.listApartments.filter(apartment => apartment.ResidenceId === this.residenceId);
  }

  // Filter apartments based on search query (category, floor, or surface)
  filterApartments() {
    const search = this.searchQuery.trim().toLowerCase();

    this.filteredApartments = this.listApartments.filter(apartment => {
      const matchesCategory = apartment.category.toLowerCase().includes(search);
      const matchesFloor = apartment.floorNum.toString().includes(search);
      const matchesSurface = apartment.surface.toString().includes(search);

      return matchesCategory || matchesFloor || matchesSurface;
    });
  }

  // Toggle favorite for apartments
  toggleFavorite(apartment: Apartment) {
    const index = this.favoriteApartments.findIndex(fav => fav.apartNum === apartment.apartNum);
    if (index > -1) {
      this.favoriteApartments.splice(index, 1); // Remove from favorites
    } else {
      this.favoriteApartments.push(apartment); // Add to favorites
    }
  }

  // Check if apartment is in the favorites list
  isFavorite(apartment: Apartment): boolean {
    return this.favoriteApartments.some(fav => fav.apartNum === apartment.apartNum);
  }

  constructor(private route: ActivatedRoute) {}
}
