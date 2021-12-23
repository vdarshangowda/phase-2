import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JavaComponent } from './java/java.component';
import { HtmlComponent } from './html/html.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { AngularComponent } from './angular/angular.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header/header.component';
import { TestSectionComponent } from './test-section/test-section.component';
import { HttpClientModule } from '@angular/common/http';
import { ChangeBgDirective } from './change-bg.directive';
import { EndComponent } from './end/end.component';

@NgModule({
  declarations: [
    AppComponent,
    JavaComponent,
    HtmlComponent,
    JavascriptComponent,
    AngularComponent,
    WelcomeComponent,
    HeaderComponent,
    TestSectionComponent,
    ChangeBgDirective,
    EndComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
