import { Component, OnInit, TemplateRef } from '@angular/core';
import { PostsService } from '../posts.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  posts = this.postsService.getPosts();
  modalRef: BsModalRef;
  constructor(
    private postsService: PostsService,
    private modalService: BsModalService
  ) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
  }
  ngOnInit(): void {}
}
