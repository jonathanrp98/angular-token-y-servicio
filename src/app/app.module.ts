import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestriccionListComponent } from './component/restriccion-list/restriccion-list.component';

// Auth HTTP_INTERCEPTORS TokenInterceptor
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '././auth/token.interceptor';
import { PingComponent } from './ping/ping.component';

// Service
import { RestriccionService } from './service/restriccion.service';

@NgModule({
  declarations: [
    AppComponent,
    RestriccionListComponent,
    PingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    RestriccionService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
