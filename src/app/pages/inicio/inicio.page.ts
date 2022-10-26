import { Component, OnInit } from '@angular/core';
import { Icon } from 'ionicons/dist/types/components/icon/icon';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] =[
    {
      icon:'notifications-outline',
      name: 'Alertas',
      redirectTo: '/alert'
    },

    {
      icon:'newspaper-outline',
      name: 'Hoja de Acción',
      redirectTo: '/action-sheet'
    },

    {
      icon:'albums-outline',
      name: 'Cartas',
      redirectTo: '/cards'
    }
  ];

  constructor() { }

  ngOnInit() {
  }
}


interface Componente {
    icon: string;
    name:  string;
    redirectTo: string;
  }