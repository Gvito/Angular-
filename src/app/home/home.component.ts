import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../swapi.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  planet;

  constructor(private swapiService: SwapiService) { }

  ngOnInit() {
    this.swapiService.getPlanet().subscribe(
      planet => (this.planet = planet)
    );
    console.log(this.planet);
  }

}
