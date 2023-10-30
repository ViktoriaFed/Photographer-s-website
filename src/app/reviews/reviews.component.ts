import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

constructor (private elRef: ElementRef) {};

   ngOnInit() {

    const panels = this.elRef.nativeElement.querySelectorAll('.panel');

    panels.forEach((panel: any) => {
      panel.addEventListener('click', () => {
        this.removeActiveClasses(); // Call the method using `this`
        panel.classList.add('activeClass');
      });
    });
  }

  removeActiveClasses() {
    const panels = this.elRef.nativeElement.querySelectorAll('.panel');
    panels.forEach((panel: any) => {
      panel.classList.remove('activeClass');
    });
  }
    
  }

