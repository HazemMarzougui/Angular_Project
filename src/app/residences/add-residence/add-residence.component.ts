import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent {

  residence = {
    name: '',
    address: '',
    image: '',
    status: 'Disponible'
  };

  constructor(private router: Router) {}

  submitResidence() {
    console.log('New Residence:', this.residence);
    alert('Residence added successfully!');
    
    setTimeout(() => {
      this.router.navigate(['/residences']);
    }, 1000);
  }

  cancel() {
    this.router.navigate(['/residences']); // Redirect to residences page
  }
}
