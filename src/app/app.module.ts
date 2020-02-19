import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestriccionListComponent } from './component/restriccion-list/restriccion-list.component';

// Auth HTTP_INTERCEPTORS TokenInterceptor
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '././auth/token.interceptor';


// Service
import { RestriccionService } from './service/restriccion.service';

@NgModule({
  declarations: [
    AppComponent,
    RestriccionListComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RestriccionService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
