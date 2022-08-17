import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Add Athlete App';
  name = "";
  sport = "";
  active = true;

  athletes = [
    {
      name: "Bill Russell",
      sport: "NBA Basketball",
      active: false
    },
    {
      name: "Gabriela Sabatini",
      sport: "WTA Tennis",
      active: false
    },
    {
      name: "Simone Biles",
      sport: "Olympic Gymnast",
      active: true
    }
  ];

  
  onSendAthlete() {
    let newAthlete = {
      name: this.name,
      sport: this.sport,
      active: this.active
    }
    console.log("button clicked!")
    this.athletes.push(newAthlete);
    console.log("pushed to athletes: ", this.athletes)
  }
}
