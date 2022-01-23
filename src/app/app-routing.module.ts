import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdminComponent } from './admin/add-admin/add-admin.component';
import { AddRoomComponent } from './admin/add-room/add-room.component';
import { AdminListComponent } from './admin/admin-list/admin-list.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { MyProfileComponent } from './admin/my-profile/my-profile.component';
import { OverviewComponent } from './admin/overview/overview.component';
import { RoomListComponent } from './admin/room-list/room-list.component';
import { SignInComponent } from './admin/sign-in/sign-in.component';
import { ConsultationComponent } from './client/consultation/consultation.component';
import { HomeComponent } from './client/home/home.component';
import { PricesComponent } from './client/prices/prices.component';
import { UnitDetailsComponent } from './client/unit-details/unit-details.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {path:'', component:HomeComponent, pathMatch:'full'},
  {path:'Prices', component:PricesComponent},
  // {path:'UnitDetail', component:UnitDetailsComponent},
  {path:'UnitDetail/:id', component:UnitDetailsComponent},
  {path:'BookConsultation', component:ConsultationComponent},
  {path:"Admin/Signin", component:SignInComponent,},
  {path: "Admin", component:DashboardComponent, children:[
    {path:'', component:OverviewComponent, canActivate: [AuthGuard]},
    {path:'Dashboard',component:OverviewComponent, canActivate: [AuthGuard]},
    {path:"Add-Edit", component: AddRoomComponent,canActivate: [AuthGuard]},
    {path:"Add-Edit/:id", component: AddRoomComponent, canActivate: [AuthGuard]},
    {path: "List", component:RoomListComponent,canActivate: [AuthGuard]},
    {path: "My-Profile", component:MyProfileComponent,canActivate: [AuthGuard]},
    {path: "Admin-List", component:AdminListComponent,canActivate: [AuthGuard]},
    {path: "Add-Admin", component:AddAdminComponent,canActivate: [AuthGuard]},
  ]},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
