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
    direccion : new FormGroup({
      calle: new FormControl(''),
      ciudad: new FormControl(''),
      estado: new FormControl(''),
      CP: new FormControl('')
    }),
    aliases: new FormArray([
      new FormControl('')
    ])
  })
  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }
  updateProfile() {
    this.profileForm.patchValue({
      nombre: 'Selena',
      direccion: {
        calle: '123 Drew Street'
      }
    });
  }
  addAlias() {
    this.aliases.push(new FormControl(''));
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  } 
}