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
  allNodes: Response = new Response();
  counter = 10;
  maxCount = 0;
  value = '';

  constructor(private ps: PublicationService) { }

  public getPublications() {
    this.ps.getCount(this.counter).subscribe(response => {
      this.response = response;
      this.response.nodelist = flatten(this.response.nodelist);
      this.publications = this.response.nodelist;
    });
  }

  ngOnInit(): void {
    this.getPublications();
    this.ps.getAll().subscribe(fullList => {
      this.allNodes = fullList;
      this.allNodes.nodelist = flatten(this.allNodes.nodelist);
      this.maxCount = parseInt(this.allNodes.nodelist_count);
      this.counter = Math.min(10, this.maxCount);
    });
  }

  getResults(): Node[] {
    return this.publications.slice(0, this.counter);
  }

  moreResults(): void {
    if (this.counter + 10 >= this.maxCount) {
      this.counter = parseInt(this.response.nodelist_count);
    } else {
      this.counter += 10;
    }
    this.getPublications();
  }

  search() {
    this.ps.getX(this.value).subscribe(searchResponse => {
      this.response = searchResponse;
      this.response.nodelist = flatten(this.response.nodelist);
      this.publications = this.response.nodelist;
      this.maxCount = parseInt(this.response.nodelist_count);
    });
  }
}
