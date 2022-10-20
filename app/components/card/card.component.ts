import { Component, Input, OnInit } from '@angular/core';
import * as internal from 'stream';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }
  @Input() taskName  =  {name:'',history:[]};
  buttonString : string ='Start';
  time = {hour : 0,minutes: 0,seconds: 0} ;
  timer :any ; 
   ngOnInit(): void {
  }
  startPause(){
    if(this.buttonString == 'Start'){
      this.buttonString = 'Stop'
      this.timer = setInterval(()=>{
          if(this.time.seconds<60){
            this.time.seconds= this.time.seconds + 1 ;
            
          }else if(this.time.minutes<60){
            this.time.minutes=this.time.minutes+1
            this.time.seconds = 0
          }else{
            this.time.hour = this.time.hour+1 ;
            this.time.minutes = 0 ;
            this.time.seconds = 0 ; 
          }
      },100)
    }else{
      this.buttonString = 'Start';
      clearInterval(this.timer)
    }
    
  }
}
