import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, NavbarComponent],
  template: ` <app-navbar /> `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'pt-pedia';
}
