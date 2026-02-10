import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, GraduationCap, Calendar, MapPin } from 'lucide-angular';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';
import { RESUME_DATA } from '../../data/resume-data';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, ScrollAnimationDirective],
  templateUrl: './education.html',
  styleUrl: './education.scss'
})
export class Education {
  education = RESUME_DATA.education;
  achievements = RESUME_DATA.achievements;

  readonly GraduationCap = GraduationCap;
  readonly Calendar = Calendar;
  readonly MapPin = MapPin;
}
