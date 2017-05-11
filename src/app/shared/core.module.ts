import
{
	NgModule,
	ModuleWithProviders
} 									from '@angular/core';
import { CommonModule }  			from '@angular/common';
import
{
	FormsModule,
	ReactiveFormsModule
}         							from '@angular/forms';
import { RouterModule } 			from '@angular/router';

import
{
	//SHARED SERVICES
	BreadcrumbService,
	CdfFactoryService,
	CompareService,
	DataService,
	OnlineService,
    MatchMediaService
}									from './services/index';


@NgModule({
	imports:
	[
		//MODULES
		CommonModule,
		FormsModule,
		ReactiveFormsModule,		
		RouterModule
	],
	declarations:
	[
		//COMPONENTS

		//DIRECTIVES
	],
	exports:
	[		
	]
})
export class CoreModule
{
	static forRoot(): ModuleWithProviders
	{
		return {
			ngModule: CoreModule,
			providers:
			[ 
				BreadcrumbService,
				CdfFactoryService,
				CompareService,
				DataService,
				OnlineService,
				MatchMediaService
			]
		};
	}
}