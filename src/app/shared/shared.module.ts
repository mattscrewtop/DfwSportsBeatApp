import { NgModule } 					from '@angular/core';
import { CommonModule }  				from '@angular/common';
import
{
	FormsModule,
	ReactiveFormsModule
}         								from '@angular/forms';
import { HttpModule } 					from '@angular/http';
import { RouterModule } 				from '@angular/router';


import
{
	//SHARED DIRECTIVES

	//APPLICATION COMPONENTS
	BaseComponent,

	//APPLICATION MODULES...	
	AddressModule,
	NavigationModule,
	PhoneNumberModule,
	SocialMediaModule
} 										from './components/index';

import { ControlFactoryDirective } 		from './directives/index';

//3RD PARTY...
import { CdfContactUsFormModule } 		from '@cdf/cdf-ng-contact-us-form/lib';
import { CdfMediaModule } 				from '@screwtopmedia/cdf-ng-media/lib';
import { CdfModule } 					from '@cdf/cdf-ng/lib';
import { CdfTweetModule } 				from '@cdf/cdf-ng-tweet/lib';
import { ToastModule } 					from 'ng2-toastr/ng2-toastr';

@NgModule({
	imports:
	[
		//MODULES
		CommonModule,
		FormsModule,
		ReactiveFormsModule,		
		RouterModule,

		//APPLICATION MODULES
		AddressModule,
		NavigationModule,
		PhoneNumberModule,
		SocialMediaModule,

		//3RD PARTY...
		CdfContactUsFormModule,
		CdfMediaModule,
		CdfModule,
		CdfTweetModule,
		ToastModule
	],
	declarations:
	[
		//COMPONENTS
		BaseComponent,

		//DIRECTIVES
		ControlFactoryDirective
	],
	exports:
	[		
		//COMPONENTS
		BaseComponent,

		//DIRECTIVES
		ControlFactoryDirective,

		//MODULES
		CommonModule,
		FormsModule,
		HttpModule,
		ReactiveFormsModule,		
		RouterModule,

		//APPLICATION MODULES
		AddressModule,
		NavigationModule,
		PhoneNumberModule,
		SocialMediaModule,

		//3RD PARTY...
		CdfContactUsFormModule,
		CdfMediaModule,
		CdfModule,
		CdfTweetModule,
		ToastModule
	]
})
export class SharedModule
{
}