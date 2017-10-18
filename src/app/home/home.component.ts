import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homeTitle = 'Hello World!';
  apiEndpoint = environment.apiEndpoint;

  viewReady = false;

  constructor(private toast: ToastsManager) {}

  ngOnInit() {
    this.viewReady = true;
  }

  showMessage() {
    this.toast.success('a message', 'title');
  }
}
