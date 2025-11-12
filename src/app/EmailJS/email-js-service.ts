import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class EmailJsService {
  private readonly SERVICE_ID = 'service_fjckfpl';
  private readonly TEMPLATE_ID = 'template_xw0fs2w';
  private readonly PUBLIC_KEY = 'Tt6AFaBcOIxidcuDM';

  sendChecklistItemNotification(
    toEmail: string,
    itemDescription: string,
    checklistName: string,
    subChecklistName: string,
    bundleReleaseName: string,
    completedBy: string
  ): Promise<EmailJSResponseStatus> {
    const templateParams = {
      to_email: toEmail,
      from_name: completedBy,
      message: `Checklist item completed:

      Bundle Release: ${bundleReleaseName}
      Checklist: ${checklistName}
      Sub-checklist: ${subChecklistName}
      Item: ${itemDescription}

      This item has been marked as complete.`,
            subject: `Checklist Update: ${itemDescription}`,
            bundle_name: bundleReleaseName,
            checklist_name: checklistName,
            subchecklist_name: subChecklistName,
            item_description: itemDescription
          };

          return emailjs.send(
            this.SERVICE_ID,
            this.TEMPLATE_ID,
            templateParams,
            this.PUBLIC_KEY
          );
  }
}
