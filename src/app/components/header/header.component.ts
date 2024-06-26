import { Component, Input, Output, EventEmitter, Renderer2, OnDestroy } from '@angular/core';
import { AppSettings } from '../../service/app-settings.service';
import { AppMenuService } from '../../service/app-menus.service';
import { AuthService } from '../auth/auth.service';

declare var slideToggle: any;

@Component({
  selector: 'header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnDestroy {

		
	menus: any[] = [];
	userName: string;
  	userLastName: string;

  @Input() appSidebarTwo;
	@Output() appSidebarEndToggled = new EventEmitter<boolean>();
	@Output() appSidebarMobileToggled = new EventEmitter<boolean>();
	@Output() appSidebarEndMobileToggled = new EventEmitter<boolean>();
	
  toggleAppSidebarMobile() {
		this.appSidebarMobileToggled.emit(true);
  }
  
	toggleAppSidebarEnd() {
		this.appSidebarEndToggled.emit(true);
	}
	
  toggleAppSidebarEndMobile() {
		this.appSidebarEndMobileToggled.emit(true);
  }

	toggleAppTopMenuMobile() {
		var target = document.querySelector('.app-top-menu');
		if (target) {
			slideToggle(target);
		}
	}

	toggleAppHeaderMegaMenuMobile() {
	  this.appSettings.appHeaderMegaMenuMobileToggled = !this.appSettings.appHeaderMegaMenuMobileToggled;
	}

	ngOnDestroy() {
	  this.appSettings.appHeaderMegaMenuMobileToggled = false;
	}


	ngOnInit() {
		this.menus = this.appMenuService.getAppMenus(); 
		this.userName = localStorage.getItem('userName');
		this.userLastName = localStorage.getItem('userLastName');
	
		//console.log('El nombre es: ' + this.userName);
		//console.log('El apellido es: ' + this.userLastName);
	  }


	  cerrarSesion() {
		this.authService.logout();
	  }
  constructor(private renderer: Renderer2, public appSettings: AppSettings,private appMenuService: AppMenuService, private authService: AuthService) {
  }
}
