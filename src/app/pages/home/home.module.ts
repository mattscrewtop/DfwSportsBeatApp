import { NgModule }					from '@angular/core';
import { CommonModule } 			from '@angular/common';

import { HomeBaseComponent }		from './base/home-base.component';
import { HomeDesktopComponent }		from './desktop/home-desktop.component';
import { HomeMobileComponent }		from './mobile/home-mobile.component';
import { HomeComponent } 			from './home.component';
import { HomeService }				from './services/home.service';
import { routing }					from './home.routing';

import { SharedModule }   			from '../../shared/shared.module';

@NgModule({
	imports:
	[
		CommonModule,
		routing,
		SharedModule
	],
	declarations:
	[
		HomeBaseComponent,
		HomeDesktopComponent,
		HomeMobileComponent,
		HomeComponent
	],
	exports:
	[
		HomeComponent
	],
	providers:
	[
		HomeService
	]
})
export class HomeModule {}