import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styles: [`
    
  `],
  template: `
    <div class="jumbotron text-center">
      <h1>The App Lives!</h1>
      <p>{{ message }}</p>
    </div>
		<h1>Bloggers Component</h1>
		<bloggers></bloggers>

		<h1>Posts Component</h1>
		<posts></posts>
	`
})
export class AppComponent {
  message = 'This is the sample message.';
}
