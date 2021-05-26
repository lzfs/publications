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
  type: string = "";
  language: string = "";
  journal: string = "";
  issue: string = "";
  url_full: string = "";
  id: string = "";

  constructor() { }

  ngOnInit(): void {
    if(this.node != undefined) {
    this.title = this.node.attributes.title;

    if(this.node.attributes.inventor != null) {
    this.authors = this.node.attributes.inventor;
    }
    if(this.node.attributes.fullname_comma != null) {
      this.authors = this.node.attributes.fullname_comma;
    }
    if(this.node.attributes.authors != null) {
      this.authors = this.node.attributes.authors;
    }

    if(this.node.attributes.pages != null) {
      this.pages = this.node.attributes.pages;
    }

    if(this.node.attributes.publication_date != null) {
    this.publication_date = this.node.attributes.publication_date.substring(0, 4);
    }
    if(this.node.attributes.year != null) {
      this.publication_date = this.node.attributes.year.substring(0, 4);
    }

    if(this.node.attributes.typ != null) {
      this.type = this.node.attributes.typ;
    }
    if(this.node.attributes.type != null) {
      this.type = this.node.attributes.type;
    }

    if(this.node.attributes.language != null) {
      this.language = this.node.attributes.language;
    }

    if(this.node.attributes.journal != null) {
      this.journal = this.node.attributes.journal;
    }
    if(this.node.attributes.issue != null) {
      this.issue = this.node.attributes.issue;
    }

    if(this.node.attributes.url_full != null) {
      this.url_full = this.node.attributes.url_full;
    }
    if(this.node.id != null) {
      this.id = this.node.id;
    }
    }
  }

  goToPublication() {
    window.open(`https://athene-forschung.unibw.de/${this.id}`, "_blank");
  }

}
