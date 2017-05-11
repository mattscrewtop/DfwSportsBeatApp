import { NgModule } 				from '@angular/core';
import { RouterModule } 			from '@angular/router';
import { CommonModule }        		from '@angular/common';

import { SocialMediaModule } 		from '../social-media';

import { BreadcrumbsComponent }		from './desktop/breadcrumbs/breadcrumbs.component';
import { DesktopFooterComponent }	from './desktop/footer/desktop-footer.component';
import { DesktopHeaderComponent }	from './desktop/header/desktop-header.component';
import { MobileFooterComponent }	from './mobile/footer/mobile-footer.component';
import { MobileHeaderComponent } 	from './mobile/header/mobile-header.component';
import { NavComponent }				from './nav/nav.component';

@NgModule({
	imports:
	[
        CommonModule,
		RouterModule,
		SocialMediaModule
	],
	declarations:
	[
		BreadcrumbsComponent,
		
		DesktopFooterComponent,
		DesktopHeaderComponent,

		MobileFooterComponent,
		MobileHeaderComponent,

		NavComponent
	],
	exports:
	[
		DesktopHeaderComponent,
		MobileHeaderComponent,
		SocialMediaModule
	],
	providers:
	[
	]
})
export class NavigationModule { }