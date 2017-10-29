import {Component} from '@angular/core';

@Component({
  selector: 'dash-table',
  styleUrls: ['./table.css'],
  templateUrl: './table.html'
})
export class Table {
  rows = [];
  loadingIndicator: boolean = true;
  editing = {};

  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];

  constructor() {
    this.fetch((data) => {
      this.rows = data;
      setTimeout(() => { this.loadingIndicator = false; }, 1500);
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/company.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }
  updateValue(event, cell, cellValue, row) {
    this.editing[row.$$index + '-' + cell] = false;
    this.rows[row.$$index][cell] = event.target.value;
    console.log(event, event.target.value);
  }
}

