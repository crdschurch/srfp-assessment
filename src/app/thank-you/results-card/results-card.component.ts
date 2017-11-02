import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-results-card',
  templateUrl: './results-card.component.html',
  styleUrls: ['./results-card.component.scss']
})
export class ResultsCardComponent implements OnInit {
  @Input() name: string;
  @Input() score: number;
  public classification: string;
  public contentBlockTitle: string;
  constructor() {}

  ngOnInit() {
    this.classification = this.getClassification(this.score);
    this.setContentBlockTitle(this.classification, this.name);
  }

  private getClassification(score: number): string {
    if (score <= 169) {
      return 'Seeker';
    }
    if (score >= 170 && score <= 249) {
      return 'Receiver';
    }
    if (score >= 250 && score <= 299) {
      return 'Follower';
    } else {
      return 'Producer';
    }
  }

  private setContentBlockTitle(classification: string, category: string) {
    this.contentBlockTitle = 'srfpOutput' + classification + category;
  }
}
