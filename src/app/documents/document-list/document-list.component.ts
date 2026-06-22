import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { Document } from '../document.model';
import { DocumentsService } from '../documents.service';
import { DocumentItemComponent } from '../../document/document-item/document-item.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'cms-document-list',
  standalone: true,
  imports: [CommonModule, DocumentItemComponent, RouterLink],
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.css'
})
export class DocumentListComponent implements OnInit, OnDestroy {
  documents: Document[] = [];
  subscription!: Subscription;

  constructor(private documentsService: DocumentsService) {}

  ngOnInit() {
      this.subscription = this.documentsService.documentListChangedEvent.subscribe(
      (documentsList: Document[]) => {
        console.log('Documents received:', documentsList); 
        this.documents = documentsList;
      }
    );

    this.documentsService.getDocuments();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}