import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { PeriodicElement } from 'src/app/model/company.model';
import { LeaderBoardService } from 'src/app/services/leader-board.service';
import { element } from 'protractor';

@Component({
  selector: 'app-company-sidenav',
  templateUrl: './company-sidenav.component.html',
  styleUrls: ['./company-sidenav.component.styl']
})
export class CompanySidenavComponent implements OnInit {
/**************************************Constructor**************************************/

  constructor(
    private leaderBoardService: LeaderBoardService
  ) { }
/**************************************Properties**************************************/
@Input() dataToDisplay:PeriodicElement;
@Output() onClose = new EventEmitter<void>();
// public dataToDisplay:PeriodicElement;
public dataLoading = true;

/**************************************Methods**************************************/

  ngOnInit() {
    // console.log(this.element);
    // this.dataLoading=true;
    // this.dataToDisplay = this.leaderBoardService.getSideNavData();
    // this.dataLoading=false;
  } 


  close(){
    this.onClose.emit();

  }
}

