import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  blogs:any = [];

  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.getData();
    
  }
  getData(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.http.get("https://pt2kq0gly7.execute-api.us-east-1.amazonaws.com/staging/web/blog/top",httpOptions)
    .subscribe(
      (response:any)=>{
        console.log(response)
        if(response.status){
          this.blogs = response.items;
        }else{
          console.log("There is a problem with API.")
        }
      },
      (error)=>{
        console.log(error);
      }
    );
  }
}
