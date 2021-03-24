import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { EmployeesComponent } from './employees/employees.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { CpbComponent } from './concepts/cpb/cpb.component';
import { CebComponent } from './concepts/ceb/ceb.component';

// Main Switching Box
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    ConceptsComponent,
    EmployeesComponent,
    AboutComponent,
    CpbComponent,
    CebComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // needed for ngModel
  ],
  providers: [],
  bootstrap: [AppComponent] // AppModule is bootstrapped with a Comp -- AppComp
})
export class AppModule { }
