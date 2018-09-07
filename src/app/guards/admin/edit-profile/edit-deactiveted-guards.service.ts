import { Observable } from 'rxjs';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export interface CanComponentDeactivate {
canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactiveGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(componet: CanComponentDeactivate,
                cuurentRoute: ActivatedRouteSnapshot,
                cuurentState: RouterStateSnapshot,
                nextState: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
                  return componet.canDeactivate();
  }
}
