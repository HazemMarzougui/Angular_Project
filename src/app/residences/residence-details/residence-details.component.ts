import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Residence } from 'src/app/Core/Models/residence';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent implements OnInit {
  residenceId!: number;
  residence: Residence | undefined;

  listResidences: Residence[] = [
    { id: 1, name: "El fel", address: "Borj Cedria", image: "../../assets/images/R1.jpg", status: "Disponible" },
    { id: 2, name: "El yasmine", address: "Ezzahra", image: "../../assets/images/R2.jpg", status: "Disponible" },
    { id: 3, name: "El Arij", address: "Rades", image: "../../assets/images/R3.jpg", status: "Vendu" },
    { id: 4, name: "El Anber", address: "inconnu", image: "../../assets/images/R4.jpeg", status: "En Construction" }
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.residenceId = +params['id']; // Get residenceId from route params
      this.residence = this.listResidences.find(res => res.id === this.residenceId); // Find the residence by id

      if (!this.residence) {
        this.router.navigate(['/residences']); // Navigate to list if residence not found
      }
    });
  }

  goToNextResidence() {
    const nextResidenceId = this.residenceId + 1;
    const nextResidence = this.listResidences.find(res => res.id === nextResidenceId);
    
    if (nextResidence) {
      this.router.navigate(['/residences', nextResidenceId]);
    } else {
      // If no next residence exists, loop back to the first residence
      this.router.navigate(['/residences', 1]);
    }
  }

  // Navigate to Apartments by Residence
  viewApartmentsByResidence() {
    this.router.navigate(['/apartments', this.residenceId]);
  }
}
