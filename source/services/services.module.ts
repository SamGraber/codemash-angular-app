import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { HttpService } from './http/http.service';

@NgModule({
	imports: [HttpModule],
	providers: [HttpService],
})
export class ServicesModule { }
