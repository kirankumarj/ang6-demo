import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-sub2',
  templateUrl: './sub2.component.html',
  styleUrls: ['./sub2.component.css']
})
export class Sub2Component implements OnInit {
  id: number;
  name: string;
  newId: number;
  newName: string;

  constructor(private router: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    this.id = this.router.snapshot.queryParams['id'];
    this.name = this.router.snapshot.queryParams['name'];

    this.router.queryParams.subscribe((params: Params) => {
      this.id = params['id'];
      this.name = params['name'];
    });
  }

  resendData() {
    this.route.navigate(['../sub-2'], { relativeTo: this.router, queryParams: {id: this.newId, name: this.newName}});
  }

}
