import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { PersonService } from './services/person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isPersonDetailsView:boolean;

  constructor(public personService:PersonService, private router:Router, private route:ActivatedRoute) {}

  ngOnInit() {
    this.subscribeToRoutes();
  }
  
  private subscribeToRoutes():void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects.split("/");
        if (url[1] == "list") {
          this.isPersonDetailsView = false;
        }
        else if (url[1] == "person") {
          this.isPersonDetailsView = true;
        }
      }
    })
  }

  handleBackButtonClick(): void {
    this.router.navigate(["list"]);
  }


}
