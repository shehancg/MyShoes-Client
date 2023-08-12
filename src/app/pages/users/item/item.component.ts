import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ItemService} from "src/app/service/item.service";
import {CartService} from "src/app/service/cart.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  name!: string
  item!: any

  constructor(private _route: ActivatedRoute, private _itemService: ItemService, private _router: Router,
              private _cartService: CartService) {
  }

  ngOnInit(): void {
    this.name = <string>this._route.snapshot.paramMap.get('id');
    this._itemService.GetItemById(this.name).subscribe({
      next: value => {
        // console.log(value)
        this.item = value
      },
      error: err => {
        console.log(err)
      }
    })
  }

  onClickHandler(item: any) {
    console.log(item)
    this._cartService.addToCart(item)
    this._router.navigate(["cart"]).then()
  }
}
