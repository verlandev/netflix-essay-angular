import { INavright } from './../../models/inavright';
import { INavleft } from './../../models/inavleft';
import { Component } from '@angular/core';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss', './../../app.component.scss']
})

export class NavComponent {

  public image: string = 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png';
  public navbarLeft: INavleft[]
  public navbarRight: INavright[]

  constructor () {

    this.navbarLeft = [

      {
        href:'#',
        text: 'Inicio',
        class:'navLeft__a'
      },

      {
        href:'#',
        text: 'Series TV',
        class:'navLeft__a'
      }, 

      {
        href:'#',
        text: 'Películas',
        class:'navLeft__a'

      },

      {
        href:'#',
        text: 'Novedades más vistas',
        class:'navLeft__a'

      },

      {
        href:'#',
        text: 'Mi lista',
        class:'navLeft__a'

      },

      {
        href:'#',
        text: 'Explorar por idiomas',
        class:'navLeft__a'

      }

    ]

    this.navbarRight = [

      {
        href: '#',
        icon:'../../assets/Icons/zoom-32.png', 
        class: 'navRight__a--icon'
      },

      {
        href: '#',
        text:'Infantil', 
        class: 'navRight__a--text'
      },

      {
        href: '#',
        icon:'../../assets/Icons/bell-3-32.png', 
        class: 'navRight__a--icon'
      }
     
    ]


  }


}
