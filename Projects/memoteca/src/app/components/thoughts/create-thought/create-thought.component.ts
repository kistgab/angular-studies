import { Component } from '@angular/core';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css'],
})
export class CreateThoughtComponent {
  pensamento = {
    id: 1,
    content: 'Learning Angular',
    author: 'Gabriel Kist',
    model: '',
  };
}
