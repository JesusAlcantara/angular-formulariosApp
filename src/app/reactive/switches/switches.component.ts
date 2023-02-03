import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  constructor( private fb: FormBuilder ) { }

  ngOnInit() {
    this.miFormulario.reset({
      ...this.persona,
      condiciones: false
    });
    // Es muy inusual que haga falta el subscribe
    this.miFormulario.valueChanges.subscribe( ({ condiciones, ...restoArgumentos}) => {
      // delete form.condiciones;
      this.persona = restoArgumentos;
    })
  }

  miFormulario: FormGroup = this.fb.group({
    genero: [ 'M', Validators.required ],
    notificaciones: [ true, Validators.required ],
    condiciones: [ false, Validators.requiredTrue ]
  })

  persona = {
    genero: 'F',
    notificaciones: true
  }

  guardar () {
    const formValue = {...this.miFormulario.value};
    delete formValue.condiciones;
    this.persona = formValue;
  }

}
