import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  //Agregar para recibir el mensaje del alert
@Input() titulo:string;


  constructor() { }

  ngOnInit() {}

}
