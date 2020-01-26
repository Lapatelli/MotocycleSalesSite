export class Motocycles{

    Name:string;
    Year:number;
    Volume:number;
    Cost:number;
    Type:string;
  
    constructor(Name:string,Year:number, Volume:number, Cost:number, Type:string) //Name:string,Year:string, Volume:string, Cost:string, Type:string
    {
      this.Name=Name;
      this.Year=Year;
      this.Volume=Volume;
      this.Cost=Cost;
      this.Type=Type;     
    }
  };