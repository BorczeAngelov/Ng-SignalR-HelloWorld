import { Injectable, OnInit } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { BehaviorSubject, EMPTY, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignalRService implements OnInit {

  private hubConnection?: HubConnection
  public messages: string[]= [];

  ngOnInit(): void {
    console.log("OnInit from SingalRService");

    this.startConnection();

    this.hubConnection?.on("onConnected", data => {
      const message = "Processing onConnected response from server: " + data;

      this.messages.push(message);

      console.log(message);
      console.log(this.messages);      
    })
  }



  private startConnection() {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl('https://localhost:5001/hello')
      .build();

    this.hubConnection
      .start()
      .then(() => {
        const message = 'Connection started';
        console.log(message);
        this.messages.push(message);
      })
      .catch(err => console.log('Error while starting connection: ' + err))
  }
}
