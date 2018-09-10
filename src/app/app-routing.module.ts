import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatabindingComponent } from './databinding/databinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { LocalViewchildRefComponent } from './local-viewchild-ref/local-viewchild-ref.component';
import { RoutingComponent } from './routing/routing.component';
import { Sub1Component } from './routing/sub1/sub1.component';
import { Sub2Component } from './routing/sub2/sub2.component';
import { SubComponent } from './routing/sub/sub.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GuardsComponent } from './guards/guards.component';
import { HomeComponent } from './guards/home/home.component';
import { AdminComponent } from './guards/admin/admin.component';
import { UserComponent } from './guards/user/user.component';
import { GuardsServices } from './guards.services';
import { EditProfileComponent } from './guards/admin/edit-profile/edit-profile.component';
import { UserProfileComponent } from './guards/admin/user-profile/user-profile.component';
import { CanDeactiveGuard } from './guards/admin/edit-profile/edit-deactiveted-guards.service';
import { FormsComponent } from './forms/forms.component';
import { TemplateDriveComponent } from './forms/template-drive/template-drive.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
const routes: Routes = [
  {path: 'data-binding', component: DatabindingComponent},
  {path: '', component: DatabindingComponent},
  {path: 'directive-link', component: DirectivesComponent},
  {path: 'input-output', component: InputOutputComponent},
  {path: 'local-viewchild-ref', component: LocalViewchildRefComponent},
  {path: 'local-viewchild-ref', component: LocalViewchildRefComponent},
  {path: 'routing-link', component: RoutingComponent, children: [
    {path: '', component: SubComponent},
    {path: 'sub-1/:id/:name', component: Sub1Component},
    {path: 'sub-2', component: Sub2Component},
  ]},
  {path: 'not-found', component: NotFoundComponent},
  {path: 'guards', component: GuardsComponent, children: [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {
      path: 'admin',
      component: AdminComponent,
      canActivate: [GuardsServices],
      children: [
        {path: '', component: UserComponent},
        {path: 'user-profile', component: UserProfileComponent},
        {path: 'edit-profile', component: EditProfileComponent, canDeactivate: [CanDeactiveGuard]},
      ]},
    {path: 'user', component: UserComponent},
  ]},
  {path: 'forms', component: FormsComponent, children: [
    {path: '', component: TemplateDriveComponent},
    {path: 'template-driven', component: TemplateDriveComponent},
    {path: 'reactive-forms', component: ReactiveFormComponent},
  ]},
  {path: '**', redirectTo: 'not-found' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
