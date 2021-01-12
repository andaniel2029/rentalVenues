import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { VenuesService } from 'src/app/services/venues.service';

@Component({
  selector: 'app-add-venues',
  templateUrl: './add-venues.component.html',
  styleUrls: ['./add-venues.component.css']
})
export class AddVenuesComponent implements OnInit {

  venuesForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: VenuesService
  ) {
    this.venuesForm = this.formBuilder.group({
      name: [''],
      price: [''],
      description: ['']
    })
  }

  ngOnInit() { }

  onSubmit(): any {
    this.crudService.AddVenues(this.venuesForm.value)
    .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/venues-list'))
      }, (err) => {
        console.log(err);
    });
  }

}
