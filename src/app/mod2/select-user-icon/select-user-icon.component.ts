import { Component, OnInit, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'selectUserIcon',
  templateUrl: './select-user-icon.component.html',
  styleUrls: ['./select-user-icon.component.css']
})
export class SelectUserIconComponent implements OnInit {
  @ViewChild('btnIcon') icon:ElementRef;
  imgs: {num: number, url: string}[] =[];
  selectedImg = "../../../assets/img/userIcons/0.png";
  constructor() { }

  ngOnInit(): void {
    this.createImgs();
    console.log(this.imgs);
    console.log(this.imgs[0].url);
  }

  createImgs() {
    let baseUrl = "../../../assets/img/userIcons/";
    let i = 1;
    while (i<=50) {
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
    console.log(img);
    this.selectedImg = img.url;
    console.log(this.icon.nativeElement);
  }

}
