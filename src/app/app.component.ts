import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';

import { DocumentsComponent } from './documents/documents.component';
import { MessageListComponent } from './messages/message-list/message-list.component';
import { ContactsComponent } from './contacts/contacts.component';

@Component({
  selector: 'cms-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    DocumentsComponent,
    MessageListComponent,
    ContactsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  selectedFeature: string = 'contacts';

  switchView(selectedFeature: string) {
    this.selectedFeature = selectedFeature;
  }
}