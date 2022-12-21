import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  userEmail: string = "name@example.com";

  constructor(private router: Router) {}

  OnContinue(): void {
    this.router.navigateByUrl('facesnaps');
  }

  OnSubmitForm(form: NgForm):void {
    console.log(form.value);
  }
}
