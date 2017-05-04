"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var product_1 = require('./object/product');
var ProductsSuggestedComponent = (function () {
    function ProductsSuggestedComponent() {
        this.products = [
            new product_1.Product(1, "Book", "It's a book", 4, true, ""),
            new product_1.Product(2, "Pamphlet", "It's a pamphlet", 2, false, "")
        ];
    }
    ProductsSuggestedComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'products-suggested',
            templateUrl: 'html/products-suggested.component.html',
            styleUrls: ['css/products-suggested.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], ProductsSuggestedComponent);
    return ProductsSuggestedComponent;
}());
exports.ProductsSuggestedComponent = ProductsSuggestedComponent;
//# sourceMappingURL=products-suggested.component.js.map