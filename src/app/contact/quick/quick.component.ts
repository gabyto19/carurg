import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quick',
  templateUrl: './quick.component.html',
  styleUrls: ['./quick.component.css']
})
export class QuickComponent {
  phoneNumberForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.phoneNumberForm = this.fb.group({
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    });
  }

  onSubmit() {
    if (this.phoneNumberForm.valid) {
      this.http.post('/api/send-email', this.phoneNumberForm.value).subscribe(response => {
        console.log('Response:', response);
      }, error => {
        console.error('Error sending email', error);
      });
    }
  }
}
