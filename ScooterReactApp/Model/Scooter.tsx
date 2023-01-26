export class Scooter {
  Name: String;
  Location: String;
  constructor(Name: String, Location: String) {
    this.Name = Name;
    this.Location = Location;
  }

  ToString(): String {
    return 'Scootername is ' + this.Name + ' | Location is ' + this.Location;
  }
}

// interface ScooterProps {
//     Name : String
//     Location : String
//   }

// const ScooterToString = (Props : ScooterProps) => {
//     return "Scootername is " + Props.Name + " | Location is " + Props.Location;
// }
