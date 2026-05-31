import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Document } from '../document.model';
import { DocumentItemComponent } from '../../document/document-item/document-item.component';
import { RouterLink } from '@angular/router';
import { DocumentsService } from '../documents.service';

@Component({
  selector: 'cms-document-list',
  standalone: true,
  imports: [CommonModule, DocumentItemComponent, RouterLink],
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.css'
})
export class DocumentListComponent {
  documents: Document[] = [];

  constructor(private documentsService: DocumentsService) {
    this.documents = this.documentsService.getDocuments();
  }


}