import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';  // Ensure AuthService is correctly imported

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'B01';  // Add title property
  constructor(private authService: AuthService, private router: Router) {}

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
