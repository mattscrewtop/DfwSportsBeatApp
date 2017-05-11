import {
	Component,
	OnInit,
	NgZone
} 									from '@angular/core';

import { PageHomeModel } 			from '../models/page-home.model';
import { HomeService } 				from '../services/home.service';
import { CompareService } 			from '../../../shared/index';

@Component({
	selector: 'dsb-home-base',
	templateUrl: './home-base.component.html',
	styleUrls: [ './home-base.component.scss'],
	providers: []
})
export class HomeBaseComponent implements OnInit
{
	PageData: PageHomeModel;
	
	constructor(
		private zone: NgZone,
		private compareService: CompareService,
		private homeService: HomeService
	)
	{	
	}

	ngOnInit()
	{		
		let that = this;

		this.homeService.GetPageData().subscribe
			(
				//SUCCESS
				data =>
				{
					this.zone.run(() =>
					{ 	// Change the property within the zone, CD will run after
						
						this.PageData = data;

						//console.log('########### HOME PAGE DATA', this.PageData);
					});	
					
				},
					
				//ON ERROR
				() => null,

				//ON COMPLETE
				() => null	
			);
		
		if('serviceWorker' in navigator)
		{			
			// Handler for messages coming from the service worker
			navigator["serviceWorker"].onmessage = function(event)
			{
				if(that.PageData)
				{
					that.onContentRefresh(event.data);
				}				
			};
		}
	}

	onContentRefresh(data: string)
	{
		// let jsonFromServer = JSON.parse(data);
		// let refreshPageData = this.GeneratePageData(jsonFromServer.content);
		// let isPageDataTheSame = this.compareService.IsSmame(refreshPageData, this.PageData);

		//console.log('******** CONTENT REFRESH DATA', data);

		// if(!isPageDataTheSame)
		// {
		// }
	};	
}