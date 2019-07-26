import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {
  public dataSource: Person[];
  public displayedColumns: string[];
  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.getPeopleData();
    this.displayedColumns = ['first_name', 'last_name', 'email'];
  }

  private getPeopleData(): void {
    this.personService.getPeople().subscribe(people => {
      this.dataSource = people;
    });
  }

}
