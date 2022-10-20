import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent implements OnInit {

  @Input() number : string ="";
  @Input() p : string = "";
  @Input() class : string = "";


  constructor() { }

  ngOnInit(): void {
  }

}
