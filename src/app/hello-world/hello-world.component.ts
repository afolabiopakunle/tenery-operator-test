import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  message = 'I\'m read only!';
  canEdit = false;
 
  onEditClick() {
    this.canEdit = !this.canEdit;

    this.canEdit ? this.message = 'You can edit me' : this.message = 'I\m ready onlyd'
  }
}