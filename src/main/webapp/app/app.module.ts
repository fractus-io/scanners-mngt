import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { ScannersMngtSharedModule } from 'app/shared/shared.module';
import { ScannersMngtCoreModule } from 'app/core/core.module';
import { ScannersMngtAppRoutingModule } from './app-routing.module';
import { ScannersMngtHomeModule } from './home/home.module';
import { ScannersMngtEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    ScannersMngtSharedModule,
    ScannersMngtCoreModule,
    ScannersMngtHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    ScannersMngtEntityModule,
    ScannersMngtAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class ScannersMngtAppModule {}
