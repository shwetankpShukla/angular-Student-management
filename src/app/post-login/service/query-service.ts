
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject,Subject } from "rxjs";
import { baseURL } from "src/app/shared/constant/common-constant";


@Injectable({
    providedIn:'root'
})
export class QueryService{

    queryObj =new BehaviorSubject<any>(0);
    baseURL :String;
    constructor(private httpClient:HttpClient){
        this.baseURL=baseURL;
        
    }

    getAllQuery(){
        return this.httpClient.get(baseURL+'query/');
    }

    submitQuery(formData:any){
        return this.httpClient.post(baseURL+"query/",formData);
    }

    viewQuery(id: number){
        return this.httpClient.get(baseURL+'query/'+id);
     }

}