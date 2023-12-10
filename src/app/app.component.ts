import { Component } from '@angular/core';
import { JsonServiceService } from './json-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'influencetest';
  jsonData:any;

  constructor(private jsonService:JsonServiceService){}

  ngOnInit(){
    this.jsonService.getJsonData().subscribe(data => {
      this.jsonData = data;
      console.log(this.jsonData);
      
    })
  }

}
