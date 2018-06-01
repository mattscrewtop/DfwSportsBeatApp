import
{ 
	CdfMediaModel,
	CdfRootModel
} 									from '@screwtopmedia/cdf-ng-media/lib';

import
{ 
	CdfFactoryService
} 									from '../../../shared/index';

export class ContactUsPageModel extends CdfRootModel
{
	Tagline: string;
	SubTagline: string;
	MapImage: CdfMediaModel;
	BackgroundImageModel: CdfMediaModel;
	
	constructor(rawJson: any)
	{
		super(rawJson, ContactUsPageModel.name);
		
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
				this.SubTagline = rawJson.subTagline;
			}	

			//MapImage
			if (rawJson.mapImage)
			{
				this.MapImage = CdfFactoryService.CreateCdfMediaModelFromJson(rawJson.mapImage);
			}
			
			//BACKGROUND VIDEO
			if (rawJson.image)
			{ 
				this.BackgroundImageModel = CdfFactoryService.CreateCdfMediaModelFromJson(rawJson.image);
			}	
		}	
	}
}