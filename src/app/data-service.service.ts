import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

export interface data{
  id:number,
  firstName:string,
  lastName:string,
  image:string,
  age:string,
  address1:string,
  address2:string,
  companyAddress2:string,
  companyAddress1:string,
  number:string,
  location:string,
  hobbiesInput:string
}

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  url = 'http://localhost:3000/posts'
  users:any;
  constructor(private http:HttpClient) { }
  getAllUsers(){
    return this.http.get(this.url);
  }
  saveUserData(data){
    return this.http.post(this.url,data);
  }
  getUserById(id:any){
    return this.http.get(`${this.url}/${id}`)
  }
  updateUserData(id:any,data:any){
    return this.http.put(`${this.url}/${id}`,data)
  }

}
