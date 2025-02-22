import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller({})
export class UserController {
  usersService: UsersService;

  constructor(userService: UsersService) {
    this.usersService = userService;
  }

  @Get('/allUsers')
  getAllUsers() {
    return this.usersService.getAllUsers();
  }
}
