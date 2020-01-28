export class Motocycles{

    Id:number;
    Name:string;
    Description:string;
    Year:number;
    Volume:number;
    Cost:number;
    Type:number;
  
    constructor(Id:number,Name:string,Description:string,Year:number, Volume:number, Cost:number, Type:number) 
    {
      this.Id=Id;
      this.Name=Name;
      this.Description=Description
      this.Year=Year;
      this.Volume=Volume;
      this.Cost=Cost;
      this.Type=Type;     
    }
  };