import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  constructor( private fb: FormBuilder ) { }

  miFormulario: FormGroup = this.fb.group({
    nombrePersona: [ null, [Validators.required, Validators.minLength(3)] ],
    favoritos: this.fb.array( [
      ['Dragon Ball Kakarot', Validators.required],
      ['Warframe', Validators.required]
    ], Validators.required )
  })

  get favoritosArr () {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  nuevoFavorito: FormControl = this.fb.control('', Validators.required);

  guardar () {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }

  campoNoValido ( campo: string ) {
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched
  }

  agregarFavorito () {
    if (this.nuevoFavorito.invalid) {
      return;
    }
    this.favoritosArr.push(this.fb.control(this.nuevoFavorito.value, Validators.required));
    this.nuevoFavorito.reset();
  }

  eliminarFavorito (i: number) {
    this.favoritosArr.removeAt(i);
  }

}
