import { Component } from '@angular/core';
import { Residence } from 'src/app/Core/Models/residence';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
  listResidences: Residence[] = [
    { id: 1, name: "El fel", address: "Borj Cedria", image: "../../assets/images/R1.jpg", status: "Disponible" },
    { id: 2, name: "El yasmine", address: "Ezzahra", image: "../../assets/images/R2.jpg", status: "Disponible" },
    { id: 3, name: "El Arij", address: "Rades", image: "../../assets/images/R3.jpg", status: "Vendu" },
    { id: 4, name: "El Anber", address: "inconnu", image: "../../assets/images/R4.jpeg", status: "En Construction" }
  ];

  filteredResidences: Residence[] = [...this.listResidences];
  selectedResidenceId: number | null = null;
  favoriteResidences: Residence[] = [];
  searchAddress: string = '';

  showR(R: Residence) {
    if (R.address === "inconnu") {
      alert("Unknown Address");
    } else {
      this.selectedResidenceId = R.id;
    }
  }

  toggleFavorite(R: Residence) {
    const index = this.favoriteResidences.findIndex(res => res.id === R.id);
    if (index > -1) {
      this.favoriteResidences.splice(index, 1);
    } else {
      this.favoriteResidences.push(R);
    }
  }

  isFavorite(R: Residence): boolean {
    return this.favoriteResidences.some(res => res.id === R.id);
  }

  filterResidences() {
    const search = this.searchAddress.trim().toLowerCase();
    this.filteredResidences = this.listResidences.filter(residence =>
      residence.address.toLowerCase().includes(search) || residence.name.toLowerCase().includes(search)
    );
  }
}
