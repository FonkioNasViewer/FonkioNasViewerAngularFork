import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { DownloadItemComponent } from './download-item/download-item.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { DownloadStationService } from './services/DownloadStation.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ByteFormatPipe } from './pipes/byte-format.pipe';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DownloadsComponent,
    DownloadItemComponent,
    ByteFormatPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatProgressBarModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatBadgeModule 
  ],
  providers: [
    DownloadStationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
