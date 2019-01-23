import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";

import { AboutmeComponent } from "./aboutme/aboutme.component";
import { FencingComponent } from "./fencing/fencing.component";
import { ExperienceComponent } from "./experience/experience.component";
import { EducationComponent } from "./education/education.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutmeComponent,
    FencingComponent,
    ExperienceComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
