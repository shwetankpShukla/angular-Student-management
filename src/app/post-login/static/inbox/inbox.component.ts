import { Component, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { QueryService } from '../../service/query-service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

  displayedColumns: string[] = [ 'id', 'firstName', 'lastName','mobile','email','subject'];
  dataSource:any;

  constructor(private queryService:QueryService) { 
    
  }

  ngOnInit(): void {
    this.queryService.getAllQuery().subscribe((res:any)=>{
      this.dataSource = res;
    })
  }

  

}
