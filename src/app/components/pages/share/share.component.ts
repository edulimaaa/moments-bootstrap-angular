import { Component } from '@angular/core';
import { Moment } from 'src/app/Moment';
import { MomentService } from 'src/app/services/moment.service';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css'],
})
export class ShareComponent {
  textBtn: string = 'Compartilhar!';

  constructor(
    private momentService: MomentService,
    private router: Router,
    private messageService: MessageService
  ) {}

  async createHandler(moment: Moment) {
    const formData = new FormData();
    formData.append('title', moment.title);
    formData.append('description', moment.description);
    formData.append('image', moment.image);

    await this.momentService.createMoment(formData).subscribe();

    setTimeout(() => {
      this.router.navigate(['/']);
    }, 800);

    this.messageService.add(
      'Momento adicionado com sucesso!',
      'alert alert-success alert-dismissible fade show'
    );
  }
}
