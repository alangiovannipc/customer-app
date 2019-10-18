import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  AngularFirestoreDocument,
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { ICustomer } from '@customer/interfaces/customer.interface';
import { config } from 'app/firebase/config';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers: AngularFirestoreCollection<ICustomer>;
  private customerDoc: AngularFirestoreDocument<ICustomer>;

  constructor(private db: AngularFirestore) {
    // Get the tasks collection
    this.customers = db.collection<ICustomer>(config.collection_endpoint);
  }

  saveCustomer(customer: ICustomer): Promise<any> {
    console.log('CustomerService saveCustomer');
    return new Promise<any>((resolve, reject) => {
      this.customers.add(customer);
      resolve();
    });
  }

  listCustomer(): Observable<any> {
    console.log('listCustomer');
    return this.customers.snapshotChanges();
  }

  getCustomer($id): Promise<any> {
    console.log('getCustomer');
    console.log(this.customers.doc($id));

    return new Promise((resolve, reject) => {

      this.customers.doc($id).ref.get().then(function(doc) {
        if (doc.exists) {
          console.log('Document data:', doc.data());
          resolve(doc.data());
        } else {
          console.log('No such document!');
          resolve({});
        }
      }).catch(function(error) {
        console.log('Error getting document:', error);
        reject(error);
      });

    });

  }



}
