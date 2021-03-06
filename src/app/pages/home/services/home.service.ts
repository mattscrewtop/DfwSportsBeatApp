import { Injectable } 			from '@angular/core';
import { Observable } 			from 'rxjs/Rx';
import
{
	CdfDataService,
	CdfRequestModel
} 								from '@cdf/cdf-ng/lib';

import { environment } 			from '../../../../environments/environment';
import { PageHomeModel } 		from '../models/page-home.model';
import { CdfFactoryService }	from '../../../shared/index';

@Injectable()
export class HomeService 
{
	private PageData: PageHomeModel;

	constructor(
		private cdfDataService: CdfDataService
	)
	{
	};

	GetPageData() : Observable<any> 
	{ 
		//RETURN PAGE DATA IF IT'S KNOWN
		if (this.PageData)
		{
			return Observable.create(observer => 
			{
				observer.next(this.PageData);
				observer.complete();
			});
		}
		else
		{ 
			let requestModel: CdfRequestModel = new CdfRequestModel(environment.CDF_API.ApplicationKey);
			requestModel.AddGetRequest('https://api.twitter.com/1.1/statuses/user_timeline.json?count=20&screen_name=dfwsportsbeat');
			requestModel.AddGetRequest('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PL0Nd6NSwfg0nibENXvbqtgJDei4r4WtIS&order=date&maxResults=8');
			requestModel.AddGetRequest(CdfFactoryService.GetCloudCMSHomePageUrl());
			
			return Observable.create(observer => 
			{
				this.cdfDataService.requestData(requestModel)
					.subscribe
					(
						//SUCCESS - SEND RAW JSON BACK TO PARENT VIA EVENT EMITTER
						rawJson =>
						{
							// console.log('----------- RAW JSON RECEIVED:', rawJson);

							this.PageData = new PageHomeModel(rawJson[ 0 ], rawJson[ 1 ], rawJson[ 2 ]);
							
							observer.next(this.PageData);
							observer.complete();
						},

						//ERROR
						err => 					
						{
							console.log('********** GET HOME PAGE DATA ERROR:', err.message);	
						},

						//ON COMPLETE
						() => null
					)	
			});
		}
	};
}