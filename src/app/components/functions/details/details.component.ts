import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';

import { MomentService } from 'src/app/services/moment.service';
import { CommentService } from 'src/app/services/comment.service';
import { MessageService } from 'src/app/services/message.service';

import { environment } from 'src/environments/environment.development';

import { Moment } from 'src/app/Moment';
import { Comment } from 'src/app/Comment';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  moment?: Moment;
  baseApiUrl = environment.baseApiUrl;
  commentForm!: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private momentService: MomentService,
    private router: Router,
    private messageService: MessageService,
    private commentService: CommentService
  ) {}

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    this.momentService
      .getMoments(id)
      .subscribe((item) => (this.moment = item.data));

    this.commentForm = new FormGroup({
      text: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
    });
  }

  onDeleteMoment() {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    this.momentService.deleteMoment(id).subscribe();

    setTimeout(() => {
      this.router.navigate(['/']);
    }, 800);

    this.messageService.add(
      'Momento excluído com sucesso!',
      'alert alert-danger alert-dismissible fade show'
    );
  }

  async onSubmit(formDirective: FormGroupDirective) {
    if (this.commentForm.invalid) {
      return;
    }

    const data: Comment = this.commentForm.value;

    data.momentId = Number(this.moment!.id);

    await this.commentService
      .createComment(data)
      .subscribe((item) => this.moment?.comments?.push(item.data));

    this.commentForm.reset();

    formDirective.resetForm();
  }
}
