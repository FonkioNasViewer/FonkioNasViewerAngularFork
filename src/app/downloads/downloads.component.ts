import { Component } from '@angular/core';
import { Download } from '../data/download';
import { DownloadStationService } from '../services/DownloadStation.service';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.css'],
  
})
export class DownloadsComponent {
  constructor(public dlService: DownloadStationService){

  }

  downloadsStopped: Download[] = [];

  downloadsInProgress: Download[] = [];

  downloadsCompleted: Download[] = [];

  downloadsOther: Download[] = [];

  isLoading = true;

  isError = false;

  errorMessage = "";

  ngOnInit(): void {
    this.getDownloadList();
  }
  

  private getDownloadList() {
    this.dlService.getListOfDownloads().subscribe(
      {
        next: (response: any) => {
          this.isLoading = false;
          if (response.success) {
            for(var task of response.data.tasks) {
              var download = new Download(
                task.title,
                Number(task.size), 
                task.username, 
                Number(task.additional.transfer.speed_download), 
                Number(task.additional.transfer.size_downloaded),
                Number(task.additional.detail.connected_peers), 
                Number(task.additional.detail.connected_seeders)
              );
              switch (task.status) {
                case 'downloading':
                  this.downloadsInProgress.push(download);
                  break;
                case 'paused':
                  this.downloadsStopped.push(download);
                  break;
                case 'seeding':
                  this.downloadsCompleted.push(download);
                  break;
                default:
                  this.downloadsOther.push(download);
                  break;
              }
            }
          } else {
            this.errorMessage = 'Erreur lors de la récupération de la liste des téléchargements.';
          }
        },
        error: (error) => {
          this.isLoading = false;
          this.errorMessage = 'Une erreur s\'est produite ';
        }
      }
    );
  }

}
