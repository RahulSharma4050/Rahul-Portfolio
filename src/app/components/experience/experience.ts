import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Briefcase, Calendar } from 'lucide-angular';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';
import { RESUME_DATA } from '../../data/resume-data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, ScrollAnimationDirective],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {
  experience = RESUME_DATA.experience;
  readonly Briefcase = Briefcase;
  readonly Calendar = Calendar;
}
