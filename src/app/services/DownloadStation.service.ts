// Angular Modules 
import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 
import { Constants } from '../config/constants';
import { Login } from '../data/login.model';
import { Observable } from 'rxjs';
@Injectable() 
export class DownloadStationService { 
    url = Constants.API_ENDPOINT;
    constructor( private http: HttpClient) {       
    } 

      getListOfDownloads(): Observable<any> {
        const apiUrl = this.url;
        return this.http.get(apiUrl);
      }
    }