import { Component, Input, OnInit } from '@angular/core';
import { Node } from '../shared/node';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {

  @Input() node: Node | undefined;

  title: string = "";
  authors: string = "";
  pages: string = "";
  publication_date: string = "";

  constructor() { }

  ngOnInit(): void {
    if(this.node != undefined) {
    this.title = this.node.attributes.title;
    this.authors = this.node.attributes.inventor;
    //this.pages = this.node.attributes.pages;
    //this.publication_date = this.node.attributes.publication_date;
    }
  }

}
