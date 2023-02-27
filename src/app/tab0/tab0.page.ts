import { Component, OnInit } from '@angular/core';
import { Figure2D } from './Class/figure2D';
import { Triangle } from './Class/triangle';
import { Right_Triangle } from './Class/right_triangle';
import { Paralelogram } from './Class/paralelogram';
import { Square } from './Class/square';
@Component({
  selector: 'app-tab0',
  templateUrl: './tab0.page.html',
  styleUrls: ['./tab0.page.scss'],
})

export class Tab0Page implements OnInit {
  tr: any;
  r_tr: any;
  par: any;
  sq: any;
  visible = false;
  ras(aa: any, hh: any) {
    try {
      let a = parseInt(aa);
      let h = parseInt(hh);
      if (isNaN(a) || (isNaN(h))) {
        throw new Error('Parameter is not a number!');
      }
      if (a <= 0 || h <= 0) {
        throw new Error('Parameter less than 0');
      }

      this.tr = new Triangle(a, h);
      this.r_tr = new Right_Triangle(a, h);
      this.par = new Paralelogram(a, h);
      this.sq = new Square(a);

    }
    catch (e) {
      console.error(e);
    }
    this.visible = true;
  }
  constructor() { }

  ngOnInit() {
  }

}
