import {Component, OnInit} from '@angular/core';
import {PostService} from "../../user-services/post-service/post.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss']
})
export class ViewPostComponent implements OnInit{

  postId: number = this.activatedRoute.snapshot.params["postId"]; // get postId from URL
  post: any;
  constructor( private service: PostService,
               private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.getPostById();
  }

  getPostById() {
    this.service.getPostById(this.postId).subscribe( (res) => {
      this.post = res;
    })
  }
}
