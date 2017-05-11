import { Injectable } 			from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http'; 
import { Observable } 			from 'rxjs/Rx';
import { CdfContactUsFormModel }from '@cdf/cdf-ng-contact-us-form/lib';
import
{
	CdfDataService,
	CdfRequestModel
} 								from '@cdf/cdf-ng/lib';

import { environment } 			from '../../../../environments/environment';
import { ContactUsPageModel } 	from '../models/contact-us-page.model';
import { CdfFactoryService }	from '../../../shared/index';

@Injectable()
export class ContactUsService 
{
	private PageData: ContactUsPageModel;

	constructor(
		private cdfDataService: CdfDataService,
		private http: Http
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
			let url: string = CdfFactoryService.GetCloudCMSContactUsPageUrl();
			let requestModel: CdfRequestModel = new CdfRequestModel(environment.CDF_API.ApplicationKey);
			requestModel.AddGetRequest(url);
			
			return Observable.create(observer => 
			{
				this.cdfDataService.requestData(requestModel)
					.subscribe
					(
						//SUCCESS - SEND RAW JSON BACK TO PARENT VIA EVENT EMITTER
						rawJson =>
						{
							//console.log('CONTACT US PAGE CONTENT RECEIVED:', rawJson);

							this.PageData = new ContactUsPageModel(rawJson);
							
							observer.next(this.PageData);
							observer.complete();
						},

						//ERROR
						err => 					
						{
							console.log('********** CONTACT-US PAGE DATA ERROR:', err.message);	
						},

						//ON COMPLETE
						() => null
					)	
			});
		}
	};

	//SEND FORM TO SERVER FOR SUBMISSION...	
	SendEmail(formModel: CdfContactUsFormModel): Observable<any>
	{ 
		if(!formModel) {
			return Observable.create(observer => 
			{
				observer.next(formModel);
				observer.complete();
			});
		}	
		else
		{ 
			let action: string = 'sendmail' 
			let url: string = CdfFactoryService.getNodeApiUrl(action);
			let emailid = '';
			let headers = new Headers({ 'Content-Type': 'application/json' });
    	let options = new RequestOptions({ headers: headers });

      return this.http.post(url, formModel, options)
								.map(this.extractData);
		}
	}

	private extractData(res: Response | any) 
	{
    let body = res.json();
    return body.data || { };
  }
}