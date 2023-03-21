import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  posts: any;
  results: any = [];
  apiData: any;
  searchQuery = '';

  constructor(private platform: Platform, public httpClient: HttpClient) {  }

  ngOnInit() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/posts')
    .subscribe(data => {
      console.log('my data: ', data);
      this.apiData = data;
      this.posts = data;
    })
  }
  handleChange(ev: any) {
    this.posts.forEach(element => {
      if(element.title.toLowerCase().indexOf(ev) > -1) {
        this.results.push(element);
      }
    });
    this.posts = [...this.results];
  }

  closeClick() {
    this.searchQuery= '';
    this.posts = [...this.apiData];
  }
}
