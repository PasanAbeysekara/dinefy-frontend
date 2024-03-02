import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8081/data';

  constructor(private http: HttpClient) {}

  async login(username: string, password: string): Promise<string | null> {
    const credentialsDto = { username, password };
    try {
      const result = await this.http
        .post<any>(`${this.apiUrl}/login`, credentialsDto)
        .toPromise();
      return result.token;
    } catch (error) {
      console.error('Error During Login:', error);
      return null;
    }
  }
}
