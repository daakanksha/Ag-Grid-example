import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular ag-grid';

  columnDefs = [
        { headerName: 'Student Name', field: 'name', sortable:true, filter:"agTextColumnFilter" },
        { headerName: 'Roll Number', field: 'rollno', sortable:true, filter:"agNumberColumnFilter" },
        { headerName: 'class', field: 'standard', sortable:true, filter:"agNumberColumnFilter" },
        { headerName: 'Date of birth', field: 'date', sortable:true, filter:true }
    ];

    rowData = [
        { name: 'John', rollno: 1,standard: '10th', date: 'March 02, 2001' },
        { name: 'Jane', rollno: 2, standard: '4th', date: 'April 01, 2004' },
        { name: 'Richard', rollno: 3, standard:'8th', date: 'January 02, 2005' },
        { name: 'Janie', rollno:4, standard: '6th', date: 'March 23, 2001' },
        { name: 'Johnny', rollno:5, standard: '9th', date: 'September 01, 2007' }
    ];
  }
  