import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Document } from '../document.model';
import { DocumentItemComponent } from '../../document/document-item/document-item.component';

@Component({
  selector: 'cms-document-list',
  standalone: true,
  imports: [CommonModule, DocumentItemComponent],
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.css'
})
export class DocumentListComponent {

  @Output() selectedDocumentEvent = new EventEmitter<Document>();

  documents: Document[] = [
    new Document(
      '1',
      'CIT 260 - Object-Oriented Programming',
      'Learn OOP concepts',
      'https://byui.edu',
      null
    ),
    new Document(
      '2',
      'CIT 366 - Full Web Stack Development',
      'Learn Angular and Node',
      'https://byui.edu',
      null
    ),
    new Document(
      '3',
      'CIT 425 - Data Warehousing',
      'Learn database systems',
      'https://byui.edu',
      null
    ),
    new Document(
      '4',
      'CIT 460 - Enterprise Development',
      'Learn enterprise apps',
      'https://byui.edu',
      null
    )
  ];

  onSelectedDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }
}