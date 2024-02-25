import {Component, inject, TemplateRef, ViewEncapsulation} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTabsModule} from "@angular/material/tabs";

@Component({
  selector: 'app-menu',
  standalone: true,
    imports: [
        MatButtonModule,
        MatIconModule,
        MatTabsModule
    ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class MenuComponent {

}
