import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SobreGeopetComponent } from './componentes/sobre-geopet/sobre-geopet.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { LoginComponent } from './componentes/login/login.component';
import { PlanesComponent } from './componentes/planes/planes.component';
import { RecuperacionComponent } from './componentes/recuperacion/recuperacion.component';
import { RestablecerContrasenaComponent } from './componentes/restablecer-contrasena/restablecer-contrasena.component';
import { Header2Component } from './componentes/header2/header2.component';
import { MapaComponent } from './componentes/mapa/mapa.component';
import { PerfilMascotaComponent } from './componentes/perfil-mascota/perfil-mascota.component';
import { PerfilUsuarioComponent } from './componentes/perfil-usuario/perfil-usuario.component';
import { NuevaMascotaComponent } from './componentes/nueva-mascota/nueva-mascota.component';

export function httpTranslateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PrincipalComponent,
    SobreGeopetComponent,
    ContactoComponent,
    RegistroComponent,
    LoginComponent,
    PlanesComponent,
    RecuperacionComponent,
    RestablecerContrasenaComponent,
    Header2Component,
    MapaComponent,
    PerfilMascotaComponent,
    PerfilUsuarioComponent,
    NuevaMascotaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
