import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ProfileEditorComponent {
  profileForm = new FormGroup ({
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl(''),
    edad: new FormControl('')
  })
  onSubmit() {
    console.warn(this.profileForm.value);
  } 
}