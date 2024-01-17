import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ImageEditComponent } from './components/image-edit/image-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserRegisterComponent,
    UserProfileComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    EditUserComponent,
    ImageEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path:"user-register",
        component:UserRegisterComponent
      },
      {
        path:"home",
        component:HomeComponent
      },
      {
        path:"edit/:id",
        component:EditUserComponent
      },
      {
        path:"image-edit/:id",
        component:ImageEditComponent
      },
      {
        path:"profile",
        component:UserProfileComponent
      },
      {
        path:"",
        redirectTo:"/home",
        pathMatch:"full"
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
