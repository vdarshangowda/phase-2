import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-test-section',
  templateUrl: './test-section.component.html',
  styleUrls: ['./test-section.component.css']
})
export class TestSectionComponent implements OnInit {

  public username:string="";
  
  constructor() { }

  ngOnInit(): void {
    this.username=localStorage.getItem("username")!;
  }

}
