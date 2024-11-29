import { Component } from '@angular/core';

interface MenuItemI {
  title: string;
  route: string;
}

@Component({
  selector: 'side-menu',
  standalone: false,
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',
})
export class SideMenuComponent {
  //
  public menuItems: MenuItemI[] = [
    { title: 'Contador', route: 'counter' },
    { title: 'Usuario', route: 'user-info' },
    { title: 'Mutaciones', route: 'properties' },
  ];
}
