import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatProgressBarModule,
    MatTooltipModule,
    RouterLink,
    RouterLinkActive,
    MatMenuModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  sidebarItems = [
    {
      icon: 'home',
      name: 'Página principal',
      tooltip: 'Elementos principales',
      link: '/app-home',
      activated: false,
    },
    {
      icon: 'folder',
      name: 'Mi unidad',
      tooltip: 'Elementos de mi unidad',
      link: '/app-mydrive',
      activated: false,
    },
    {
      icon: 'devices',
      name: 'Computadoras',
      tooltip: 'Computadoras vinculadas',
      link: '/app-devices',
      activated: false,
    },
    {
      icon: 'group',
      name: 'Compartidos conmigo',
      tooltip: 'Elementos compartidos conmigo',
      link: '/app-sharedwithme',
      activated: false,
    },
    {
      icon: 'schedule',
      name: 'Recientes',
      tooltip: 'Elementos recientes',
      link: '/app-recents',
      activated: false,
    },
    {
      icon: 'star',
      name: 'Destacados',
      tooltip: 'Elementos destacados',
      link: '/app-starred',
      activated: false,
    },
    {
      icon: 'report',
      name: 'Spam',
      tooltip: 'Elementos spam',
      link: '/app-spam',
      activated: false,
    },
    {
      icon: 'delete',
      name: 'Papelera',
      tooltip: 'Elementos en la papelera',
      link: '/app-thrash',
      activated: false,
    },
    {
      icon: 'cloud',
      name: 'Almacenamiento',
      tooltip: 'Almacenamiento',
      link: '/app-storage',
      activated: false,
    },
  ];
}
