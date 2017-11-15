import { ToastModule, ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomOptions extends ToastOptions {
  animate = 'fade';
  dismiss = 'auto';
  showCloseButton = true;
  newestOnTop = true;
  enableHTML = true;
}
