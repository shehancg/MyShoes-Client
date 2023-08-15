import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ItemService } from 'src/app/service/item.service'

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {
  createItemForm!: FormGroup;
  selectedFile!: File; // Store the selected file

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.createItemForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl(''),
      price: new FormControl('', [Validators.required]),
      countInStock: new FormControl('', [Validators.required])
    });
  }

  // Handle file selection
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  itemSubmit() {
    const item = this.createItemForm.value;

    // Create FormData and append the selected file
    const formData = new FormData();
    formData.append('name', item.name);
    formData.append('description', item.description);
    formData.append('image', this.selectedFile);
    formData.append('price', item.price);
    formData.append('countInStock', item.countInStock);

    this.itemService.CreateItem(formData)
      .subscribe(data => {
        console.log('Item created successfully');
      }, (error: any) => {
        console.error('Error creating item:', error);
      });
  }
}
