import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { CategoryService } from './categories/shared/category.service';
import { appRouting } from './app.routing';

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		appRouting,
	],
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		ScheduleComponent,
		CategoryListComponent,
	],
	providers: [CategoryService],
	bootstrap: [AppComponent]
})
export class AppModule { }
