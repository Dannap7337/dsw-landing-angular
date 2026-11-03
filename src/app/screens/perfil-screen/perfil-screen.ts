import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil-screen',
  imports: [],
  templateUrl: './perfil-screen.html',
  styleUrl: './perfil-screen.scss',
})
export class PerfilScreen {
  perfil = {
    nombre: 'Ana Morales Pérez',
    email: 'ana.morales@correo.com',
    telefono: '222 123 4567',
    direccion: '16 de setiembre, 506, Centro,  Puebla, Pue', 
    nacimiento: '16/02/2007'
  };
}
