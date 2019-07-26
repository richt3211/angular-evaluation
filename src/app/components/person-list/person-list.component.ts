import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Person } from 'src/app/models/person.model';
import { PersonService } from 'src/app/services/person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {
  public dataSource: Person[];
  public displayedColumns: string[];
  constructor(private personService: PersonService, private router: Router) { }

  ngOnInit() {
    this.getPeopleData();
    this.displayedColumns = ['first_name', 'last_name', 'email'];
  }

  private getPeopleData(): void {
    this.personService.getPeople().subscribe(people => {
      this.dataSource = people;
    });
  }

  public handleRowClick(person: Person): void {
    this.router.navigate(['person', person.id]);
    this.personService.person = `${person.first_name} ${person.last_name}`;
  }

}
