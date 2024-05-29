import {Injectable, OnDestroy} from '@angular/core';
import {Observable, BehaviorSubject, of, Subscription, map} from 'rxjs';
import {Router} from '@angular/router';
import {UserInfoModel} from "../models/user.model";
import {callServiceHttp} from '../settings/utils';
import {HttpClient} from '@angular/common/http';
import {UrlAPI, USER_LOCAL_KEY} from '../settings/config';
import {deCryptAES, enCryptAES} from '../settings/dgkencrypt';
import {ResultInfo} from '../models/data.model';

export type UserType = UserInfoModel | undefined;

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy {
  // private fields
  private unsubscribe: Subscription[] = [];

  authAccessToken = "";

  currentUserSubject: BehaviorSubject<UserType>;

  get currentUserValue(): UserType {
    return this.currentUserSubject.value;
  }

  set currentUserValue(user: UserType) {
    this.currentUserSubject.next(user);
  }

  constructor(private router: Router, private httpClient: HttpClient) {
   
    this.currentUserSubject = new BehaviorSubject<UserType>(undefined);

  }

  // public methods
  login(username: string, password: string) {
    let loginSub = this.httpClient.post(UrlAPI + '/sapi/auth/login', {
      'username': username,
      'password': password,
      'grant_type': 'password'
    });
    callServiceHttp(loginSub, (p: ResultInfo) => {
      this.authAccessToken = p.reply["jwt_token"];
      this.currentUserSubject.next(p.reply);
      localStorage.setItem(USER_LOCAL_KEY, enCryptAES(JSON.stringify(p.reply)));
      this.router.navigate(["/"]);

    }, true);
  }

  private getAuthFromLocalStorage() {
    try {
      const lsValue = localStorage.getItem(USER_LOCAL_KEY);
      if (!lsValue) {
        return undefined;
      }

      const authData = deCryptAES(lsValue);
      return authData;
    } catch (error) {
      return undefined;
    }
  }

  getUserByToken(): Observable<any> {
    const authToken = this.getAuthFromLocalStorage();
    if (!authToken) {
      return of(undefined);
    }
    let info = JSON.parse(authToken);
    this.currentUserSubject.next(info);

    this.authAccessToken = info.jwt_token;

    return of(info);
  }


  logout() {
    localStorage.removeItem(USER_LOCAL_KEY);
    this.authAccessToken = "";
    this.currentUserSubject.next(undefined);
    this.router.navigate(["/auth/login"]);
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }

  uploadAvatar(image: any) {
    let formData = new FormData();

    if (image) {
      formData.append('images', image, image.name);
    }

    return this.httpClient.post(UrlAPI + '/user/avatar_upload', formData);
  }

  updateInfo(data: any) {

    return this.httpClient.post(UrlAPI + '/capi/user/updateinfo', data);
  }

  updatePassword(old_password: string, new_password: string) {
    return this.httpClient.post(UrlAPI + '/capi/user/changepass', {
      'old_password': old_password,
      'new_password': new_password
    })
  }
}
