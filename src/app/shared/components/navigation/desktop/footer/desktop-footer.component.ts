import
{
	Component,
	OnInit,
	NgZone
} 									from '@angular/core';
import { CdfRequestModel } 			from '@cdf/cdf-ng/lib';

import { environment } 				from '../../../../../../environments/environment';

@Component({
	selector: 'dsb-desktop-footer',
	templateUrl: './desktop-footer.component.html',
	styleUrls: [ './desktop-footer.component.scss' ],
	providers: []
})
export class DesktopFooterComponent implements OnInit 
{	
	RequestModel: CdfRequestModel;
	SiteNameAndVersion: string;	
	
    constructor() 
	{
    }

	ngOnInit()
	{	
		this.SiteNameAndVersion = environment.name + ' - ' + environment.version;
	};
}