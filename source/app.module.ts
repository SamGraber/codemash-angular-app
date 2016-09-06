import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
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
		CategoryListComponent,
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
