import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { AuthService, UserType } from '../../../../services/auth.service';
import { Observable, Subscription } from 'rxjs';
import { showAcceptAlert } from '../../../../settings/alert.util';

@Component({
  selector: 'app-user-inner',
  templateUrl: './user-inner.component.html',
})
export class UserInnerComponent implements OnInit, OnDestroy {
  @HostBinding('class')
  class = `menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px`;

  @HostBinding('attr.data-kt-menu') dataKtMenu = 'true';

  user: Observable<UserType>;
  private unsubscribe: Subscription[] = [];

  constructor(private auth: AuthService) {
    this.user = this.auth.currentUserSubject.asObservable();
  }

  ngOnInit(): void {
  }

  logout() {
    showAcceptAlert("Đăng xuất", 'Bạn muốn đăng xuất tài khoản hiện tại ?', () => {
      this.auth.logout();
      document.location.reload();
    });
  }


  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}

