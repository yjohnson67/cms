import { Injectable, EventEmitter } from '@angular/core';
import { Contact } from './contact.model';
import { MOCKCONTACTS } from './MOCKCONTACTS';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contactSelectedEvent = new EventEmitter<Contact>();

  contacts: Contact[] = MOCKCONTACTS;

  getContacts(): Contact[] {
    return this.contacts;
  }

  getContact(id: string): Contact {
    return this.contacts.find(contact => contact.id === id)!;
  }

}