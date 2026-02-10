import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, Mail, MapPin, Phone, Linkedin, Github, CodeXml } from 'lucide-angular';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { environment } from '../../../environments/environment';
import { RESUME_DATA } from '../../data/resume-data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  resumeData = RESUME_DATA;

  name: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';

  isLoading: boolean = false;
  currentYear = new Date().getFullYear();

  readonly Mail = Mail;
  readonly Phone = Phone;
  readonly Linkedin = Linkedin;
  readonly Github = Github;
  readonly LeetCode = CodeXml;

  async sendEmail() {
    if (!this.name || !this.email || !this.message) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill in all required fields!',
        confirmButtonColor: '#58a6ff'
      });
      return;
    }

    this.isLoading = true;

    try {
      const templateParams = {
        from_name: this.name,
        from_email: this.email,
        subject: this.subject,
        message: this.message,
        to_name: 'Rahul Sharma'
      };

      await emailjs.send(
        environment.emailjs.serviceId,
        environment.emailjs.templateId,
        templateParams,
        environment.emailjs.publicKey
      );

      Swal.fire({
        title: 'Thank You!',
        text: 'Your query has been submitted successfully.',
        icon: 'success',
        confirmButtonColor: '#58a6ff',
        background: '#161b22',
        color: '#e6edf3'
      });

      this.resetForm();
    } catch (error) {
      console.error('EmailJS Error:', error);
      Swal.fire({
        icon: 'error',
        title: 'Failed to send',
        text: 'Something went wrong. Please try again later.',
        confirmButtonColor: '#58a6ff'
      });
    } finally {
      this.isLoading = false;
    }
  }

  resetForm() {
    this.name = '';
    this.email = '';
    this.subject = '';
    this.message = '';
  }
}
