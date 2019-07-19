import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AccountDetails } from '../account-details';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  // accountDetails: AccountDetails[];

  dataFields = ['Account ID', 'Name', 'Department', 'Date of Joining', 'Salary'];
  accounts = [
    { id: 10056561, name: 'Abhijit', dept: 'IT', doj: '1st Nov 2015', salary: 10000  },
    { id: 10056562, name: 'Dwaipayan', dept: 'Telecom', doj: '21st Nov 2017', salary: 9500 },
    { id: 10056563, name: 'Srikanta', dept: 'Sales', doj: '23rd Mar 2014', salary: 12500 }
  ];
  accountDetails = [
    {id: 1, name: 'Abhijit'},
    {id: 2, name: 'Arnab'}
  ];

  // @Output() setAccounts = new EventEmitter<AccountDetails[]>();
  @Output() public setAccounts = new EventEmitter<string>();


  sendMessage(name: string) {
    this.setAccounts.emit(name);
  }

  constructor() { }

  ngOnInit() {

  }


}
