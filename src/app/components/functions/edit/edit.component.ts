import { Component, OnInit } from '@angular/core';
import { Moment } from 'src/app/Moment';
import { MomentService } from 'src/app/services/moment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  textBtn = 'Editar';
  moment!: Moment;

  constructor(
    private momentService: MomentService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    this.momentService.getMoments(id).subscribe((item) => {
      this.moment = item.data;
    });
  }

  async editHandler(moment: Moment) {
    const id = this.moment.id;
    const formData = new FormData();

    formData.append('title', moment.title);
    formData.append('description', moment.description);
    formData.append('image', moment.image);

    await this.momentService.editMoment(id!, formData).subscribe();

    setTimeout(() => {
      this.router.navigate(['/']);
    }, 800);

    this.messageService.add(
      'Momento editado com sucesso!',
      'alert alert-success alert-dismissible fade show'
    );
  }
}
