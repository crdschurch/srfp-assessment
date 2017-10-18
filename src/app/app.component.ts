import { Component, ViewContainerRef } from '@angular/core';
import { environment } from '../environments/environment';
import { ToastModule, ToastsManager } from 'ng2-toastr/ng2-toastr';

import {
  Angulartics2Module,
  Angulartics2Segment,
  Angulartics2GoogleTagManager,
  Angulartics2GoogleAnalytics
} from 'angulartics2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  constructor(
    private vRef: ViewContainerRef,
    private toastr: ToastsManager,
    private angulartics2GoogleTagManager: Angulartics2GoogleTagManager,
    private angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
    private angulartics2Segment: Angulartics2Segment
  ) {
    toastr.setRootViewContainerRef(vRef);
  }
}
