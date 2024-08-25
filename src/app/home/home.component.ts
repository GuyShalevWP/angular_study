import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { ReversePipe } from '../custom/reverse.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, CommonModule, ReversePipe, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  title = 'Angular 18 Tut';
  subtitle = 'And this is the subtitle';
  todaydate = new Date();
  salary = 1000000;
  _obj = { name: 'NT' };

  isdisabled = true;
  _class = 'active';
  _color = 'blue';
  _font = '34';

  isshow = false;

  ticketinfo = [
    { id: 1, name: 'angular', color: 'red' },
    { id: 2, name: 'react', color: 'blue' },
    { id: 3, name: 'vuejs', color: 'green' },
  ];

  _view = 'about';

  changetitle() {
    this.title = 'Angular 18 Tuttorail';
  }

  updateTitle(event: any) {
    this.title = event.target.value;
  }
}
