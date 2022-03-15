import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-guide',
  templateUrl: './book-guide.component.html',
  styleUrls: ['./book-guide.component.css']
})
export class BookGuideComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  page=1;
  name="";
  phNo="";
  spot="";
  budget="";
  from="";
  to="";
  total="";
  p1="";
  p2="";
  p3="";
  p4="";
}
