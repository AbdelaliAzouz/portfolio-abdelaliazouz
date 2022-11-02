import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { FooterComponent } from './footer/footer.component';
import { GreetingComponent } from './greeting/greeting.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillProgressComponent } from './skill-progress/skill-progress.component';
import { SkillsComponent } from './skills/skills.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { TimelineComponent } from './timeline/timeline.component';
import { SoftwareSkillComponent } from './skills/software-skill/software-skill.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ContactComponent,
    EducationComponent,
    ExperienceComponent,
    FooterComponent,
    GreetingComponent,
    HeaderComponent,
    SkillProgressComponent,
    SkillsComponent,
    SocialMediaComponent,
    TimelineComponent,
    SoftwareSkillComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
