import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlAPI } from '../settings/config';
@Injectable({providedIn: 'root'})
export class DataService {
    
    constructor(private httpClient: HttpClient) { }
    

 
}