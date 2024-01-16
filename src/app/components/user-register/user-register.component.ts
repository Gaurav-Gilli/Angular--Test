import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  addUser:FormGroup;
  hobbies: string[] = [];
  message = false;
  isvalid = false;
  constructor(private dataservice:DataServiceService,private fb: FormBuilder) { }

  ngOnInit() {
    this.addUser = this.fb.group({
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
  this.addUser.get('addressType').valueChanges.subscribe(addressType => {
    if (addressType === 'home') {
      this.addUser.get('address1').setValidators(Validators.required);
      this.addUser.get('address2').setValidators(Validators.required);
      this.addUser.get('companyAddress1').clearValidators();
      this.addUser.get('companyAddress2').clearValidators();
    } else if (addressType === 'company') {
      this.addUser.get('companyAddress1').setValidators(Validators.required);
      this.addUser.get('companyAddress2').setValidators(Validators.required);
      this.addUser.get('address1').clearValidators();
      this.addUser.get('address2').clearValidators();

    }

    // Update the validators
    this.addUser.get('address1').updateValueAndValidity();
    this.addUser.get('address2').updateValueAndValidity();
    this.addUser.get('companyAddress1').updateValueAndValidity();
    this.addUser.get('companyAddress2').updateValueAndValidity();
  });
  if (this.addUser.valid) {
    this.isvalid = true;
  }

};
  SaveData(){
    this.addUser.get('hobbiesInput').setValue(this.hobbies.join(', '));
    this.dataservice.saveUserData(this.addUser.value).subscribe((result)=>{
      console.log(result);
    })
    this.message = true;
  }
  getFormControl(controlName: string) {
    return this.addUser.get(controlName);
  }
  isSubmitDisabled() {
    // Check if the form is valid
    return this.addUser.invalid;
  }

  addHobby() {
    const hobby = this.addUser.get('hobbiesInput').value;

    if (hobby && !this.hobbies.includes(hobby)) {
      this.hobbies.push(hobby);
      this.addUser.get('hobbiesInput').setValue('');
    }
  }

  removeHobby(index: number) {
    this.hobbies.splice(index, 1);
  }
}
