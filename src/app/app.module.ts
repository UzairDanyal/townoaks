import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './client/home/home.component';
import { HeaderComponent } from './client/header/header.component';
import { PricesComponent } from './client/prices/prices.component';
import { UnitDetailsComponent } from './client/unit-details/unit-details.component';
import { RouterModule } from '@angular/router';
import { ConsultationComponent } from './client/consultation/consultation.component';
import { SwiperModule } from 'swiper/angular';
import { FormsModule } from '@angular/forms';
import { SignInComponent } from './admin/sign-in/sign-in.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { OverviewComponent } from './admin/overview/overview.component';
import { AddRoomComponent } from './admin/add-room/add-room.component';
import { RoomListComponent } from './admin/room-list/room-list.component';
import { DataTablesModule } from 'angular-datatables';
import { MyProfileComponent } from './admin/my-profile/my-profile.component';
import { AddAdminComponent } from './admin/add-admin/add-admin.component';
import { AdminListComponent } from './admin/admin-list/admin-list.component';
import { SpinnerComponent } from './admin/spinner/spinner.component';

import { NotifierModule, NotifierOptions } from 'angular-notifier';

const customNotifierOptions: NotifierOptions = {
  position: {
		horizontal: {
			position: 'right',
			distance: 12
		},
		vertical: {
			position: 'top',
			distance: 12,
			gap: 10
		}
	},
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    PricesComponent,
    UnitDetailsComponent,
    ConsultationComponent,
    SignInComponent,
    DashboardComponent,
    OverviewComponent,
    AddRoomComponent,
    RoomListComponent,
    MyProfileComponent,
    AddAdminComponent,
    AdminListComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    SwiperModule,
    FormsModule,
    DataTablesModule,
    NotifierModule.withConfig(customNotifierOptions)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
