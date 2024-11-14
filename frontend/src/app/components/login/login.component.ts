import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import FormsModule

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  onLogin() {
    if (this.username === 'Ben' && this.password === 'Ben') {
      localStorage.setItem('token', 'yourJWTtoken');
      // Redirect to dashboard or handle login logic
    } else {
      this.errorMessage = 'Invalid login credentials. Please try again.';
    }
  }
}
