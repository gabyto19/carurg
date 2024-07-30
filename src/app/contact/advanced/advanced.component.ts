// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-advanced',
//   templateUrl: './advanced.component.html',
//   styleUrl: './advanced.component.css'
// })
// export class AdvancedComponent {

// }
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.css']
})
export class AdvancedComponent {
  carForm: FormGroup;
  successMessage: string;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.carForm = this.fb.group({
      brand: ['', Validators.required],
      model: ['', Validators.required],
      year: ['', [Validators.required, Validators.pattern('^[0-9]{4}$')]],
      details: ['', Validators.required],
      telephone: ['', [Validators.required, Validators.pattern('^[0-9-]+$')]]
    });
    this.successMessage = '';
  }

  onSubmit() {
    if (this.carForm.valid) {
      this.http.post('/api/send-car-details', this.carForm.value).subscribe(response => {
        console.log('Response:', response);
        this.successMessage = 'Your details have been sent';
      }, error => {
        console.error('Error sending details', error);
        this.successMessage = '';  // Clear the message if there was an error
      });
    }
  }
}
