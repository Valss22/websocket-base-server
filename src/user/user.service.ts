import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async userExists(name: string) {
    const user = await this.userRepository.findBy({ name: name })
    console.log(user)
    console.log(name)

  }

  //createUser;

}

