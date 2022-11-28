import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class LoginService {

  BaseUrl: string;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {
    this.BaseUrl = environment.baseURL + 'users';
  }

  login(data: any) {
    return this.http.post(this.BaseUrl + "/login", {
      "email": data.email,
      "password": data.password
    });
  }

}
