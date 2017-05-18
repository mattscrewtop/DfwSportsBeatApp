import { Injectable } 			from '@angular/core';
import { Observable } 			from 'rxjs/Rx';
import
{
	CdfDataService,
	CdfRequestModel
} 								from '@cdf/cdf-ng/lib';

import { environment } 			from '../../../../environments/environment';
import { BlogPageModel } 	from '../models/blog-page.model';
import { CdfFactoryService }	from '../../../shared/index';

@Injectable()
export class BlogService 
{
	private PageData: BlogPageModel[];

	constructor(
		private cdfDataService: CdfDataService
	)
	{
	}

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
			// let url: string = CdfFactoryService.GetCloudCMSAboutUsPageUrl();
			// let requestModel: CdfRequestModel = new CdfRequestModel(environment.CDF_API.ApplicationKey);
			// requestModel.AddGetRequest(url);
			
			// return Observable.create(observer => 
			// {
			// 	this.cdfDataService.requestData(requestModel)
			// 		.subscribe
			// 		(
			// 			//SUCCESS - SEND RAW JSON BACK TO PARENT VIA EVENT EMITTER
			// 			rawJson =>
			// 			{
			// 				//console.log('ABOUT-US PAGE CONTENT RECEIVED:', rawJson);

			// 				this.PageData = new BlogPageModel(rawJson);
							
			// 				observer.next(this.PageData);
			// 				observer.complete();
			// 			},

			// 			//ERROR
			// 			err => 					
			// 			{
			// 				console.log('********** BLOG PAGE DATA ERROR:', err.message);	
			// 			},

			// 			//ON COMPLETE
			// 			() => null
			// 		)	
			// });
			let queryParams = 'limit=-1&metadata=false&full=true&sort={"title":1}';
			let body: Object = { "_type": "page:blog" };
			let url: string = CdfFactoryService.BuildCloudCMSUrlWithQueryParams(queryParams);
			let requestModel: CdfRequestModel = new CdfRequestModel(environment.CDF_API.ApplicationKey);
			requestModel.AddPostRequest(url, body);
			
			return Observable.create(observer => 
			{
				this.PageData = [];				

				this.cdfDataService.requestData(requestModel)
					.subscribe
					(
						//SUCCESS - SEND RAW JSON BACK TO PARENT VIA EVENT EMITTER
						rawJson =>
						{
							//SOCIAL MEDIA LIST
							for (let entry of rawJson.rows) 
							{
								this.PageData.push(new BlogPageModel(entry));
							}							
														
							observer.next(this.PageData);
							observer.complete();
						},

						//ERROR
						err => 					
						{
							console.log('********** GET BLOG LIST ERROR:', err.message);	
						},

						//ON COMPLETE
						() => null
					)	
			});
		}
	};
}