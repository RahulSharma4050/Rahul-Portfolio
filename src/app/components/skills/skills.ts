import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Cpu } from 'lucide-angular';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';
import { RESUME_DATA } from '../../data/resume-data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, ScrollAnimationDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {
  skillCategories = RESUME_DATA.skills;
  readonly Cpu = Cpu;
}
