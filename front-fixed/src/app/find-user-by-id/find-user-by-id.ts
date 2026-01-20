import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserService } from '../userService';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-find-user-by-id',
  imports: [FormsModule],
  templateUrl: './find-user-by-id.html',
  styleUrl: './find-user-by-id.css',
})
export class FindUserById implements OnInit {
  constructor(
    public userService: UserService,
    public ActivatedRoute: ActivatedRoute,
    private readonly cdr: ChangeDetectorRef,
  ) {
    this.id = this.ActivatedRoute.snapshot.params['id'];
  }

  public usuario: any;
  public id!: number;
  public cedula!: string;
  public nombre!: string;
  public telefono!: string;
  public direccion!: string;
  public correo!: string;

  ngOnInit(): void {
    this.getUserById();
  }

  async getUserById() {
    try {
      this.usuario = await this.userService.getUserById(this.id);
      this.cedula = this.usuario[0].cedula;
      this.nombre = this.usuario[0].nombre;
      this.telefono = this.usuario[0].telefono;
      this.direccion = this.usuario[0].direccion;
      this.correo = this.usuario[0].email;
      this.cdr.detectChanges();
    } catch (error) {
      console.error('Error en getUserById:', error);
    }
  }

  async updateUser() {
    const data = {
      cedula: this.cedula,
      nombre: this.nombre,
      telefono: this.telefono,
      direccion: this.direccion,
      email: this.correo,
    };
    try {
      const response = await this.userService.updateUser(this.id, data);
      console.log('Usuario actualizado con éxito:', response);
    } catch (error) {
      console.error('Error al actualizar el usuario:', error);
    }
  }
}
