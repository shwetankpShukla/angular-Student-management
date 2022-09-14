import { Component, OnInit } from '@angular/core';
import { MenuService } from '../service/menu-service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuList: any = [];

  constructor(private menuService:MenuService) { }

  ngOnInit(): void {
    this.getAllMenu();
  }


  getAllMenu(){
    this.menuService.getMenuList().subscribe((res) => {
      this.menuList = res;
    });
  }

}
