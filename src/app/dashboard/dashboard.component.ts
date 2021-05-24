import { Component, OnInit } from '@angular/core';
import { PublicationService } from '../shared/publication.service';
import { Response } from '../shared/response';
import { Node } from '../shared/node';
import { flatten } from '@angular/compiler';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  publications: Node[] = [];
  response: Response = new Response();

  constructor(private ps: PublicationService) { }

  public getPublications() {
    this.ps.getAll().subscribe(response => {
      this.response = response;
      this.response.nodelist = flatten(this.response.nodelist);
      this.publications = this.response.nodelist;
    });
  }

  ngOnInit(): void {
    this.getPublications();
  }
  
}
