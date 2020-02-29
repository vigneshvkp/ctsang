import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Transaction} from '../model/transaction.model';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private httpClient: HttpClient) {
  }

  saveTransaction(transactions: Transaction[]): Observable<any> {
    console.log('callsed - ' + TransactionService.transactionPostUrl);
    return this.httpClient.post(TransactionService.transactionPostUrl, transactions);
    // return this.httpClient.get('assets/responsemock.json');
  }


  static get transactionPostUrl() {
    return environment.transaction + '/statement';
    // return 'assets/responsemock.json';
  }
}
