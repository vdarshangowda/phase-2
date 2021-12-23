import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './angular/angular.component';
import { EndComponent } from './end/end.component';
import { HeaderComponent } from './header/header.component';
import { HtmlComponent } from './html/html.component';
import { JavaComponent } from './java/java.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { TestSectionComponent } from './test-section/test-section.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'', redirectTo:'welcome', pathMatch:"full"},
  {path:"header",component:HeaderComponent},
  {path:"welcome",component:WelcomeComponent},
  {path:"test-section",component:TestSectionComponent},
  {path:"angular",component:AngularComponent},
  {path:"html",component:HtmlComponent},
  {path:"java",component:JavaComponent},
  {path:"javascript",component:JavascriptComponent},
  {path:"end",component:EndComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
