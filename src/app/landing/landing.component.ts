import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  movieTitle: string = '';
  movieData: any = null;
  constructor(private http: HttpClient) { }
  search() {
    if (this.movieTitle) {
      try {
        const apiKey = 'e57c2b8c';
        const url = `https://www.omdbapi.com/?t=${encodeURIComponent(this.movieTitle)}&apikey=${apiKey}`;
        const data = this.http.get(url).subscribe({
          next: (data: any) => {
            this.movieData = data;
          }
        });

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  }

}
