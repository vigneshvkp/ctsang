import {Component, OnInit, ViewChild} from '@angular/core';
import {Transaction} from '../../model/transaction.model';
import {TransactionService} from '../../service/transaction.service';
import {Result} from '../../model/result.model';


@Component({
  selector: 'app-transation',
  templateUrl: './transation.component.html',
  styleUrls: ['./transation.component.scss']
})
export class TransationComponent implements OnInit {

  transaction: Transaction[] = [];
  result: Result;
  autoResize = true;
  file: any;

  constructor(private transactionService: TransactionService) {
    this.transaction.push(new Transaction(123, 'A123', 'description', 0, +1, 1));
  }

  ngOnInit() {
this.result = new Result();
this.uploadFile(null);
  }

  uploadFile($event: any) {
    console.log(this.transaction);
    this.transactionService.saveTransaction(this.transaction).subscribe(res => {
      this.result = res;
      console.log('result - ', this.result);
    });
  }

  previewFile(e: any) {
    this.file = e.target.files[0];
    this.uploadDocument(this.file);
  }

  uploadDocument(file) {
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.transaction = JSON.parse(fileReader.result.toString());
    };
    fileReader.readAsText(this.file);
  }
}
