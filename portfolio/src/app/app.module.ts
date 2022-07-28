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
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
