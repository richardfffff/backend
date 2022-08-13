import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AcercaDMiComponent } from './components/acerca-dmi/acerca-dmi.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { BannerComponent } from './components/banner/banner.component';
import { SocialRedesComponent } from './components/social-redes/social-redes.component';
import { ArgprogComponent } from './components/argprog/argprog.component';
import { FotoPerfilComponent } from './components/foto-perfil/foto-perfil.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HSComponent } from './components/h-s/h-s.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDMiComponent,
    ExperienciaComponent,
    EducacionComponent,
    BannerComponent,
    SocialRedesComponent,
    ArgprogComponent,
    FotoPerfilComponent,
    HSComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
