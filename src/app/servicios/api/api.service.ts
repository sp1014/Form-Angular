import { Injectable } from '@angular/core';
import { NuevoI } from '../../modelos/nuevo.interface';
import { ResponseI} from '../../modelos/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 url:string = "http://190.60.101.59:6003/"

  constructor(private http: HttpClient) { }

  NuevoByPersonas(form:NuevoI):Observable<ResponseI> {
   let direccion = this.url + "api/Personas"

    return this.http.post<ResponseI>(direccion,form);
  }
}
