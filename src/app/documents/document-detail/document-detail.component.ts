import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, Params, RouterLink } from '@angular/router';

import { Document } from '../document.model';
import { DocumentsService } from '../documents.service';

@Component({
  selector: 'cms-document-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './document-detail.component.html',
  styleUrl: './document-detail.component.css'
})
export class DocumentDetailComponent implements OnInit {
  document!: Document | null;
  id!: string;

  constructor(
    private documentService: DocumentsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.document = this.documentService.getDocument(this.id);
    });
  }

  onDelete() {
    if (!this.document) {
      return;
    }

    this.documentService.deleteDocument(this.document);
    this.router.navigate(['/documents']);
  }

  onView() {
    if (!this.document || !this.document.url) {
      return;
    }

    window.open(this.document.url, '_blank');
  }
}