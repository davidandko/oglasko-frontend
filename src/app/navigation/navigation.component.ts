import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgIf,NgSwitch,NgSwitchCase} from '@angular/common';
import { Input } from '@angular/core';
@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink,NgIf,NgSwitch,NgSwitchCase],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',

})

export class NavigationComponent {
@Input()
route!: string;

@Input()
cartCount?: number;

}


