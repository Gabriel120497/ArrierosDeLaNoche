import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { SHA256 as sha256 } from 'crypto-js';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  registerCredentials = { nombre: '', clave: '', tipoDoc: '', documento: '', rh: '', celular: '', nombreContacto: '', celularContacto: '', distancia: ''};
  errorAuth = false;
  validations_form: FormGroup;
  validation_messages: Object;

  constructor(public formBuilder: FormBuilder,
    public modalController: ModalController) { }

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      tipoDoc: new FormControl('', Validators.required),
      rh: new FormControl('', Validators.required),
      clave: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ])),
      documento: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[0-9]*$')
      ])),
      nombre: new FormControl('', Validators.compose([
        Validators.pattern('^[ña-zA-Z]+([ña-zA-ZÀ-ÿ ]*)+([ña-zA-Z]+[\s]*)$'),
        Validators.required
      ])),
      celular: new FormControl('', Validators.compose([
        Validators.maxLength(10),
        Validators.minLength(10),
        Validators.required
      ])),
      nombreContacto: new FormControl('', Validators.compose([
        Validators.pattern('^[ña-zA-Z]+([ña-zA-ZÀ-ÿ ]*)+([ña-zA-Z]+[\s]*)$'),
        Validators.required
      ])),
      celularContacto: new FormControl('', Validators.compose([
        
        Validators.maxLength(10),
        Validators.required
      ]))
    });

    this.validation_messages = {
      'documentType': [
        { type: 'required', message: 'Tipo de documento es requerido' }
      ],
      'clave': [
        { type: 'required', message: 'La clave es requerida' }
      ],
      'rh': [
        { type: 'required', message: 'El tipo de sangre es requerida' }
      ],
      'documentNumber': [
        { type: 'required', message: 'Número de documento es requerido' },
        { type: 'pattern', message: 'El documento solo debe contener números' }
      ],
      'names': [
        { type: 'required', message: 'Nombre(s) es requerido' },
        { type: 'pattern', message: 'El nombre solo puede tener caracteres de la "a" a la "z" y espacios y no terminar con letras acentuadas' }
      ],
      'phone': [
        { type: 'required', message: 'Celular es requerido' },
        { type: 'validCountryPhone', message: 'El celular solo debe contener 10 números' }
      ]
    };
  }

  isValid(name, validation) {
    return this.validations_form.get(name).hasError(validation.type) && (this.validations_form.get(name).dirty || this.validations_form.get(name).touched);
  }

  registry(values) {
    const passHash = sha256(values.clave).toString();
    values.clave = passHash;
    console.log(this.registerCredentials);
    
    
    
  }

}
