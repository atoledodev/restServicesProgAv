import { Component, ChangeDetectorRef } from '@angular/core';
import { UserService } from '../userService';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-get-user',
  imports: [FormsModule],
  templateUrl: './get-user.html',
  styleUrl: './get-user.css',
})
export class GetUser {
  constructor(
    public userService: UserService,
    private readonly cdr: ChangeDetectorRef,
  ) {}

  public usuario: any = {};
  public cedula!: string;
  public nombre!: string;
  public telefono!: string;
  public direccion!: string;
  public correo!: string;

  async getUserByCI() {
    console.log('getUserByCI llamado, cedula:', this.cedula);
    try {
      this.usuario = await this.userService.getUserByCI(this.cedula);
      this.nombre = this.usuario[0].nombre;
      this.telefono = this.usuario[0].telefono;
      this.direccion = this.usuario[0].direccion;
      this.correo = this.usuario[0].email;
      this.cdr.detectChanges();
    } catch (error) {
      console.error('Error en getUserByCI:', error);
    }
  }
}
