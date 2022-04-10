import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-wait-list',
  templateUrl: './service-wait-list.component.html',
  styleUrls: ['./service-wait-list.component.css']
})
export class ServiceWaitListComponent implements OnInit {
data: Date = new Date(2021, 8, 15)
  constructor() { }

  ngOnInit(): void {
  }

}
