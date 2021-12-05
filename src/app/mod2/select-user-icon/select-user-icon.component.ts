import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'selectUserIcon',
  templateUrl: './select-user-icon.component.html',
  styleUrls: ['./select-user-icon.component.css']
})
export class SelectUserIconComponent implements OnInit {
  @Input() imgNum: number = 0;
  @ViewChild('btnIcon') icon:ElementRef;
  @Output() public IconEvent= new EventEmitter();
  imgs: {num: number, url: string}[] =[];
  selectedImg: string = `../../../assets/img/userIcons/${this.imgNum}.png`;
  constructor() { }

  ngOnInit(): void {
    this.selectedImg = `../../../assets/img/userIcons/${this.imgNum}.png`;
    this.createImgs();
  }

  createImgs() {
    let baseUrl = "../../../assets/img/userIcons/";
    let i = 1;
    while (i<=54) {
      let temp = {
        num: i,
        url:`${baseUrl}${i}.png`
      };
      this.imgs.push(temp);
      i++;
    }
  }

  ngOnSelect (img: any)
  {
    this.selectedImg = img.url;
    console.log(img.num);
    this.IconEvent.emit(img.num);
  }

}
