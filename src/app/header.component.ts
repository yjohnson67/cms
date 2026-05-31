import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DropdownDirective } from './dropdown.directive';

@Component({
  selector: 'cms-header',
  standalone: true,
  imports: [RouterLink, DropdownDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
