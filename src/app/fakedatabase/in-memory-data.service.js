"use strict";
var product_1 = require('../object/product');
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var products = [
            new product_1.Product(1, "Book", "It's a book", 4, true, ""),
            new product_1.Product(2, "Pamphlet", "It's a pamphlet", 2, false, ""),
            new product_1.Product(3, "Thing", "It's a thing", 1, false, ""),
            new product_1.Product(4, "Paper", "It's a paper", 2, false, ""),
            new product_1.Product(5, "Pen", "It's a pen", 1, false, "")
        ];
        return { products: products };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map