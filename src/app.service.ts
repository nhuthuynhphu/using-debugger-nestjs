import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const message = 'Hello World!';
    console.log(message);
    return message;
  }
}
