import {
	Component,
	OnInit,
	NgZone
} 									from '@angular/core';

import { BlogPageModel } 		from '../models/blog-page.model';
import { BlogService } 			from '../services/blog.service';

@Component({
	selector: 'dsb-blog-base',
	templateUrl: './blog-base.component.html',
	styleUrls: [ './blog-base.component.scss' ],
	providers: []
})
export class BlogBaseComponent implements OnInit
{
	PageData: BlogPageModel;
			
	constructor
	(
		private zone: NgZone,
		private blogService: BlogService,
	)
	{	
	}

	ngOnInit()
	{
		this.blogService.GetPageData().subscribe
			(
				//SUCCESS
				data =>
				{
					this.zone.run(() =>
					{ 	// Change the property within the zone, CD will run after

						this.PageData = data;

						//console.log('########### ABOUT-US PAGE DATA', this.PageData);
					});

				},

				//ON ERROR
				() => null,

				//ON COMPLETE
				() => null
			);		
	}
}