import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-key-system',
  templateUrl: './api-key-system.component.html',
  styleUrls: ['./api-key-system.component.scss']
})
export class ApiKeySystemComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  getApiKeys() : any{
    return this.httpClient.get<any>('/admin/api/users').subscribe((user) => {
      console.log(user)
    });
  }
  ngOnInit(): void {
  this.getApiKeys();
  }

}
