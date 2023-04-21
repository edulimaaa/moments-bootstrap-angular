import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module'; // rotas na aplicação
import { HttpClientModule } from '@angular/common/http'; // realizar requisições HTTP para uma API ou servidor web.
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // fornece suporte para recursos de formulários / suporte para recursos de formulários reativos.

import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NavbarComponent } from './components/pages/navbar/navbar.component';
import { ShareComponent } from './components/pages/share/share.component';
import { AboutComponent } from './components/pages/about/about.component';
import { FormComponent } from './components/functions/form/form.component';
import { FooterComponent } from './components/pages/footer/footer.component';
import { DetailsComponent } from './components/functions/details/details.component';
import { MessageComponent } from './components/functions/message/message.component';
import { EditComponent } from './components/functions/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ShareComponent,
    AboutComponent,
    FormComponent,
    FooterComponent,
    DetailsComponent,
    MessageComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
