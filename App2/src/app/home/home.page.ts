import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  //nombre = new FormControl('');

  usuario = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', Validators.email],
    age: ['', Validators.min(18)],
    aceptaTerminos: [false, [Validators.requiredTrue]],
  });
  enviarFormulario() {
    this.usuario.controls.nombre.setValue('Ornitorrinco');
  }

  guardarDatos() {
    console.log(this.usuario.value);
  }

  alertaGuardar() {
    alert("Datos guardados correctamente");
  }


  /*
    usuario = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', Validators.email),
      age: new FormControl('', Validators.min(18)),
      
    });*/

  constructor(private fb: FormBuilder) { }

}
