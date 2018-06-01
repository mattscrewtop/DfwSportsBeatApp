import { environment } 				from '../../environments/environment';
import { ConfigInterface }			from '@screwtopmedia/cdf-ng-media/lib';

export const CdfMediaConfig: ConfigInterface =
	{
		JwPlayerKey: environment.JW_PLAYER.key
	};