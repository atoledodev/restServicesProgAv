import { Component } from '@angular/core';
import { UserService } from '../userService';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  imports: [FormsModule],
  templateUrl: './create-user.html',
  styleUrl: './create-user.css',
})
export class CreateUser {
  public cedula!: string;
  public nombre!: string;
  public telefono!: string;
  public direccion!: string;
  public correo!: string;

  constructor(public userService: UserService) {}

  async saveUser() {
    try {
      let newUser = this.buildUser();
      await this.userService.createUser(newUser);
      console.log('El usuario ha sido registrado con éxito');
    } catch (error) {
      console.log();
    }
  }

  buildUser() {
    let newUser = {
      nombre: this.nombre,
      cedula: this.cedula,
      telefono: this.telefono,
      direccion: this.direccion,
      email: this.correo,
    };
    return newUser;
  }
}
