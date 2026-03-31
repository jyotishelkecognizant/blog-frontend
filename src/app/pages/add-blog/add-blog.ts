import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BlogService } from '../../services/blog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-blog',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './add-blog.html',
  styleUrl: './add-blog.css',
})
export class AddBlog {
   blog:any={};

  constructor(private service:BlogService,
              private router:Router){}

  save(){
    // this.service.addBlog(this.blog).subscribe(()=>{
    //   this.router.navigate(['/home']);
    // });
   
    this.service.addBlog(this.blog).subscribe(() => {
      this.router.navigate(['/home']);   // go back to home
    });
  

  }

}
