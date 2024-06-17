import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, last } from 'rxjs';
import { CanActivate,  Router,  } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  access_token = '';

  private apiUrllogin = 'http://localhost:3000/users/login';
  private apiUrlregister = 'http://localhost:3000/users/register';
  private apiUrlperfil = 'http://localhost:3000/users/perfil';
  private apiUrlforgot = 'http://localhost:3000/users/forgot-password';
  private apiUrlreset = 'http://localhost:3000/users/reset-password';
  private apiUlrchange = 'http://localhost:3000/users/change-password';
  private apiUrlfoto = 'http://localhost:3000/users/upload-profile-pic';


  constructor(private http: HttpClient, private router: Router) {}


  register(name: string, lastname: string ,email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrlregister}`, { name, email, lastname, password });
  }


  login(email: string, password: string) {
    return this.http.post<any>(this.apiUrllogin, { email, password });
  }
  perfil(email: string, name: string, lastname: string): Observable<any> {
    return this.http.post<any>(this.apiUrlperfil, { email, name, lastname });
  }

  getUserProfile(): Observable<any> {
    return this.http.get<any>(this.apiUrlperfil);
  }

  forgotPassword(email:string): Observable<any> {
    return this.http.post<any>(`${this.apiUrlforgot}`, {email});
  }

  changePassword(email:string, oldPassword: string, newPassword: string): Observable<any> {
    return this.http.put<any>(`${this.apiUlrchange}`, {email,oldPassword, newPassword});
  }


  resetPassword(newPassword:string, resetToken: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrlreset}`, {newPassword,resetToken});
  }

  uploadProfilePic(file: File) {
    const formData = new FormData();
    formData.append('profilePic', file);

    return this.http.post<any>(`${this.apiUrlfoto}`, formData);
  }


  canActivate(): boolean {
    // Obtener el token de acceso del almacenamiento local
    const token = localStorage.getItem('access_token');

    // Verificar si el token existe y no es nulo ni vacío
    if (token && token.trim() !== '') {
      // Si el token existe, permite el acceso a la ruta protegida
      console.log("Usuario autenticado. Permitiendo acceso.");
      console.log(token);
      return true;
    } else {
      // Si no hay token, redirigir al usuario al componente de login y retornar falso
      console.log("No se ha detectado ningún token. Redirigiendo al login.");
      this.router.navigate(['/login']);
      return false;
    }
  }

 



}
