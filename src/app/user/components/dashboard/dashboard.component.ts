import {Component, OnInit} from '@angular/core';
import {PostService} from "../../user-services/post-service/post.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  posts: any[] = [];
  pageNum: number = 0;
  total!: number;
  constructor(private service: PostService) {
  }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.service.getAllPosts(this.pageNum).subscribe((res: any) => {
      console.log(res);
      this.posts = res.content;
      this.total = res.totalPages * 5;
    })
  }

  //The current page index defaults to 0, but can be explicitly set via pageIndex.
  pageIndexChange(event: any) {
    this.pageNum = event.pageIndex;
    this.getAllPosts();
  }
}
