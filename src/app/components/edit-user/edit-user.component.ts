import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  editUser:FormGroup;
  hobbies: string[] = [];
  message = false;
  constructor(private dataservice:DataServiceService,private fb: FormBuilder,private router:ActivatedRoute) { }

  ngOnInit() {
    this.editUser = this.fb.group({
      addressType: ['', Validators.required],
      firstName: ['',[Validators.required, Validators.maxLength(20)]],
      lastName: ['',[Validators.required, Validators.maxLength(20)]],
      email: ['',[Validators.required, Validators.email]],
      address1: ['',Validators.required],
      address2: [''],
      companyAddress1:['',Validators.required],
      companyAddress2:[''],
      hobbiesInput:[['']],
      age:['',[Validators.required, Validators.pattern('^[0-9]+$')]],
      number:['',[Validators.required, Validators.pattern('^[0-9]+$')]],
      location:['',Validators.required],
      image:['']

  })
  console.log(this.router.snapshot.params.id);
  this.dataservice.getUserById(this.router.snapshot.params.id).subscribe((x)=>{
    console.log(x);
    this.editUser = this.fb.group({
      addressType: [''],
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

  })
  })




  this.editUser.get('addressType').valueChanges.subscribe(addressType => {
    if (addressType === 'home') {
      this.editUser.get('address1').setValidators(Validators.required);
      this.editUser.get('address2').setValidators(Validators.required);
      this.editUser.get('companyAddress1').clearValidators();
      this.editUser.get('companyAddress2').clearValidators();
    } else if (addressType === 'company') {
      this.editUser.get('companyAddress1').setValidators(Validators.required);
      this.editUser.get('companyAddress2').setValidators(Validators.required);
      this.editUser.get('address1').clearValidators();
      this.editUser.get('address2').clearValidators();

    }

    // Update the validators
    this.editUser.get('address1').updateValueAndValidity();
    this.editUser.get('address2').updateValueAndValidity();
    this.editUser.get('companyAddress1').updateValueAndValidity();
    this.editUser.get('companyAddress2').updateValueAndValidity();
  });};
  SaveData(){
    this.editUser.get('hobbiesInput').setValue(this.hobbies.join(', '));
    this.dataservice.saveUserData(this.editUser.value).subscribe((result)=>{
      console.log(result);
    })
    this.message = true;
  }
  UpdateData(){
    this.dataservice.updateStudentData(this.router.snapshot.params.id,this.editUser.value).subscribe((x)=>{
      console.log(x)
    })
    this.message= true;
  }
  getFormControl(controlName: string) {
    return this.editUser.get(controlName);
  }
  isSubmitDisabled() {
    // Check if the form is valid
    return this.editUser.invalid;
  }
  addHobby() {
    const hobby = this.editUser.get('hobbiesInput').value;

    if (hobby && !this.hobbies.includes(hobby)) {
      this.hobbies.push(hobby);
      this.editUser.get('hobbiesInput').setValue('');
    }
  }

  removeHobby(index: number) {
    this.hobbies.splice(index, 1);
  }

}
