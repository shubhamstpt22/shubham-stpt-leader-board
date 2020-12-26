import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatSort, MatPaginator} from '@angular/material';
import { PeriodicElement } from 'src/app/model/company.model';
import { LeaderBoardService } from 'src/app/services/leader-board.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.styl']
})





export class HomePageComponent implements OnInit {
  /**************************************Constructor**************************************/

  constructor(
    private leaderBoardService:LeaderBoardService
  ) { }

  /**************************************Properties**************************************/
  public dataLoading = true;
  selected;
  ELEMENT_DATA: PeriodicElement[];
  // ELEMENT_DATA: PeriodicElement[] = [
  //   {companyName: 'Hydrogen', industry: 'Fashion & Apperal', sortBy:this.selected, totalSales: 6875},
  //   {companyName: 'Helium', industry: 'Food & Beverage', sortBy:this.selected, totalSales: 5734},
  //   {companyName: 'Lithium', industry: 'Cosmetics', sortBy:this.selected, totalSales: 4321},
  //   {companyName: 'Beryllium', industry: 'Food & Beverage', sortBy:this.selected, totalSales: 9876},
  //   {companyName: 'Boron', industry: 'Cosmetics', sortBy:this.selected, totalSales: 1123},
  //   {companyName: 'Carbon', industry: 'Fashion & Apperal', sortBy:this.selected, totalSales: 4567},
  //   {companyName: 'Nitrogen', industry: 'Cosmetics', sortBy:this.selected, totalSales: 1234},
  //   {companyName: 'Oxygen', industry: 'Fashion & Apperal', sortBy:this.selected, totalSales: 7777},
  //   {companyName: 'Fluorine', industry: 'Food & Beverage', sortBy:this.selected, totalSales: 6543},
  //   {companyName: 'Neon', industry: 'Cosmetics', sortBy:this.selected, totalSales: 2342},
  // ];
  dataSource;
  displayedColumns: string[] = ['logo','companyName', 'industry', 'sortBy', 'totalSales', 'button'];
  searchText;
  noResult=false;  
  opened=false;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  
  /**************************************Methods**************************************/

  ngOnInit() {
    this.getData();
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public getData(){
    this.dataLoading = true;
    this.leaderBoardService.getCompanyData().subscribe(response => {
      this.ELEMENT_DATA = response;
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      console.log(response);
      this.dataLoading = false;
    }, ()=> {
      console.log('error while fetching data')

    });
  }
  applyFilter(filterValue:string){
    this.noResult = false;
    if(filterValue && filterValue!==''){
      filterValue = filterValue.trim();
      filterValue = filterValue.toLowerCase();
      this.dataSource.filter = filterValue;  
      if(this.dataSource.filteredData.length===0){
        this.noResult = true;
      }  
    }

  }
  customSort(name?, direction?){
    if(!name && !direction){
      this.dataSource.sort = this.sort;
    }
    else{
      this.sort.active = name;
      this.sort.direction = direction;
      this.dataSource.sort = this.sort; 
      let nameList = {'companyName':"Company Name", "industry": "Industry", "totalSales":"Total Sales"};
      for(let i=0; i<this.ELEMENT_DATA.length; i++){
        this.ELEMENT_DATA[i].sortBy = nameList[name];
      }
    }
  }
  pageChanged(){
    this.dataSource.paginator = this.paginator;
  }
  openSidenav(element){
    this.leaderBoardService.setSideNavData(element);
    this.opened = this.opened?false:true;
  }
  closeSidenav(){
    this.opened = false;
  }




}

