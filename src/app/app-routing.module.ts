import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { SobreGeopetComponent } from './componentes/sobre-geopet/sobre-geopet.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { LoginComponent } from './componentes/login/login.component';
import { PlanesComponent } from './componentes/planes/planes.component';
import { RecuperacionComponent } from './componentes/recuperacion/recuperacion.component';
import { RestablecerContrasenaComponent } from './componentes/restablecer-contrasena/restablecer-contrasena.component';

const routes: Routes = [
  {path: 'inicio', component: PrincipalComponent},
  {path:'sobre-geopet', component: SobreGeopetComponent},
  {path:'contacto', component: ContactoComponent},
  {path:'registro', component: RegistroComponent},
  {path:'login', component: LoginComponent},
  {path:'planes', component: PlanesComponent},
  {path:'recuperacion', component: RecuperacionComponent},
  {path:'restablecer-contrasena', component: RestablecerContrasenaComponent},
  {path:'', redirectTo: 'inicio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
