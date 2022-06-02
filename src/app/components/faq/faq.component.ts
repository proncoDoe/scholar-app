import { Component, ViewChild,OnInit } from '@angular/core';
import { IonAccordionGroup } from '@ionic/angular';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit {

  @ViewChild(IonAccordionGroup) accordionGroup: IonAccordionGroup;

  constructor() { }
  closeAccordion() {
    this.accordionGroup.value = '';

  }

  toggleSection() {
    this.accordionGroup.value = 'Languages';
  }

  ngOnInit() {}

}
