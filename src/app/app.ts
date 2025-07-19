import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlbumComponent } from './components/album/album.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '@src/app/components/header/header.component';
import { NewMovieButtonComponent } from '@src/app/components/new-movie-button/new-movie-button.component';
import { FooterComponent } from '@src/app/components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    NewMovieButtonComponent,
    AlbumComponent,
    FooterComponent,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ng-movies');
}
