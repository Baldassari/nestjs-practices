import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cats.interface';
import { of, Observable } from 'rxjs';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  async findAll(): Promise<Cat[]> {
    return this.cats;
  }
}
