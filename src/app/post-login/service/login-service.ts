import { baseURL,baseSCURL,CREDENTIALS } from "src/app/shared/constant/common-constant";
import { Injectable } from "@angular/core";
import { BehaviorSubject,Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";


@Injectable({
    providedIn:"root"  
})
export class LoginService{

    loginObj= new BehaviorSubject<any>(0);
    baseURL: String;
    baseSCURL:String;
    credentials: any = [];
    loginForm :any;

    constructor(private httpClient:HttpClient){        
        this.baseURL=baseURL;
        this.baseSCURL =baseSCURL;
        this.credentials=CREDENTIALS
    }

    loginWithSecureApplication(userId: String,pwd :String){
        console.log(".............")
        this.loginForm =new loginForm(userId,pwd);
        
        return this.httpClient.post(baseSCURL+'login',this.loginForm);
    }   


    loginWithNormalAuth(userId: String,pwd :String){
        this.loginForm =new loginForm(userId,pwd);
        console.log(".............API")
                     
        console.log( this.httpClient.post('http://localhost:8080/api/v1/user/login',this.loginForm));
        this.httpClient.get(baseURL+'menu/')
            
        return this.httpClient.post(baseURL+'user/login',this.loginForm);
    }

    loginWithStubData(userId: String,pwd :String){
        const cred = this.credentials.find((user: any) =>
          user.userId == userId &&
          user.password == pwd
        );
        if (cred) {
          return true;
        }
        return false;
    }


}

export class loginForm{

    userName:String;
    userId:String;
    password:String;
    constructor( userName:String, password:String){
        this.userName =userName;
        this.userId = userName;
        this.password =password;
    }
}