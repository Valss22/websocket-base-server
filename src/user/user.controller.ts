import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

interface Interface {
  name: string,
  password: string
}


@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/')
  async createUser(@Body() body: Interface) {
    //console.log(body.name)

    return await this.userService.checkUser(body.name);
  }
}