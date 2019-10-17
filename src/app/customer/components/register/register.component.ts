import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { CustomerService } from '@customer/services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public $form: FormGroup;
  public $nombre: FormControl;
  public $apellidos: FormControl;
  public $edad: FormControl;
  public $fechaNacimiento: FormControl;



  constructor(
    private _router: Router,
    private fb: FormBuilder,
    private _customerService: CustomerService) {
  }

  ngOnInit() {

    this.$nombre = this.fb.control( '', [ Validators.required ] );
    this.$apellidos = this.fb.control( '', [ Validators.required ] );
    this.$edad = this.fb.control( '', [ Validators.required, Validators.pattern(/\d/) ] );
    this.$fechaNacimiento = this.fb.control( '', [ Validators.required ] );

    this.$form = new FormGroup({
      nombre: this.$nombre,
      apellidos: this.$apellidos,
      edad: this.$edad,
      fechaNacimiento: this.$fechaNacimiento
    });

  }

  onSubmit() {
    console.log(this.$form.valid);
    if (this.$form.valid) {
      this.saveCustomer();
    }
  }

  saveCustomer() {
      const request: ICustomer = {
        nombre: this.$nombre.value,
        apellidos: this.$apellidos.value,
        edad: this.$edad.value,
        fechaNacimiento: this.$fechaNacimiento.value
      };

      console.log('request ', JSON.stringify(request));

      this._customerService.saveCustomer(request).subscribe((res) => {
        this._router.navigate([ '/list' ]);
      }, (error) => {
        console.log('error');
      });
  }

}
