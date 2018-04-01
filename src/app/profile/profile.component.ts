import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticateUserService } from '../authenticate-user.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  innerWidth;

  constructor(private authenticateUser: AuthenticateUserService, private router: Router, private apiService: ApiService) {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  ngOnInit() {
  }

}
