import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Product } from '../object/product';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let products = [
      new Product(1, "Book", "It's a book", 4, true, ""),
      new Product(2, "Pamphlet", "It's a pamphlet", 2, false, ""),
      new Product(3, "Thing", "It's a thing", 1, false, ""),
      new Product(4, "Paper", "It's a paper", 2, false, ""),
      new Product(5, "Pen", "It's a pen", 1, false, "")
    ];
    return {products};
  }
}