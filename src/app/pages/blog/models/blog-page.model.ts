import
{ 
	CdfMediaModel,
	CdfRootModel
} 									from '@screwtopmedia/cdf-ng-media/lib';

import
{ 
	CdfFactoryService
} 									from '../../../shared/index';

export class BlogPageModel extends CdfRootModel
{
	Title: string;
	Description: string;
	Tagline: string;
	Subtagline: string;
	OurHistory: string;
	MediaModel: CdfMediaModel;

	constructor(rawJson: any)
	{
		super(rawJson, BlogPageModel.name);
		
		//CLOUD CMS DATA
		if (rawJson)
		{ 
			//Title
			if (rawJson.title)
			{ 
				this.Title = rawJson.title;
			}

			//Description
			if (rawJson.description)
			{ 
				this.Description = rawJson.description;
			}	

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