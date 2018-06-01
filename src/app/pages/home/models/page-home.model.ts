import { ContentTypeModel }			from '../../../shared/models/index';

import
{ 
	CdfMediaModel,
	CdfRootModel,
	YouTubeService
} 									from '@screwtopmedia/cdf-ng-media/lib';

import { CdfTweetModel } 			from '@screwtopmedia/cdf-ng-tweet/lib';


import
{ 
	CdfFactoryService
} 									from '../../../shared/index';

export class PageHomeModel extends CdfRootModel
{
	Tagline: string;
	Subtagline: string;
	BackgroundImageModel: CdfMediaModel;
	ContentList: ContentTypeModel[] = [];

	constructor(rawJsonTweets: any, rawJsonYouTube: any, rawJsonCloudCMS: any)
	{
		super(rawJsonCloudCMS, PageHomeModel.name);

		//TWITTER DATA
		for (let entry of rawJsonTweets) 
		{
				let hasVideo : boolean = false;
				this.ContentList.push(new ContentTypeModel('CdfTweetComponent', 'tweetModel', new CdfTweetModel(entry), hasVideo));
		}

		//YOUTUBE DATA
		if(rawJsonYouTube && rawJsonYouTube.items)
		{
			for (let entry of rawJsonYouTube.items) 
			{			
				let hasVideo : boolean = true;
				this.ContentList.push(new ContentTypeModel('CdfMediaComponent', 'mediaModel', YouTubeService.CreateMediaModelFromYouTubeJson(entry), hasVideo));
			}
		}	
		
		//CLOUD CMS DATA
		if (rawJsonCloudCMS)
		{ 
			//Tagline
			if (rawJsonCloudCMS.tagline)
			{ 
				this.Tagline = rawJsonCloudCMS.tagline;
			}	

			//Subtagline
			if (rawJsonCloudCMS.subTagline)
			{ 
				this.Subtagline = rawJsonCloudCMS.subTagline;
			}	

			//BACKGROUND VIDEO
			if (rawJsonCloudCMS.backgroundVideo)
			{ 
				this.BackgroundImageModel = CdfFactoryService.CreateCdfMediaModelFromJson(rawJsonCloudCMS.backgroundVideo);
			}	
		}	

		//this.shuffle(this.ContentList);
		this.sort(this.ContentList);
	}

	private shuffle(array) 
	{
		var currentIndex = array.length, temporaryValue, randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {

			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
	}	

	private sort(array) 
	{
		// SEE INDEX.HTML PAGE FOR DIFFERENT SORT PROTOTYPES
		return array.sortByDesc(function(o){ return o.Value.TimeStamp });
	}		
}