# Angular

Angular was created by Google
It's first version was based on JS
But it was totally rewrite to use TS and known as Angular 2 and the old version named AngularJS

### Property Binding

Helps to set in HTML properties the component properties values

When i have a html property i can use in that way:

```js
<p>[textContent]="myComponentProperty"</p>
```

If i don't, i can use in that another way with interpolation:

```html
<p>The value of the component property is: {{"myComponentProperty}}</p>
```

### Two-Way Data Binding

Same as property binding but here the content is also updated in the component

```html
<input type="textarea" [(ngModel)]="myComponentProperty" />
```

### Event Binding

Listen to some event and execute a method when it happens

Syntax:

```html
<button (click)="createThought()" class="button">Save</button>
```
