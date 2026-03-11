import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

interface ViaCepResponse {
  cep: string;
  logradouro: string;
  complemento: string;
  unidade: string;
  bairro: string;
  localidade: string;
  uf: string;
  estado: string;
  regiao: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

@Injectable({providedIn: 'root'})
export class ViaCepService {
    private http = inject(HttpClient);

    getAddressFromCep(cep: string) {
        return this.http.get<ViaCepResponse>(`https://viacep.com.br/ws/${cep}/json/`);
    }
}