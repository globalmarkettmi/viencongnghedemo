import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from "@angular/core";
import { catchError, filter, finalize, switchMap, take } from 'rxjs/operators';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { AuthService } from './services/auth.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let observable = next.handle(this.addAuthToken(request)).pipe(
      catchError(
        (err, caught) => {
          if (err && err.status == 403) {
            this.authService.logout();
            return throwError(() => new Error(err.message));
          } else {
            return throwError(() => new Error(err.message));
          }
        })
    );
    return observable;
  }


  addAuthToken(request: HttpRequest<any>) {
    return request.clone({
      setHeaders: {
        'x-access-token': this.authService.authAccessToken,
      }
    })
  }
}
