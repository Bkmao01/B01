import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:3000/login';  // Backend login endpoint
  private jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(this.loginUrl, { username, password });
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !!token && !this.jwtHelper.isTokenExpired(token);
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
