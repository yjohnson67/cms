import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { environment } from '../../environments/environment';

import { Document } from './document.model';


@Injectable({
  providedIn: 'root'
})
export class DocumentsService {
  documentListChangedEvent = new Subject<Document[]>();

  documents: Document[] = [];
  maxDocumentId: number = 0;

  private firebaseUrl = environment.firebaseUrl;

 constructor(private http: HttpClient) {
  this.getDocuments();
}

  getDocuments() {
  this.http.get<{ [key: string]: Document }>(
    `${this.firebaseUrl}/documents.json`
  ).subscribe((responseData) => {

    console.log('Firebase documents:', responseData);

    this.documents = responseData
    ? Object.values(responseData)
    : [];

    this.maxDocumentId = this.getMaxId();
    this.documentListChangedEvent.next(this.documents.slice());
  });
}

  getDocument(id: string): Document | null {
    for (let document of this.documents) {
      if (document.id === id) {
        return document;
      }
    }

    return null;
  }

  getMaxId(): number {
    let maxId = 0;

    for (let document of this.documents) {
      const currentId = parseInt(document.id);

      if (currentId > maxId) {
        maxId = currentId;
      }
    }

    return maxId;
  }

  addDocument(newDocument: Document) {
    if (!newDocument) {
      return;
    }

    this.maxDocumentId++;
    newDocument.id = this.maxDocumentId.toString();

    this.documents.push(newDocument);

     this.storeDocuments();
  }

  updateDocument(originalDocument: Document, newDocument: Document) {
    if (!originalDocument || !newDocument) {
      return;
    }

    const pos = this.documents.indexOf(originalDocument);

    if (pos < 0) {
      return;
    }

    newDocument.id = originalDocument.id;
    this.documents[pos] = newDocument;

    this.storeDocuments();
  }

  deleteDocument(document: Document) {
    if (!document) {
      return;
    }

    const pos = this.documents.indexOf(document);

    if (pos < 0) {
      return;
    }

    this.documents.splice(pos, 1);

    this.storeDocuments();
  }

  storeDocuments() {
  this.http.put(
    `${this.firebaseUrl}/documents.json`,
    this.documents
  ).subscribe(() => {
    this.documentListChangedEvent.next(this.documents.slice());
  });
}
}