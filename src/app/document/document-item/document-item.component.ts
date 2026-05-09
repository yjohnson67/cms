import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Document } from '../../documents/document.model';

@Component({
  selector: 'cms-document-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './document-item.component.html',
  styleUrl: './document-item.component.css'
})
export class DocumentItemComponent {
  @Input() document!: Document;
}