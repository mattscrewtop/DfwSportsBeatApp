import{
	Component,
	NgZone,
	OnInit
} 								from '@angular/core';

import { BaseComponent } 		from '../../shared/index';

@Component({
	selector: 'dsb-page-blog.component',
	templateUrl: './blog.component.html',
	providers: []
})
export class BlogComponent extends BaseComponent implements OnInit 
{
	constructor(
		zone: NgZone		
	)
	{
		super(zone);
	}

	ngOnInit()
	{
	}
}