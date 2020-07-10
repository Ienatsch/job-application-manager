import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobsListComponent } from './jobs/jobs-list/jobs-list.component';
import { JobItemComponent } from './jobs/job-item/job-item.component';
import { JobsComponent } from './jobs/jobs/jobs.component';

@NgModule({
  declarations: [
    AppComponent,
    JobsListComponent,
    JobItemComponent,
    JobsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
