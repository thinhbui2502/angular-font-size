import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  backGround = "#00e067";

  onChangeColor(color) {
    this.backGround = color;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
