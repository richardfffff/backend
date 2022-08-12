import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-argprog',
  templateUrl: './argprog.component.html',
  styleUrls: ['./argprog.component.css']
})
export class ArgprogComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    this.router.navigate(['/login'])
  }

}
