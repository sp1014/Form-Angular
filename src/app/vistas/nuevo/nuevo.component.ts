import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ApiService} from '../../servicios/api/api.service';
import {NuevoI} from '../../modelos/nuevo.interface'
@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  nuevoForm = new FormGroup({
    Documento : new FormControl('',Validators.required),
    Nombres: new FormControl('',Validators.required),
    Apellidos: new FormControl('',Validators.required),
    Telefono: new FormControl('',Validators.required),
    Correo: new FormControl('',Validators.required),
    Direccion: new FormControl('',Validators.required)
    })

  constructor( private api:ApiService) { }

  ngOnInit(): void {
  }

  onNuevo(form:any){
    this.api.NuevoByPersonas(form).subscribe(data=>{
      console.log(data);
    });
       

  }

}
