import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderActions } from './layout/header-actions/header-actions';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderActions],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('modern_store');
}
