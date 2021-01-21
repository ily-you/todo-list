import { Component } from '@angular/core';
import {TodoItem} from './todo-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-list';

  public todoArray: Array<TodoItem> = [];

  /**
   * This method is used in app.component.html on a keyup event on the text input.
   * It take a KeyboardEvent as argument and return void (mean its return nothing).
   */
  public addItem($event: KeyboardEvent): void {
    // Check if keyboard key pressed is Enter.
    if ($event.code === 'Enter') {
      // Get the event source html element. In our case, its an input element.
      // Avoid using "as" keyword. It can resolve your problem at some point but will not really solve it.
      // Give only as example, to compare on solution from internet.
      // const $input: HTMLInputElement|null = $event.target as HTMLInputElement;
      // const $input = $event.target as HTMLInputElement;

      const $input: EventTarget|null = $event.target;

      // Prefer using this instead of "as" example above.
      // Check the real type of our object inside $input, if its a HTMLInputElement instance.
      if ($input instanceof HTMLInputElement) {
        // Get the value from the input without leading and ending space.
        const str = $input.value.trim();

        // If our string in not empty.
        if (str !== '') {
          // Add it to the array.
          this.todoArray.push({
            title: str,
            checked: false,
          });
          // clear the input.
          $input.value = '';
        }
      }
    }
  }

  public removeItem(index: number): void {
    // If retrieve index is not in the array, do not remove the element.
    if (index > -1 && index < this.todoArray.length) {
      // Remove 1 (2nd arg) element from index (1st arg) in the array.
      this.todoArray.splice(index, 1);
    }
  }

  public clearCompletedItem(): void {
    // Solution 1
    // for (let i = 0; i < this.todoArray.length; i++) {
    //   if (this.todoArray[i].checked === true) {
    //     this.todoArray.splice(i, 1);
    //     i--;
    //   }
    // }

    // Solution 2
    // for (let i = this.todoArray.length - 1; i >= 0; i--) {
    //   if (this.todoArray[i].checked === true) {
    //     this.todoArray.splice(i, 1);
    //   }
    // }

    // Solution 3
    this.todoArray = this.todoArray.filter((item: TodoItem) => {
      // return true; // If you want to keep the element into the new array.
      // return false; // If you want to remove the element from the new array.

      return !item.checked;

      // Long version to replace de line 78.
      // if (item.checked === true) {
      //   return false;
      // } else {
      //   return true;
      // }
    });
  }
}