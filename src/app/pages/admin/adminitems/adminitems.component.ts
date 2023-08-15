import { Component } from '@angular/core';
import { ItemService } from 'src/app/service/item.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-adminitems',
  templateUrl: './adminitems.component.html',
  styleUrls: ['./adminitems.component.css']
})
export class AdminitemsComponent {
  itemdata: any;

  constructor(private itemService: ItemService, private httpClient: HttpClient) {}

  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    this.itemService.GetItem().subscribe((response: any) => {
      console.log(response);
      this.itemdata = response;
    });
  }

  deleteItem(itemId: string) {
    this.itemService.DeleteItem(itemId).subscribe(
      () => {
        console.log(`Item with ID ${itemId} deleted`);
        this.loadItems(); // Refresh the list after deletion
      },
      (error: any) => {
        console.error('Error deleting item:', error);
      }
    );
  }
}
