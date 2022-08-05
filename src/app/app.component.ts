import { Component } from '@angular/core';
import { Dialog } from '@capacitor/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'capApp';

  async showAlert(){
    await Dialog.alert({
      title: 'Atención',
      message: 'Esto es una alertaa',
    });
  }
}
