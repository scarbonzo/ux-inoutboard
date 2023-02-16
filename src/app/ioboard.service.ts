import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class IoboardService {
  //private baseUrl = 'http://192.168.100.120:8088/api/';
  private baseUrl = 'https://localhost:44329/api/';

  constructor(private httpClient: HttpClient) { }

  getGroupUsers(group: string, year: number, week: number) {
    let url = this.baseUrl + 'v2/group/' + group + "/" + year + '/' + week;
    
    return this.httpClient.get(url);
  }

  getUser(username: string, year: number, week: number) {
    let url = this.baseUrl + 'v2/user/' + username + '/' + year + '/' + week;

    return this.httpClient.get(url);
  }

  getStatuses() {
    return this.httpClient.get(this.baseUrl + 'statuses/');
  }

  getGroups() {
    return this.httpClient.get(this.baseUrl + 'groups/');
  }

}