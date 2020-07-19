import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobsListComponent } from './jobs/jobs-list/jobs-list.component';
import { JobItemComponent } from './jobs/job-item/job-item.component';
import { JobsComponent } from './jobs/jobs.component';
import { AddEditJobsModalComponent } from './jobs/add-edit-jobs-modal/add-edit-jobs-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field'
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { EditJobsModalComponent } from './jobs/edit-jobs-modal/edit-jobs-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    JobsListComponent,
    JobItemComponent,
    JobsComponent,
    AddEditJobsModalComponent,
    EditJobsModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule
  ],
  providers: [AddEditJobsModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
