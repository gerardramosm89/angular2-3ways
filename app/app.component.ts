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
		<bloggers></bloggers>

	`
})
export class AppComponent {
  message = 'Test Binding';
}
