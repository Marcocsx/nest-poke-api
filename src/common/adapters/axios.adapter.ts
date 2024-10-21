import { HttpService } from "@nestjs/axios";
import { HttpAdapter } from "../interfaces/http-adapter.interface";
import { firstValueFrom } from 'rxjs';
import { Injectable } from "@nestjs/common";

@Injectable()
export class AxiosAdapter implements HttpAdapter {

    constructor(private http: HttpService) { }

    async get<T>(url: string): Promise<T> {

        try {
            const { data } = await firstValueFrom(this.http.get<T>(url));
            return data;
        } catch (e) {
            throw new Error('This is an error - Check logs');
        }

    }

}