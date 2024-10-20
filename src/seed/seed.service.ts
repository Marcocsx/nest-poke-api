import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { PokeResponse } from './interfaces/poke-response.interface';
import { firstValueFrom, lastValueFrom } from 'rxjs';


@Injectable()
export class SeedService {

  constructor(
    private readonly http: HttpService,
  ) { }

  async populateDB() {

    const { data } = await firstValueFrom(this.http.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=10'));

    data.results.forEach(({ name, url }) => {
      const segmentes = url.split('/');
      const no:number = +segmentes[segmentes.length - 2];
      console.log({ name, no })
    });

    return data.results;
  }

}
