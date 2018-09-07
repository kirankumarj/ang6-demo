import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit {
  newId: number;
  newName: string;
  id: number;
  name: string;

  constructor(private router: Router) { }

  ngOnInit() {
    // this.id = this.activatedRouter.snapshot.params['id'];
    // this.name = this.activatedRouter.snapshot.params['name'];

    // this.activatedRouter.params.subscribe((param: Params) => {
    //   this.id = param['id'];
    //   this.name = param['name'];
    // });
  }

  onNavigate() {
     this.router.navigate(['routing-link']);
  }

  navigateHome() {
    this.router.navigate(['']);
  }
}
