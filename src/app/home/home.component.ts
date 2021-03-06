import { Component, OnInit } from '@angular/core';

import {MessageService} from '../message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private messageService: MessageService) { }

  sendMessage():void{
     this.messageService.sendMessage('Message from home component to app component');
   }

   clearMessages():void{
    this.messageService.clearMessages();
   }
  

}
