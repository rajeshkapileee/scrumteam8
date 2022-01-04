import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isLoading;
  message: any;
  error: string;

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(form : NgForm){
    console.log(form);
    this.isLoading=true;
    this.auth.onRegister(form.value).subscribe((res)=>{
      this.isLoading=false;
      console.log(res);
      this.message=res.message;
    },err=>{
      this.isLoading=false;
      console.log(err);
      this.error="something went wrong";
    

    })

    

  }

}
