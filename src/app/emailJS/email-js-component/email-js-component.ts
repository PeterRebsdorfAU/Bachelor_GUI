import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-email-js-component',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './email-js-component.html',
  styleUrl: './email-js-component.scss'
})
export class EmailJSComponent {

  formData = {
    from_name: '',
    to_email: '',
    message: ''
  };

  sendEmail() {
    emailjs.send(
      'service_fjckfpl',
      'template_xw0fs2w',
      this.formData,
      'Tt6AFaBcOIxidcuDM'
    ).then((result: EmailJSResponseStatus) => {
      console.log('E-mail sendt!', result.text);
      alert('Beskeden blev sendt!');
    }, (error: any) => {
      console.error(' Noget gik galt...', error.text);
      alert('Kunne ikke sende beskeden.');
    });
  }
}
