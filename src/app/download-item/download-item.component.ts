import { Component, Input, OnInit } from '@angular/core';
import { Download } from '../data/download';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { NumberInput } from '@angular/cdk/coercion';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';


@Component({
  selector: 'app-download-item',
  templateUrl: './download-item.component.html',
  styleUrls: ['./download-item.component.css']
})
export class DownloadItemComponent implements OnInit {

  ngOnInit(): void {
    if (this.download.sizeDownloaded === 0) {
      this.mode ='buffer';
      this.modeSpin = 'indeterminate';
    } else {
      this.mode ='determinate';
      this.modeSpin = 'determinate';
      this.value = 100*this.download.sizeDownloaded/this.download.size
    } 
  }

  modeSpin: ProgressSpinnerMode = 'indeterminate';
  mode: ProgressBarMode = 'buffer';
  value: NumberInput = 0;
  @Input()
  download: Download|any = null;
  
  
}
