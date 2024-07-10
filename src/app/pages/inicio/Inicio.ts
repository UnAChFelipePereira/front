import { Component } from '@angular/core';
import { AppMenuService } from '../../service/app-menus.service';

@Component({
  selector: 'Inicio',
  templateUrl: './Inicio.html'
})

export class InicioPage {
  menus: any[] = [];
  userName: string;
  userLastName: string;
  user_Id: string;

  ngOnInit() {
    this.menus = this.appMenuService.getAppMenus(); 
    this.userName = localStorage.getItem('userName');
    this.userLastName = localStorage.getItem('userLastName');
    this.user_Id = localStorage.getItem('user_Id');

    console.log('El nombre es: ' + this.userName);
    console.log('El apellido es: ' + this.userLastName);
    console.log('El _id es: ' + this.user_Id);
  }

  constructor(private appMenuService: AppMenuService) {

  }
}
