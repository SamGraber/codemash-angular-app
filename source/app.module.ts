import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { HeaderComponent, FooterComponent } from './shared/index';
import { ScheduleComponent } from './schedule/schedule.component';
import { appRouting } from './app.routing';

@NgModule({
	imports: [
		BrowserModule,
		appRouting,
	],
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		ScheduleComponent,
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
