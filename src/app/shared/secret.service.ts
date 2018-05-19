import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CreateSecret} from './create-secret';
import {environment} from '../../environments/environment';
import {CreatedSecretResponse} from './created-secret-response';
import {map} from 'rxjs/internal/operators';
import {Observable} from 'rxjs';
import {ShowSecret} from './show-secret';

@Injectable({
  providedIn: 'root'
})
export class SecretService {

  private apiUrl = environment.apiUrl;
  private baseDomain = environment.baseDomain;

  constructor(private http: HttpClient) {
  }

  createSecret(secret: CreateSecret): Observable<string> {
    return this.http.post<CreatedSecretResponse>(`${this.apiUrl}/secret`, secret)
      .pipe(map(response => `${this.baseDomain}/secret/${response.uuid}`));
  }

  loadSecret(uuid: string): Observable<string> {
    return this.http.get<ShowSecret>(`${this.apiUrl}/secret/${uuid}`)
      .pipe(map(response => response.secret));
  }
}
