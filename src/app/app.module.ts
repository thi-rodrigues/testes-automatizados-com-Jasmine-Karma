import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LikeWidgetComponent } from './shared/components/like-widget/like-widget.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UniqueIdsService } from './shared/services/unique-id/unique-id.service';

@NgModule({
  declarations: [
    AppComponent,
    LikeWidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [UniqueIdsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
