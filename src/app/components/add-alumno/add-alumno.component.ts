import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno.model';
import { AlumnoService } from 'src/app/services/alumno.service';


@Component({
  selector: 'app-add-alumno',
  templateUrl: './add-alumno.component.html',
  styleUrls: ['./add-alumno.component.css']
})
export class AddAlumnoComponent implements OnInit {

  constructor(private alumnoService: AlumnoService) { }

  alumno : Alumno={
    idAlumno: 0,
    nombre: '',
    dni: '',
    correo: '',
    fechaNacimiento: new Date(),
    direccion: ''
  }

  ngOnInit(): void {
  }

  saveAlumno():void{

    console.log(this.alumno);

    this.alumnoService.create(this.alumno).subscribe(
      response=>{
        console.log(response.mensaje);
        console.log(response);
      },error=>{
        console.log(console.error);
        
      }
    )
  }
  

}
