import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PostsComponent } from './posts/posts.component';
import { CategoriesComponent } from './categories/categories.component';
import { UsersComponent } from './users/users.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { EditComponent } from './edit/edit.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    PostsComponent,
    CategoriesComponent,
    UsersComponent,
    SettingsComponent,
    ProfileComponent,
    EditComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ModalModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
