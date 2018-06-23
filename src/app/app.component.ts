import { Component } from '@angular/core';
import { AppService } from './app.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent {
  title = 'Aubergine Company';
  data: any = [];
 // companyDetails: any = [];
  // companyLogo:any = [];
  // companyTimeStamp = [];
   allComapanyDetails = [];
  symbolArray: any = ['AAPL', 'MSFT', 'IBN', 'V', 'HDB', 'PYPL', 'TSLA', 'FB', 'AXP', 'KO', 'BABA', 'VOD'];
  constructor(private appService: AppService, private http: HttpClient) {
    this.getService();
  }
  ngOnInit() {

  }





  getService() {

    for (let index = 0; index < this.symbolArray.length; index++) {
      let companyDetails = [];
      this.http.get('https://api.iextrading.com/1.0/stock/' + this.symbolArray[index] + '/company')
        .subscribe(

          data => {
            this.data = data
            companyDetails.push(data);
          });
      let companyLogo = [];
      this.http.get('https://api.iextrading.com/1.0/stock/' + this.symbolArray[index] + '/logo')
        .subscribe(

          data => {
            this.data = data
            companyLogo.push(data);
          });
      let companyTimeStamp = [];
      this.http.get('https://api.iextrading.com/1.0/tops?symbols=' + this.symbolArray[index])
        .subscribe(

          data => {
            this.data = data
            companyTimeStamp.push(data);
          });

      let obj = {
        'companyDetails': companyDetails,
        'companyLogo': companyLogo,
        'companyTimeStamp': companyTimeStamp
      }
      this.allComapanyDetails.push(obj);

    }

    // console.log(this.companyDetails);
    // console.log(this.companyLogo);
    // console.log(this.companyTimeStamp);
    console.log((this.allComapanyDetails));


  }
}
