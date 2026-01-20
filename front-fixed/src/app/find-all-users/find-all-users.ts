import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UserService } from '../userService';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-find-all-users',
  imports: [CommonModule],
  templateUrl: './find-all-users.html',
  styleUrl: './find-all-users.css',
})
export class FindAllUsers implements OnInit {
  constructor(
    public userService: UserService,
    public router: Router,
    private readonly cdr: ChangeDetectorRef,
  ) {}

  public usuarios: any[] = [];

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService
      .getAllUsers()
      .then((data) => {
        console.log('Datos recibidos:', data);
        this.usuarios = data as any[];
        this.cdr.detectChanges();
      })
      .catch((err) => {
        console.error('Error al cargar usuarios:', err);
      });
  }

  redirectToUserById(id: number) {
    this.router.navigate(['getUserById', { id: id }]);
  }
}
