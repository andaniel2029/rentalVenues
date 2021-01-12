import { Component, OnInit } from '@angular/core';
import { VenuesService } from 'src/app/services/venues.service';

@Component({
  selector: 'app-venues-list',
  templateUrl: './venues-list.component.html',
  styleUrls: ['./venues-list.component.css']
})
export class VenuesListComponent implements OnInit {

  Venues:any = [];

  constructor(private crudService: VenuesService) { }

  ngOnInit(): void {
    this.crudService.GetVenueses().subscribe(res => {
      console.log(res)
      this.Venues =res;
    });
  }

  delete(id:any, i:any) {
    console.log(id);
    if(window.confirm('Do you want to go ahead?')) {
      this.crudService.deleteVenues(id).subscribe((res) => {
        this.Venues.splice(i, 1);
      })
    }
  }

}
