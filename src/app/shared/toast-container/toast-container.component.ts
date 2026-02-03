import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-toast-container',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="fixed top-4 right-4 z-[100] space-y-2 max-w-md">
      @for (toast of toastService.toasts(); track toast.id) {
        <div 
          class="toast-animation rounded-lg shadow-lg p-4 flex items-center space-x-3 min-w-[300px]"
          [class.bg-green-500]="toast.type === 'success'"
          [class.bg-red-500]="toast.type === 'error'"
          [class.bg-blue-500]="toast.type === 'info'"
          role="alert"
        >
          <!-- Icon -->
          @if (toast.type === 'success') {
            <svg class="w-6 h-6 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
          }
          @if (toast.type === 'error') {
            <svg class="w-6 h-6 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          }
          @if (toast.type === 'info') {
            <svg class="w-6 h-6 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          }

          <!-- Message -->
          <span class="text-white font-medium flex-1">{{ toast.message }}</span>

          <!-- Close Button -->
          <button
            (click)="toastService.remove(toast.id)"
            class="text-white hover:text-gray-200 transition-colors flex-shrink-0"
            aria-label="Close notification"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      }
    </div>
  `,
  styles: []
})
export class ToastContainerComponent {
  toastService = inject(ToastService);
}
