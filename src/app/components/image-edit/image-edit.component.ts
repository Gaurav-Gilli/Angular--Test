import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-image-edit',
  templateUrl: './image-edit.component.html',
  styleUrls: ['./image-edit.component.css']
})
export class ImageEditComponent implements OnInit {
  editPhoto:FormGroup;
  message = false;

  constructor(private dataService:DataServiceService,private fb:FormBuilder, private router:ActivatedRoute) { }
  userData:any = [];
  ngOnInit() {
    
    this.dataService.getUserById(this.router.snapshot.params.id).subscribe((x)=>{
      console.log(x);
      this.userData = x;
    })

    this.editPhoto = this.fb.group({
      image:['',[Validators.required]]
    });
    this.dataService.getUserById(this.router.snapshot.params.id).subscribe((x)=>{
      console.log(x);
      this.editPhoto = this.fb.group({
        addressType: x['addressType'],
      firstName: x['firstName'],
      lastName: x['lastName'],
      email: x['email'],
      address1: x['address1'],
      address2: x['address2'],
      companyAddress1:x['companyAddress1'],
      companyAddress2:x['companyAddress2'],
      hobbiesInput:x['hobbiesInput'],
      age:x['age'],
      number:x['number'],
      location:x['location'],
        image:x['image']

      })});
  }
  UpdateData(){
    if(this.isFormValid){
    this.dataService.updateUserData(this.router.snapshot.params.id,this.editPhoto.value).subscribe((x)=>{
      console.log(x)
    })
    this.message = true
  }
  }
  onImageChange(event: any): void {
    const inputElement = event.target;
    if (inputElement.files.length > 0) {
      const file = inputElement.files[0];
      this.convertImageToBase64(file);
  }
  }
  convertImageToBase64(file: File): void {
    console.log("happe")
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.editPhoto.patchValue({ image: e.target.result });
    };
    reader.readAsDataURL(file);
  }
  
    
  isFormValid():boolean{
    return this.editPhoto.valid;
  }
  getFormControl(controlName: string) {
    return this.editPhoto.get(controlName);
  }

}
