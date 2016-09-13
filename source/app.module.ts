import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HeaderComponent, FooterComponent } from './shared/index';
import { ScheduleComponent } from './schedule/schedule.component';
import { appRouting } from './app.routing';
import { ServicesModule } from './services/services.module';

@NgModule({
	imports: [
		BrowserModule,
		ServicesModule,
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
