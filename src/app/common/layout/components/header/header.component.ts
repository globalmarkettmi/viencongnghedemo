import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild,} from '@angular/core';
import {NavigationCancel, NavigationEnd, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {LayoutService} from '../../core/layout.service';
import {MenuComponent} from '../../../kt/components';
import {AuthService} from "../../../../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  headerContainerCssClasses: string = '';
  asideDisplay: boolean = true;


  @ViewChild('ktPageTitle', {static: true}) ktPageTitle: ElementRef;

  private unsubscribe: Subscription[] = [];

  userInfo: any;

  constructor(private layout: LayoutService, private router: Router, private authService: AuthService) {
    this.routingChanges();
    this.userInfo = this.authService.currentUserSubject.value;
  }

  ngOnInit(): void {
    this.headerContainerCssClasses = this.layout.getStringCSSClasses('headerContainer');
    this.asideDisplay = this.layout.getProp('aside.display') as boolean;

  }

  ngAfterViewInit() {

  }

  routingChanges() {
    const routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd || event instanceof NavigationCancel) {
        MenuComponent.reinitialization();
      }
    });
    this.unsubscribe.push(routerSubscription);
  }

  ngOnDestroy() {
  }
}
