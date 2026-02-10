import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ExternalLink, Github, Folder } from 'lucide-angular';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';
import { RESUME_DATA } from '../../data/resume-data';
import { Project } from '../../models/resume.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, ScrollAnimationDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  projects = RESUME_DATA.projects;

  readonly ExternalLink = ExternalLink;
  readonly Github = Github;
  readonly Folder = Folder;

  get featuredProjects(): Project[] {
    return this.projects.filter(p => p.featured);
  }

  get otherProjects(): Project[] {
    return this.projects.filter(p => !p.featured);
  }
}
