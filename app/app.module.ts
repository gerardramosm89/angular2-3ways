import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BloggerComponent } from './blogger.component';
import { PostsComponent } from './posts.component';
import { HttpModule } from '@angular/http';
import 'rxjs/Rx';
@NgModule({
  imports: [ BrowserModule,
 	HttpModule	],
  declarations: [ 
					AppComponent,
 					BloggerComponent,
					PostsComponent	],
	providers: [ 
	],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
