import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';  // Import LoginComponent
import { DashboardComponent } from './components/dashboard/dashboard.component';  // Import DashboardComponent
import { routes } from './app.routes';

@NgModule({
  declarations: [AppComponent, LoginComponent, DashboardComponent],  // Declare components
  imports: [BrowserModule, RouterModule.forRoot(routes), FormsModule, HttpClientModule],  // Import FormsModule and HttpClientModule
  bootstrap: [AppComponent]
})
export class AppModule {}
