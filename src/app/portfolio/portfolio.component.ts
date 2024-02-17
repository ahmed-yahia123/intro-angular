import { Component , ViewChild, ElementRef } from '@angular/core';
interface imgPth {
  img:string;
}
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  @ViewChild('portfolioImage') portfolioImage!: ElementRef;
  @ViewChild('imgPth') imgPth!: ElementRef;
  paths: imgPth[] = [
    { img: '../../assets/images/portfolio1.png' },
    { img: '../../assets/images/portfolio2.png' },
    { img: '../../assets/images/portfolio3.png' },
    { img: '../../assets/images/portfolio1.png' },
    { img: '../../assets/images/portfolio2.png' },
    { img: '../../assets/images/portfolio3.png' },
  ];
  ImageVisibility() {
    let imgElement = this.portfolioImage.nativeElement;
    imgElement.classList.add('d-none');
  }
  show(imgPath: string) {
    let imgElement = this.portfolioImage.nativeElement;
    let path = this.imgPth.nativeElement;
    imgElement.classList.remove('d-none');
    path.src =imgPath
  }
}
