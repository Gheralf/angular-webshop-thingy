export class Product {
  id: number;
  name: string;
  desc: string;
  price: number;
  suggest: boolean;
  imgPath: string;
  
  constructor(id: number, name: string, desc: string, price:number, suggest: boolean, imgPath: string) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.price = price;
    this.suggest = suggest;
    this.imgPath = "imgs/" + imgPath;
  }
}