import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-write-novel',
  templateUrl: './write-novel.component.html',
  styleUrls: ['./write-novel.component.css']
})
export class WriteNovelComponent implements OnInit {
  title: string = "Ecris ton roman !";
  types: string[] = ["horreur", "fantaisie", "aventure", "amour", "comédie"];
  selectedType: string;
  novel: string;
  constructor() { }

  ngOnInit() {
    this.selectedType = this.types[0];
  }

}
