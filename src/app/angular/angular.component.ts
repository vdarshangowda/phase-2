import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {

  public username:string="";
  public angularList: any = [];
  public currentQuestion: number=0;
  public marks:number=0;
  counter=60;
  correctAnswer:number=0;
  incorrectAnswer:number=0;
  interval$:any;
  progress:string="0";
  isQuizCompleted:boolean=false;
  constructor(private quizService:QuizService) { }

  ngOnInit(): void {
    this.username=localStorage.getItem("username")!;
    this.getAllAngular();
    this.startCounter();
  }
  getAllAngular(){
  this.quizService.getAngularJson()
  .subscribe(res=>{
    this.angularList =res.questions;
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
    if(currentQno===this.angularList.length)
    {
        this.isQuizCompleted=true;
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
    this.getAllAngular();
    this.marks=0;
    this.counter=60;
    this.currentQuestion=0;
    this.progress="0";
  }
 getProgressPercent(){
   this.progress=((this.currentQuestion/this.angularList.length)*100).toString();
   return this.progress;
 }

}
