import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })

export class BlogService {
    baseUrl = 'http://localhost:8080/api/v1.0/blogsite';

  constructor(private http: HttpClient) {}

  getBlogs() {
    //return this.http.get<Blog[]>(this.baseUrl)/blogs/getall;
    return this.http.get<any[]>(`${this.baseUrl}/blogs/getall`);

  }

  addBlog(blog: BlogService) {
   // return this.http.post(this.baseUrl, blog);
    return this.http.post(`${this.baseUrl}/user/blogs/add`, blog);
    
  }

  deleteBlog(id:number) {
    return this.http.delete(`${this.baseUrl}/user/delete/${id}`);
  }

}
