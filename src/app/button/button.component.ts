import { Component, OnInit } from '@angular/core';
import {ButtonService} from "../button.service";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  public className:any;
  public href:any;
  public text:any;
  constructor(private buttonService:ButtonService) { }

  ngOnInit(): void {
    this.className = this.buttonService.getClassName();
    this.text = this.buttonService.getText();
    this.href = this.buttonService.getHref();

    }


}
