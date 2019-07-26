import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { PersonService } from 'src/app/services/person.service';
import { Card } from 'src/app/models/person.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent implements OnInit {
  private id:number;
  private route:ActivatedRouteSnapshot;
  public cardData: Card[];
  constructor(
    private activatedRoute:ActivatedRoute, 
    private personService:PersonService,
    private router:Router,
    public dialog: MatDialog
  ) { 
    this.route = activatedRoute.snapshot;
  }

  ngOnInit() {
    this.getIdFromRoute();
    this.getCardData();
    this.handleInitialRoute();
  }
  
  private handleInitialRoute(): void {
    if (!this.personService.person || this.personService.person == '') {
      // this.personService.isPersonDetailsView = false;
      this.router.navigate(["list"]);
    }
    else {
      // this.personService.isPersonDetailsView = true;
    }
  }

  private getIdFromRoute():void {
    this.id = +this.route.params["id"];
  }

  private getCardData():void {
    this.personService.getPersonCards(this.id).subscribe(data => {
      this.cardData = data;
      console.log(this.cardData);
    })
  }

  public handleAddCardClick():void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '300px',
    })

    dialogRef.afterClosed().subscribe(cardNumber => {
      if (cardNumber) {
        this.personService.savePersonCardNumber(this.id, cardNumber).subscribe(card => {
          this.cardData.push(card);
        })
      }
    })
  }

}
