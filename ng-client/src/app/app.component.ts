import { Component, OnInit } from '@angular/core';
import { SignalRService } from './services/signal-r.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-client';

  constructor(private signalRService: SignalRService) { }


  ngOnInit(): void {
    console.log("OnInit from AppComponent");

    this.signalRService.ngOnInit();
    
  }
}
