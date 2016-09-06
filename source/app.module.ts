import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { appRouting } from './app.routing';

@NgModule({
	imports: [
		BrowserModule,
		appRouting,
	],
	declarations: [AppComponent],
	bootstrap: [AppComponent]
})
export class AppModule { }
