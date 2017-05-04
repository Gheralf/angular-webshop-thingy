"use strict";
var Product = (function () {
    function Product(id, name, desc, price, suggest, imgPath) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.price = price;
        this.suggest = suggest;
        this.imgPath = "imgs/" + imgPath;
    }
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=product.js.map