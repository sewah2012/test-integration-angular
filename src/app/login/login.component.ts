import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor(private router:Router) { }

  ngOnInit(): void {  }

  email: FormControl = new FormControl('');
  mdp:FormControl = new FormControl('')



  onSubmit(){
    if(this.email.value.trim() == 'admin' && this.mdp.value.trim()=='admin123'){
      this.router.navigate(['affectation'])
    } else{
      alert('email ou mdp not correct!')
    }

    

    // console.log('email: ',this.email.value, 'password: ',this.mdp.value)
  }
  
}
