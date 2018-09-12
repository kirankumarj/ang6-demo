import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { ChildComponent } from './input-output/child/child.component';
import { ChildOutputComponent } from './input-output/child-output/child-output.component';
import { LocalViewchildRefComponent } from './local-viewchild-ref/local-viewchild-ref.component';
import { AppHighlightDirective } from './directives/basic-directive';
import { BetterHighlightDirective } from './better-highlight.directive';
import { RoutingComponent } from './routing/routing.component';
import { Sub1Component } from './routing/sub1/sub1.component';
import { Sub2Component } from './routing/sub2/sub2.component';
import { SubComponent } from './routing/sub/sub.component';
import { NonFoundComponent } from './non-found/non-found.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GuardsComponent } from './guards/guards.component';
import { HomeComponent } from './guards/home/home.component';
import { AdminComponent } from './guards/admin/admin.component';
import { UserComponent } from './guards/user/user.component';
import { GuardsServices } from './guards.services';
import { ServiceService } from './service.service';
import { EditProfileComponent } from './guards/admin/edit-profile/edit-profile.component';
import { UserProfileComponent } from './guards/admin/user-profile/user-profile.component';
import { CanDeactiveGuard } from './guards/admin/edit-profile/edit-deactiveted-guards.service';
import { FormsComponent } from './forms/forms.component';
import { TemplateDriveComponent } from './forms/template-drive/template-drive.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';



@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    DatabindingComponent,
    DirectivesComponent,
    InputOutputComponent,
    ChildComponent,
    ChildOutputComponent,
    LocalViewchildRefComponent,
    AppHighlightDirective,
    BetterHighlightDirective,
    RoutingComponent,
    Sub1Component,
    Sub2Component,
    SubComponent,
    NonFoundComponent,
    NotFoundComponent,
    GuardsComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
    EditProfileComponent,
    UserProfileComponent,
    FormsComponent,
    TemplateDriveComponent,
    ReactiveFormComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ServiceService, GuardsServices, CanDeactiveGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
