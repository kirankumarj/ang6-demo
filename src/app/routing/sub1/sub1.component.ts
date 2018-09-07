import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-sub1',
  templateUrl: './sub1.component.html',
  styleUrls: ['./sub1.component.css']
})
export class Sub1Component implements OnInit {
  id: number;
  name: string;
  newId: number;
  newName: string;

  constructor(private router: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    this.id = this.router.snapshot.params['id'];
    this.name = this.router.snapshot.params['name'];

    this.router.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.name = params['name'];
    });
  }

  resendData() {
    this.route.navigate(['sub-1', this.newId, this.newName] );
  }
}

