import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlogService } from '../../services/blog';
import { Blog } from '../../models/blog';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

   blogs: Blog[] = [];
    loading = true;

  constructor(private blogService: BlogService) {
    this.load();
  }

  ngOnInit(): void {
    this.load();
  }

  

      load() {
  this.blogService.getBlogs().subscribe({
    next: (res) => {
      console.log("DATA:", res); 
      this.blogs = res as any[];
    },
    error: (err) => {
      console.error("ERROR:", err);
    }
  });
}


  delete(id: any) {
    this.blogService.deleteBlog(id)
      .subscribe(() => this.load());
  }
}
