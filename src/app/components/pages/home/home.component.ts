import { Component, OnInit } from '@angular/core';
import { Moment } from 'src/app/Moment';
import { MomentService } from 'src/app/services/moment.service';
import { environment } from 'src/environments/environment.development';

import { format } from 'date-fns';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  baseApiUrl = environment.baseApiUrl;

  allMoments: Moment[] = [];
  moments: Moment[] = [];

  constructor(private momentService: MomentService) {}

  ngOnInit(): void {
    this.momentService.allMoments().subscribe((item) => {
      const data = item.data;
      this.allMoments = data;
      this.moments = data;

      this.allMoments.map((item) => {
        const data = new Date(item.created_at!);
        const dataFormatada = format(data, 'dd/MM/yyyy HH:mm:ss');
        item.created_at = dataFormatada;
      });
    });
  }

  search(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.allMoments = this.moments.filter((moment) =>
      moment.title.toLowerCase().includes(value)
    );
  }
}
