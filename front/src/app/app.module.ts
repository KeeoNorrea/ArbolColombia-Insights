import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BelloComponent } from './bello/bello.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SantafeComponent } from './santafe/santafe.component';
import { MallarinoComponent } from './mallarino/mallarino.component';
import { BelmiraComponent } from './belmira/belmira.component';
import { CaramantaComponent } from './caramanta/caramanta.component';
import { CaucasiaComponent } from './caucasia/caucasia.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    BelloComponent,
    FooterComponent,
    HomeComponent,
    SantafeComponent,
    MallarinoComponent,
    BelmiraComponent,
    CaramantaComponent,
    CaucasiaComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
