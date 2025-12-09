import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { HeartIcon, LucideAngularModule, ShoppingCart } from "lucide-angular"

@Component({
  selector: 'app-header-actions',
  imports: [MatToolbar, LucideAngularModule, RouterLink],
  templateUrl: './header-actions.html',
  styleUrl: './header-actions.css',
})
export class HeaderActions {
  heartIcon = HeartIcon
  shoppingCart = ShoppingCart
}
