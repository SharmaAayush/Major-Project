import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-diag',
  templateUrl: './diag.component.html',
  styleUrls: ['./diag.component.css']
})
export class DiagComponent implements OnInit {
  isFullPath = true;

  constructor(private router: Router, private location: Location) {
    router.events.subscribe((val) => {
      if (location.path() == "/app/diag") {
        this.isFullPath = true;
      } else {
        this.isFullPath = false;
      }
    })
  }

  ngOnInit() {
  }

}
