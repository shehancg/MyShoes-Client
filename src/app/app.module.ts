import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChatComponent } from './components/chat/chat.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { Home1Component } from './components/home1/home1.component';
import { Home2Component } from './components/home2/home2.component';
import { Home3Component } from './components/home3/home3.component';
import { Home4Component } from './components/home4/home4.component';
import { AdditemComponent } from './pages/admin/additem/additem.component';
import { AdminComponent } from './pages/admin/admin/admin.component';
import { AdminitemsComponent } from './pages/admin/adminitems/adminitems.component';
import { AdminordersComponent } from './pages/admin/adminorders/adminorders.component';
import { AdminusersComponent } from './pages/admin/adminusers/adminusers.component';
import { CartComponent } from './pages/users/cart/cart.component';
import { HomeComponent } from './pages/users/home/home.component';
import { LoginComponent } from './pages/users/login/login.component';
import { BranchesComponent } from './pages/users/branches/branches.component';
import { ShopComponent } from './pages/users/shop/shop.component';
import { ThanksComponent } from './pages/users/thanks/thanks.component';
import { ItemComponent } from './pages/users/item/item.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import { MessageComponent } from './pages/users/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChatComponent,
    FooterComponent,
    Home1Component,
    Home2Component,
    Home3Component,
    Home4Component,
    AdditemComponent,
    AdminComponent,
    AdminitemsComponent,
    AdminordersComponent,
    AdminusersComponent,
    CartComponent,
    HomeComponent,
    LoginComponent,
    BranchesComponent,
    ShopComponent,
    ThanksComponent,
    ItemComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut:5000,
      positionClass:'toast-top-center',
      newestOnTop:false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
