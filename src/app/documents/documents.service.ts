import { Injectable } from '@angular/core';
import { Document } from './document.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  documents: Document[] = MOCKDOCUMENTS;

  getDocuments() {
    return this.documents;
  }

  getDocument(id: string) {
    for (let document of this.documents) {
      if (document.id === id) {
        return document;
      }
    }

    return null;
  }
}