import {Component, inject, OnInit} from '@angular/core';
import {PostService} from "../../user-services/post-service/post.service";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatChipEditedEvent, MatChipInputEvent} from "@angular/material/chips";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit{

  tags: any[] = []; // it could be of Tags[] type instead of any
  isSubmitting! : boolean;
  addOnBlur = true;
  validateForm!: FormGroup;

  readonly separatorKeycodes = [ENTER, COMMA] as const;
  announcer = inject(LiveAnnouncer);

  constructor(private service: PostService,
              private formBuilder: FormBuilder) {
  }

  add(event: MatChipInputEvent) {
    const value = (event.value || '').trim();
    // add tag
    if (value) {
      this.tags.push({ name: value});
    }
    //remove input value
    event.chipInput!.clear();
  }

  remove(tag: any) {
    const index = this.tags.indexOf(tag);
    if (index >= 0) {
      this.tags.splice(index, 1);
      this.announcer.announce(`Removed${tag}`);
    }
  }

  edit(tag: any, event: MatChipEditedEvent) {
    const value = event.value.trim();
    // remove a tag if no longer has a name
    if (!value) {
      this.remove(tag);
      return;
    }
    //edit existing tag
    const index = this.tags.indexOf(tag);
    if (index >= 0) {
      this.tags[index].name = value;
    }
  }
  ngOnInit() {
    this.validateForm = this.formBuilder.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      tags: ['', Validators.required],
    })
  }

  addPost() {
    console.log(this.validateForm.value);
    this.service.createPost(this.validateForm.value).subscribe(res =>{
      console.log(res);
    })
  }
}
