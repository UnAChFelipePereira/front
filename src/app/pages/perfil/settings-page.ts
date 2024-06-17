import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AppSettings } from '../../service/app-settings.service';
import { AuthService } from '../../components/auth/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'settings-page',
  templateUrl: './settings-page.html'
})

export class SettingsPageV1 implements OnInit {
	//menus: any[] = [];
	@ViewChild('modalEdit') modalEdit: ElementRef;
	userData = { email: '', oldPassword: '', newPassword: '' };
	userName: string;
	userLastName: string;
	userEmail: string;
	showError = false;
	showSuccess = false;
	alertMessage = '';
	selectedFile: File | null = null;
	userProfile: any;
  
  constructor(public appSettings: AppSettings, private authService: AuthService,private router: Router) {
  }
  
  ngOnInit() {
		const sections = document.querySelectorAll('#bsSpyContent > div');
		const navLinks = document.querySelectorAll('#bsSpyTarget > a');
		const lastElHeight = sections[sections.length - 1].getBoundingClientRect().height;
		this.userName = localStorage.getItem('userName');
		this.userLastName = localStorage.getItem('userLastName');
		this.userEmail = localStorage.getItem('userEmail');
		//localStorage.setItem('userProfilePic', response.user.profilePic);
		this.userProfile = localStorage.getItem('userProfilePic');
		


		console.log(this.userEmail);

		function activateNavLink(id) {
			navLinks.forEach((link) => {
				if (link && link.classList) {
					link.classList.remove('active');
				}
			});
			var target = document.querySelector(`nav a[href*='${id}']`);
			if (target) {
				target.classList.add('active');
			}
		}

		function isElementInViewport(el) {
			const rect = el.getBoundingClientRect();
			return (
				rect.top >= 0 &&
				rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
			);
		}

		function handleViewport() {
			let activeSection = null;
			for (let i = sections.length - 1; i >= 0; i--) {
				if (isElementInViewport(sections[i])) {
					activeSection = sections[i].getAttribute('id');
					activateNavLink(activeSection);
					break;
				}
			}

			let combinedHeight = 0;
			let sectionIndex = Array.from(sections).findIndex((section) => section.getAttribute('id') === activeSection);
			for (let i = sectionIndex; i < sections.length; i++) {
				combinedHeight += (sections[i] as HTMLElement).offsetHeight;
			}
			if (combinedHeight <= window.innerHeight) {
				activateNavLink(activeSection);
			}
		}

		window.onscroll = handleViewport;
		
		
		var elmTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="scroll-to"]'));
		var elmList = elmTriggerList.map(function(elm) {
			elm.onclick = function(e) {
				e.preventDefault();
		
				var targetAttr = (elm.getAttribute('data-target')) ? this.getAttribute('data-target') : this.getAttribute('href');
				var targetElm = document.querySelectorAll(targetAttr)[0];
				var targetHeader = document.querySelectorAll('.app-header')[0];
				var targetHeight = (targetHeader as HTMLElement).offsetHeight;
				var targetContent = document.querySelector('.app-content');
				var targetContentStyle = window.getComputedStyle(targetContent);
				var targetContentPadding = (targetContentStyle) ? parseInt(targetContentStyle.getPropertyValue('padding-top')) : 0;
			
				if (targetElm) {
					var targetTop = targetElm.offsetTop - targetHeight - targetContentPadding;
					window.scrollTo({top: targetTop, behavior: 'smooth'});
				}
			}
		});
  }

  formSubmit(f: NgForm) {
	const formData = f.value;

	// Verificar si hay campos vacíos
	if (!formData.oldPassword || !formData.newPassword) {
		this.showErrorAlert('Por favor, complete los campos.');
		return;
	}

	if (f.valid) {
		if (formData.oldPassword == formData.newPassword) {
			this.showErrorAlert('Las contraseñas no pueden ser iguales');
			return;
		} else {
				this.authService.changePassword(formData.email, formData.oldPassword, formData.newPassword).subscribe(
					response => {

							this.showSuccessAlert('Tu clave fue cambiada con éxito');
					},
					error => {
						console.error('Error:', error);
						this.showErrorAlert('No se puede cambiar contraseña en este momento.');
					}
				);
			}
		}
	}

	onFileSelected(event: any) {
		this.selectedFile = event.target.files[0] as File;
	}
	
	submitPhoto(f: NgForm) {
		if (!this.selectedFile) {
			this.showErrorAlert('No se ha seleccionado ningún archivo.');
			return;
		}
	
		this.authService.uploadProfilePic(this.selectedFile).subscribe(
			response => {
				this.showSuccessAlert('Imagen de perfil subida correctamente');
			},
			error => {
				console.error('Error al subir la imagen de perfil:', error);
				this.showErrorAlert('Error al subir la imagen de perfil.');
			}
		);
	}

	

showErrorAlert(message: string) {
	this.alertMessage = message;
	this.showError = true;
	setTimeout(() => {
		this.hideAlerts();
	}, 20000);
}

showSuccessAlert(message: string) {
  this.alertMessage = message;
  this.showSuccess = true;
  setTimeout(() => {
	this.hideAlerts();
	this.router.navigate(['/settings-page']);
	window.location.reload();
  }, 4000); 
}

hideAlerts() {
	this.showError = false;
	this.showSuccess = false;
	this.alertMessage = '';
}


}

