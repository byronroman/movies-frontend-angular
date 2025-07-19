import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MoviesModel } from '@src/app/models/movie.model';
import { AlbumService } from '@src/app/services/album.service/album.service';

@Component({
  selector: 'app-new-movie-button',
  templateUrl: './new-movie-button.component.html',
  styleUrls: ['./new-movie-button.component.scss'],
  standalone: true,
  imports: [],
})
export class NewMovieButtonComponent {
  isUpdate: boolean = false;
  formMovie: FormGroup = new FormGroup({});
  listMovies: MoviesModel[] = [];
  constructor(private albumService: AlbumService) {
    this.formMovie = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(''),
      description: new FormControl(''),
      time: new FormControl(''),
      image: new FormControl(''),
      status: new FormControl(true),
    });

    this.list();
  }

  list() {
    this.albumService.getMovies().subscribe((res) => {
      if (res.sucess) {
        this.listMovies = res.data;
      }
    });
  }

  newMovie() {
    this.formMovie.reset();
    this.isUpdate = false;
  }
}
