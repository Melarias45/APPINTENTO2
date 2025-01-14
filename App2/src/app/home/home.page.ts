import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  nombre = new FormControl('');

  enviarFormulario() {
    this.usuario.controls.nombre.setValue('Ornitorrinco');
  }

  guardarDatos() {
    console.log(this.usuario.value);
  }

  usuario = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', Validators.email),
  });

  constructor() { }

}
