import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/users/home/home.component";
import {Home1Component} from "./components/home1/home1.component";
import {Home2Component} from "./components/home2/home2.component";
import {Home3Component} from "./components/home3/home3.component";
import {Home4Component} from "./components/home4/home4.component";
import {ShopComponent} from "./pages/users/shop/shop.component";
import {LoginComponent} from "./pages/users/login/login.component";
import {CartComponent} from "./pages/users/cart/cart.component";
import {ThanksComponent} from "./pages/users/thanks/thanks.component";
import {AdminComponent} from "./pages/admin/admin/admin.component";
import {AdminusersComponent} from "./pages/admin/adminusers/adminusers.component";
import {AdminordersComponent} from "./pages/admin/adminorders/adminorders.component";
import {AdminitemsComponent} from "./pages/admin/adminitems/adminitems.component";
import {ChatComponent} from "./components/chat/chat.component";
import {AdditemComponent} from "./pages/admin/additem/additem.component";
import {ItemComponent} from "./pages/users/item/item.component";
import {BranchesComponent} from "./pages/users/branches/branches.component";
import { MessageComponent } from './pages/users/message/message.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home1',component:Home1Component},
  {path:'home2',component:Home2Component},
  {path:'home3',component:Home3Component},
  {path:'home4',component:Home4Component},
  {path:'shop',component:ShopComponent},
  {path:'branches',component:BranchesComponent},
  {path:'iteminside/:id',component:ItemComponent},
  {path:'login',component:LoginComponent},
  {path:'cart',component:CartComponent},
  {path:'thanks',component:ThanksComponent},
  {path:'admin',component:AdminComponent},
  {path:'adminusers',component:AdminusersComponent},
  {path:'adminorders',component:AdminordersComponent},
  {path:'adminitems',component:AdminitemsComponent},
  {path:'chat',component:ChatComponent},
  {path:'additem',component:AdditemComponent},
  {path:'message',component:MessageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
