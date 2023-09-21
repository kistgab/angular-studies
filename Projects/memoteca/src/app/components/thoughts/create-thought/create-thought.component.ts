import { Component } from '@angular/core';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css'],
})
export class CreateThoughtComponent {
  thought = {
    id: 1,
    content: 'Learning Angular',
    author: 'Gabriel Kist',
    model: 'model2',
  };

  createThought() {
    alert('Thought was created');
  }

  cancel() {
    alert('Thought was cancelled');
  }
}
