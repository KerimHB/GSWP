import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formReactivo: FormGroup;
  createFormulario() {
    return  new FormGroup({
    name: new FormControl('nombre'),
    edad: new FormControl('edad')
    });
  }
  constructor() { 


  }

  ngOnInit() {
    this.formReactivo = this.createFormulario();
  }

}
