import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

 // mess: string[] = ["ss"];
  constructor(public messageService: MessageService) { }

  ngOnInit() {
//this.mess = this.messageService.messages;
  }

}
