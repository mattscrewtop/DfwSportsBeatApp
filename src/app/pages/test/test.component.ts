import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'dsb-test',
	templateUrl: './test.component.html',
	styleUrls: [],
	providers: []
})	
export class TestComponent implements OnInit 
{
	constructor() { }

	ngOnInit()
	{ 
		console.log('TestComponent ON INIT...');
	}
}