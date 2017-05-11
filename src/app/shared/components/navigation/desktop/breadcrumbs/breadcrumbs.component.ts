import { Router } 					from '@angular/router';
import { Component, OnInit } 		from '@angular/core';

import { BreadcrumbService } 		from '../../../../services/navigation/breadcrumb.service';
import { BreadcrumbModel }			from '../../../../models';

@Component({
	selector: 'dsb-breadcrumbs',
	templateUrl: './breadcrumbs.component.html',
	styleUrls: [ './breadcrumbs.component.scss' ],
	providers: []
})
export class BreadcrumbsComponent implements OnInit 
{	
	hasBreadCrumbs: boolean;

	constructor
	(
		private breadcrumbService: BreadcrumbService
	)
	{
	};

	ngOnInit()
	{
		this.breadcrumbService.hasBreadCrumbObservable.subscribe(
			//SUCCESS
			data =>
			{	
				this.hasBreadCrumbs = data;
			},

			//ERROR
			err =>
			{ 
			},

			//COMPLETE
			() =>
			{ 
			}		
		)
	};

	GoToHomeState()
	{ 
	};

	GoToBreadcrumb(breadcrumb: BreadcrumbModel)
	{ 
		breadcrumb.OnClick();
	};
}