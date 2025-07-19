import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlbumComponent } from './components/album/album.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '@src/app/components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    AlbumComponent,
    HeaderComponent,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ng-movies');
}
