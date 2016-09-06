import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HeaderComponent } from './header/header.component';
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
		ScheduleComponent,
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
