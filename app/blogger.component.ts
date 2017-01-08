import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { Post } from './post.interface';

@Component({
    selector: 'bloggers',
    template: `
        <h1>Posts by: {{ blogger }}</h1>
        <div>
            <posts [data]="posts"></posts>
        </div>
    `
})
export class BloggerComponent implements OnInit {
    blogger = 'Gerry';
    posts: Post[];

    constructor(private _http: Http) { }

    ngOnInit() { 
        this.getPostsByBlogger()
            .subscribe(x => this.posts = x);
					console.log("this.posts is: ", this.posts);
		}

    getPostsByBlogger() {
        const url = 'app/assets/mock-posts.json';
        return this._http.get(url)
            .map(x => x.json());
    }
}
