export class UserProfile{

    Username:string;
    FullName:string;
    Email:string;
  
    constructor(Username:string,FullName:string, Email:string)
    {
      this.Username=Username;
      this.FullName=FullName;
      this.Email=Email;    
    }
  };