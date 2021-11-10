import { Injectable, OnInit } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';

@Injectable({
  providedIn: 'root'
})
export class SignalRService implements OnInit {

  private hubConnection?: HubConnection

  ngOnInit(): void {

    console.log("OnInit from SingalRService");
    

    this.startConnection();

    this.hubConnection?.on("onConnected", data => {
      console.log("Processing onConnected response from server: " + data);
    })
  }



  private startConnection() {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl('https://localhost:5001/hello')
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))
  }
}
