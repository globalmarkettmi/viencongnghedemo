import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InlineSVGModule} from 'ng-inline-svg-2';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layout.component';
import {Routing} from './routing';
import {AsideComponent} from './layout/components/aside/aside.component';
import {HeaderComponent} from './layout/components/header/header.component';
import {ContentComponent} from './layout/components/content/content.component';
import {FooterComponent} from './layout/components/footer/footer.component';
import {ScriptsInitComponent} from './layout/components/scripts-init/scripts-init.component';
import {AsideMenuComponent} from './layout/components/aside/aside-menu/aside-menu.component';
import {TopbarComponent} from './layout/components/topbar/topbar.component';
import { FormsModule } from '@angular/forms';
import { UserInnerComponent } from './layout/components/user-inner/user-inner.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: Routing,
  },
];

@NgModule({
  declarations: [
    LayoutComponent,
    AsideComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    ScriptsInitComponent,
    AsideMenuComponent,
    TopbarComponent,
    UserInnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    InlineSVGModule,
    FormsModule
  ],
  exports: [RouterModule],
})
export class LayoutModule {
}
