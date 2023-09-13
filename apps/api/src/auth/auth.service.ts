import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from 'src/employee/entity/employee.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(@InjectRepository(Employee) private repo: Repository<Employee>, private jwtService: JwtService) { }
  
  async signIn(email: string, pass: string): Promise<any> {
    const user = await this.repo.findOne({ where: { email: email } });
    if (!user) {
      throw new NotFoundException();
    }

    if (await bcrypt.compare(pass, user.password)) {
      throw new UnauthorizedException();
    }

    const payload = {sub: user.id, email: user.email}
    return {
      access_token: await this.jwtService.signAsync(payload)
    };
  }
}