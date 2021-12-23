import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { JavascriptService } from '../javascript.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent implements OnInit {

  public username:string="";
  public javascriptList: any = [];
  public currentQuestion: number=0;
  public marks:number=0;
  counter=60;
  correctAnswer:number=0;
  incorrectAnswer:number=0;
  interval$:any;
  progress:string="0";
  isJavascriptCompleted:boolean=false;
  constructor(private javascriptService:JavascriptService) { }

  ngOnInit(): void {
    this.username=localStorage.getItem("username")!;
    this.getAllJavascript();
    this.startCounter();
  }
  getAllJavascript(){
  this.javascriptService.getJavascriptJson()
  .subscribe(res=>{
    this.javascriptList =res.questions;
  })
  }
  nextQuestion()
  {
     this.currentQuestion++;
  }
  previousQuestion()
  {
     this.currentQuestion--;
  }
  answer(currentQno:number,option:any)
  {
    if(currentQno===this.javascriptList.length)
    {
        this.isJavascriptCompleted=true;
        this.stopCounter();
    }
    if(option.correct)
     {
       this.marks+=1;
       setTimeout(()=>{
        this.correctAnswer++;
        this.currentQuestion++;
        this.resetCounter();
        this.getProgressPercent(); 
       },1000);
     
     }
     else{
        setTimeout(() => {
        this.currentQuestion++;
        this.incorrectAnswer++;
        this.resetCounter();
        this.getProgressPercent();
      }, 1000);
      this.marks-=0;
     }
  }
  startCounter()
  {
    this.interval$=interval(1000)
    .subscribe(val=>{
      this.counter--;
      if(this.counter===0)
      {
        this.currentQuestion++;
        this.counter<=60;
        this.marks-=0;
      }
    });
    setTimeout(()=>{
      this.interval$.unsubscribe();
    },600000);
  }
  stopCounter()
  {
    this.interval$.unsubscribe();
    this.counter=0;
  }
  resetCounter()
  {
   this.stopCounter();
   this.counter=60;
   this.startCounter();
  }
  resetQuiz(){
    this.resetCounter();
    this.getAllJavascript();
    this.marks=0;
    this.counter=60;
    this.currentQuestion=0;
    this.progress="0";
  }
 getProgressPercent(){
   this.progress=((this.currentQuestion/this.javascriptList.length)*100).toString();
   return this.progress;
 }

}

