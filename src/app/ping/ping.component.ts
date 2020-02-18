import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ping',
  templateUrl: './ping.component.html',
  styleUrls: ['./ping.component.css']
})
export class PingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
export class AppComponent {
  constructor(public http: HttpClient) {}
  public ping() {
    this.http.get('localhost:8090/restriccion')
      .subscribe(
        data => console.log(data),
        err => console.log(err)
      );
  }
}
