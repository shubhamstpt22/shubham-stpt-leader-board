import { Injectable } from '@angular/core';
import { PeriodicElement } from '../model/company.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaderBoardService {
/**************************************Constructor**************************************/
  constructor() { }

/**************************************Properties**************************************/
ELEMENT_DATA: PeriodicElement[] = [
  {companyName: 'Plobal Apps', industry: 'Fashion & Apperal', sortBy:'', totalSales: 6875, addToCart:34455, downloads:1234, userSessions:3456},
  {companyName: 'Hitachi', industry: 'Food & Beverage', sortBy:'', totalSales: 5734, addToCart:12345, downloads:1234, userSessions:3456},
  {companyName: 'ITC', industry: 'Cosmetics', sortBy:'', totalSales: 4321, addToCart:54689, downloads:1234, userSessions:3456},
  {companyName: 'CAMS', industry: 'Food & Beverage', sortBy:'', totalSales: 9876, addToCart:19873, downloads:1234, userSessions:3456},
  {companyName: 'Zydus', industry: 'Cosmetics', sortBy:'', totalSales: 1123, addToCart:34455, downloads:1234, userSessions:3456},
  {companyName: 'Searce', industry: 'Fashion & Apperal', sortBy:'', totalSales: 4567, addToCart:19873, downloads:1234, userSessions:3456},
  {companyName: 'CDSL', industry: 'Cosmetics', sortBy:'', totalSales: 1234, addToCart:54689, downloads:1234, userSessions:3456},
  {companyName: 'TATA', industry: 'Fashion & Apperal', sortBy:'', totalSales: 7777, addToCart:34455, downloads:1234, userSessions:3456},
  {companyName: 'Neosoft', industry: 'Food & Beverage', sortBy:'', totalSales: 6543, addToCart:12345, downloads:1234, userSessions:3456},
  {companyName: 'GM', industry: 'Cosmetics', sortBy:'', totalSales: 2342, addToCart:77777, downloads:1234, userSessions:3456},
  {companyName: 'Plobal Apps', industry: 'Fashion & Apperal', sortBy:'', totalSales: 6875, addToCart:34455, downloads:1234, userSessions:3456},
  {companyName: 'Hitachi', industry: 'Food & Beverage', sortBy:'', totalSales: 5734, addToCart:12345, downloads:1234, userSessions:3456},
  {companyName: 'ITC', industry: 'Cosmetics', sortBy:'', totalSales: 4321, addToCart:54689, downloads:1234, userSessions:3456},
  {companyName: 'CAMS', industry: 'Food & Beverage', sortBy:'', totalSales: 9876, addToCart:19873, downloads:1234, userSessions:3456},
  {companyName: 'Zydus', industry: 'Cosmetics', sortBy:'', totalSales: 1123, addToCart:34455, downloads:1234, userSessions:3456},
  {companyName: 'Plobal Apps', industry: 'Fashion & Apperal', sortBy:'', totalSales: 6875, addToCart:34455, downloads:1234, userSessions:3456},
  {companyName: 'Hitachi', industry: 'Food & Beverage', sortBy:'', totalSales: 5734, addToCart:12345, downloads:1234, userSessions:3456},
  {companyName: 'ITC', industry: 'Cosmetics', sortBy:'', totalSales: 4321, addToCart:54689, downloads:1234, userSessions:3456},
  {companyName: 'CAMS', industry: 'Food & Beverage', sortBy:'', totalSales: 9876, addToCart:19873, downloads:1234, userSessions:3456},
  {companyName: 'Zydus', industry: 'Cosmetics', sortBy:'', totalSales: 1123, addToCart:34455, downloads:1234, userSessions:3456},
  {companyName: 'Plobal Apps', industry: 'Fashion & Apperal', sortBy:'', totalSales: 6875, addToCart:34455, downloads:1234, userSessions:3456},
  {companyName: 'Hitachi', industry: 'Food & Beverage', sortBy:'', totalSales: 5734, addToCart:12345, downloads:1234, userSessions:3456},
  {companyName: 'ITC', industry: 'Cosmetics', sortBy:'', totalSales: 4321, addToCart:54689, downloads:1234, userSessions:3456},
  {companyName: 'CAMS', industry: 'Food & Beverage', sortBy:'', totalSales: 9876, addToCart:19873, downloads:1234, userSessions:3456},
  {companyName: 'Zydus', industry: 'Cosmetics', sortBy:'', totalSales: 1123, addToCart:34455, downloads:1234, userSessions:3456}, 

];
sideNavData: PeriodicElement;

/**************************************Methods**************************************/
public getCompanyData(){
  return of(this.ELEMENT_DATA);
}

public setSideNavData(data){
  this.sideNavData = data;
}

public getSideNavData(){
  return this.sideNavData;
}

}

