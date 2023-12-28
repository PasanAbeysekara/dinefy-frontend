import { Component } from '@angular/core';
import {MatTabsModule} from "@angular/material/tabs";
import {GeneralComponent} from "../components/general/general.component";
import {BookingHistoryComponent} from "../components/booking-history/booking-history.component";
import {FavaouritesComponent} from "../components/favaourites/favaourites.component";
import {SettingsComponent} from "../components/settings/settings.component";
import {MatInputModule} from "@angular/material/input";

@Component({
  selector: 'app-userprofile',
  standalone: true,
  imports: [
    MatTabsModule,
    GeneralComponent,
    BookingHistoryComponent,
    FavaouritesComponent,
    SettingsComponent,
    MatInputModule,
  ],
  templateUrl: './userprofile.component.html',
  styleUrl: './userprofile.component.css'
})
export class UserprofileComponent {
  rating = 0;
}
