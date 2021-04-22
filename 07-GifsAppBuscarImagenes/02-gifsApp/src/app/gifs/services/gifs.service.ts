import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../Interface/gifs.Interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'BN9OSjeJjM3WzrCvhF2YpedHJkfjj8Lf';
  private servicioUrl:  string = "https://api.giphy.com/v1/gifs"
  private _historial: string[] = [];

  get historial() {
    return [...this._historial];
  } 

  constructor(private http: HttpClient){
    this._historial = JSON.parse(localStorage.getItem("historial")!) || [];
    this.resultados = JSON.parse(localStorage.getItem("resultados")!) || [];
  }

  public resultados: Gif[] = [];
  
  buscarGifs( query: string) {

    const params = new HttpParams()
          .set('api_key', this.apiKey)
          .set('limit', '10')
          .set('q',query);

    query = query.trim().toLocaleLowerCase();
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`,{params})
      .subscribe((response: any) => {
        console.log(response.data);
        this.resultados = response.data;
        localStorage.setItem("resultados",JSON.stringify(this.resultados));
      });
  }

}
