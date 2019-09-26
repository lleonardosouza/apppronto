import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principaisbandas',
  templateUrl: './principaisbandas.page.html',
  styleUrls: ['./principaisbandas.page.scss'],
})
export class PrincipaisbandasPage implements OnInit {

  constructor() { }

  items;

  ngOnInit() 
  {
    this.initializeItems();
  }

  initializeItems() 
  {
    this.items = [
      {nome: "AC/DC", imagem: 'acdc.jpg' },
      {nome: "IRON MAIDEN", imagem: 'ironmaiden.jpg' },
      {nome: "BLACK SABBATH", imagem: 'blacksabbath.jpg' },
      {nome: "METALLICA", imagem: 'metallica.jpg' }      
    ];
  }

  getItems(ev) 
  {
    // Reset items back to all of the items
    this.initializeItems();
    // set val to the value of the ev target
    var val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
