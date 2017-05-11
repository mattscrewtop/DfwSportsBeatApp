import
{ 
	CdfMediaModel,
	CdfRootModel
} 									from '@cdf/cdf-ng-media/lib';

import
{ 
	CdfFactoryService
} 									from '../../../shared/index';

export class AboutUsPageModel extends CdfRootModel
{
	Tagline: string;
	Subtagline: string;
	OurHistory: string;
	MediaModel: CdfMediaModel;

	constructor(rawJson: any)
	{
		super(rawJson, AboutUsPageModel.name);
		
		//CLOUD CMS DATA
		if (rawJson)
		{ 
			//Tagline
			if (rawJson.tagline)
			{ 
				this.Tagline = rawJson.tagline;
			}	

			//Subtagline
			if (rawJson.subTagline)
			{ 
				this.Subtagline = rawJson.subTagline;
			}	

			//OurHistory
			if (rawJson.ourHistory)
			{ 
				this.OurHistory = rawJson.ourHistory;
			}

			//BACKGROUND VIDEO
			if (rawJson.image)
			{ 				
				this.MediaModel = CdfFactoryService.CreateCdfMediaModelFromJson(rawJson.image);
			}	
		}	
	}		
}