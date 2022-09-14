import { Injectable } from "@angular/core";
import { BehaviorSubject,Subject } from "rxjs";
import { baseURL } from "src/app/shared/constant/common-constant";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn:"root"  
})
export class MenuService{

    menuObj =new BehaviorSubject<any>(0);
    baseURL :String;
    
    constructor(private httpClient:HttpClient){
        this.baseURL=baseURL;
        
    }


    getMenuList(){
        return this.httpClient.get(baseURL+'menu/');
    }

}
