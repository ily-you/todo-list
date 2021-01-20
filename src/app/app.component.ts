import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-list';

  public todoArray: Array<string> = [
    'item 1',
    'item 2',
    'item 3',
    'item 4',
    'item 5',
    'foobar'
  ];

  public addItem($event: KeyboardEvent): void /*type de retour(aucun retour dans la fonction) */ {
    if ($event.code === 'Enter'){
      const $input: HTMLInputElement|null = $event.target as HTMLInputElement;
      if($input !== null){
        console.log($input.value);
      }
      console.log('Enter pressed');
    }
   
  }
}
