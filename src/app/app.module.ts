import {
  ChangeDetectionStrategy,
  Component,
  inject,
  NgModule,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { QuickComponent } from './contact/quick/quick.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { AdvancedComponent } from './contact/advanced/advanced.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AboutUsModalComponent } from './modals/about-us-modal/about-us-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FindUsComponent } from './contact/find-us/find-us.component';






@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    QuickComponent,
    AdvancedComponent,
    AboutUsModalComponent,
    FindUsComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTabsModule,
    MatButtonModule,
    MatDividerModule,
    MatDialogModule,
    ReactiveFormsModule, // Add this line
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
