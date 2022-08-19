import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 
  requiredForm=new FormGroup({
     
    email:new FormControl(),
    password:new FormControl()
  });
  constructor(private fb: FormBuilder, private route:Router) {
   
     this.myForm();
  }
  
  //Create required field validator for name
  myForm() {
     this.requiredForm = this.fb.group({
     
     email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
     password: ['', [Validators.required, Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')]]  
           
     });
  }
  onSubmit(){
    alert("login successsfull")
    //  window.location.reload();
    if(!this.requiredForm.valid){
          return;
        }
       window.location.reload();
       this.route.navigate(['/profile']);
      
        
  }
  
  ngOnInit()
  {
  
  }
  }