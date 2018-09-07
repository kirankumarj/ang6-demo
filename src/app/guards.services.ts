import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ServiceService } from './service.service';

@Injectable()
export class GuardsServices implements CanActivate, CanActivateChild {

  constructor(private service: ServiceService) {
  }
  canActivate(
    router: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.service.getStatus();
  }

  canActivateChild(
    router: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.canActivate(router, state);
  }
}
