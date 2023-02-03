import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  constructor( private fb: FormBuilder ) { }

  // ngOnInit(): void {
  //   this.miFormulario.reset({
  //     nombreProducto: 'Mando PS5',
  //     precioProducto: '60',
  //     existenciasProducto: '3'
  //   })
  // }

  miFormulario: FormGroup = this.fb.group({
    nombreProducto: [ null, [Validators.required, Validators.minLength(3)] ],
    precioProducto: [ null, [Validators.required, Validators.min(0)] ],
    existenciasProducto: [ null, [Validators.required, Validators.min(0)] ]
  })

  campoNoValido ( campo: string ) {
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }

  guardar () {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }

  // miFormulario: FormGroup = new FormGroup({
  //   nombreProducto: new FormControl('RTX 4080ti'),
  //   precioProducto: new FormControl(1500),
  //   existenciasProducto: new FormControl(5)
  // });

}
