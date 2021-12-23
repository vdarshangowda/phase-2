import { Component, OnInit,ViewChild,ElementRef} from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  @ViewChild('username') nameKey!:ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  takeTest(){
    localStorage.setItem("username",this.nameKey.nativeElement.value);
  }
}
