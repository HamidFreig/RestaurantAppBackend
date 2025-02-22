import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private user = [
    // DESPUES SERA LA DATA QUE VENDRA DE LA BBDD
    {
      id: 1,
      nombre: 'Hamid Freig',
      edad: 24,
    },
    {
      id: 2,
      nombre: 'Neyma Freig',
      edad: 25,
    },
  ];

  getAllUsers() {
    return this.user;
  }
}
