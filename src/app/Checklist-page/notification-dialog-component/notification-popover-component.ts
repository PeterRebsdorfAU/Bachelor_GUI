import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {CommonModule, NgIf} from '@angular/common';
import { EmailJsService } from '../../EmailJS/email-js-service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-notification-popover-component',
  standalone: true,
  imports: [FormsModule, NgIf, MatIconModule, MatButtonModule, CommonModule],
  templateUrl: './notification-popover-component.html',
  styleUrls: ['./notification-popover-component.scss']
})
export class NotificationPopoverComponent {
  @Input() isVisible = false;
  @Input() itemDescription = '';
  @Input() checklistName = '';
  @Input() subChecklistName = '';
  @Input() bundleReleaseName = '';
  @Output() closed = new EventEmitter<void>();

  recipientEmail = '';
  senderName = '';
  sending = false;
  showSuccess = false;
  showError = false;
  isExpanded = false;

  constructor(private emailService: EmailJsService) {}

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }

  close() {
    this.resetForm();
    this.closed.emit();
  }

  async sendNotification() {
    if (!this.recipientEmail || !this.senderName) {
      return;
    }

    this.sending = true;
    this.showSuccess = false;
    this.showError = false;

    try {
      await this.emailService.sendChecklistItemNotification(
        this.recipientEmail,
        this.itemDescription,
        this.checklistName,
        this.subChecklistName,
        this.bundleReleaseName,
        this.senderName
      );

      this.showSuccess = true;
      setTimeout(() => this.close(), 2000);
    } catch (error) {
      console.error('Failed to send email:', error);
      this.showError = true;
      this.sending = false;
    }
  }

  private resetForm() {
    this.recipientEmail = '';
    this.senderName = '';
    this.sending = false;
    this.showSuccess = false;
    this.showError = false;
    this.isExpanded = false;
  }
}
