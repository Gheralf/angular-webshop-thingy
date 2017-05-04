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
var product_service_1 = require("./product.service");
var CartComponent = (function () {
    function CartComponent(productService) {
        this.productService = productService;
        this.cart = []; //JSON.parse(localStorage.getItem('owlcart'));
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.productService.cartitems$
            .subscribe(function (cart) { return _this.cart = cart; });
    };
    CartComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component is destroyed
        this.subscription.unsubscribe();
    };
    CartComponent.prototype.removeProductFromCart = function (product) {
        this.productService.removeProductFromCart(product);
    };
    CartComponent.prototype.clearCart = function () {
        this.productService.clearCart();
    };
    CartComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'show-cart',
            templateUrl: 'html/cart.component.html'
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService])
    ], CartComponent);
    return CartComponent;
}());
exports.CartComponent = CartComponent;
//# sourceMappingURL=cart.component.js.map