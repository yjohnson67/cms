import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Document } from '../../documents/document.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'cms-document-item',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './document-item.component.html',
  styleUrl: './document-item.component.css'
})
export class DocumentItemComponent {
  @Input() document!: Document;
}