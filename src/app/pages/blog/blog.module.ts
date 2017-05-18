import { NgModule }					from '@angular/core';
import { CommonModule } 			from '@angular/common';

import { BlogBaseComponent }		from './base/blog-base.component';
import { BlogDesktopComponent }	from './desktop/blog-desktop.component';
import { BlogMobileComponent }	from './mobile/blog-mobile.component';
import { BlogComponent }			from './blog.component';
import { BlogService }			from './services/blog.service';
import { routing } 					from './blog.routing';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
	imports:
	[
		CommonModule,
		routing,
		SharedModule
	],
	declarations:
	[
		BlogBaseComponent,
		BlogDesktopComponent,
		BlogMobileComponent,
		BlogComponent
	],
	exports:
	[
		BlogComponent
	],
	providers:
	[
		BlogService
	]
})
export class BlogModule {}