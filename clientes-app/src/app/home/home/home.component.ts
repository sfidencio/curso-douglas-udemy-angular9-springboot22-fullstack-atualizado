import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  efetuarLogoff(event: Event) {
    //event.preventDefault;
    localStorage.removeItem('access_token');
    this.route.navigate(['/login']);
  }

}
