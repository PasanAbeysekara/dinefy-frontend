import { Routes } from '@angular/router';
import {HomeComponent} from "./feature/home/home/home.component";
import {ProductComponent} from "./feature/product/product/product.component";
import {CheckoutComponent} from "./feature/checkout/checkout/checkout.component";
import {UserprofileComponent} from "./feature/userprofile/userprofile/userprofile.component";
import {SearchComponent} from "./feature/search/search/search.component";

export const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'search',component:SearchComponent},
  {path:'product/:propCode',component:ProductComponent},
  {path:'product/rest-code-1/checkout',component:CheckoutComponent},
  {path:'userprofile',component:UserprofileComponent}

];
