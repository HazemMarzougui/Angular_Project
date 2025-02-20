import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent {

  apartment = {
    residenceId: null,
    number: '',
    floor: 1,
    status: 'Available'
  };

  constructor(private router: Router) {}

  submitApartment() {
    console.log('New Apartment:', this.apartment);
    alert('Apartment added successfully!');

    setTimeout(() => {
      this.router.navigate(['/apartments']);
    }, 1000);
  }

  cancel() {
    this.router.navigate(['/apartments']); // Redirect to apartments page
  }
}
