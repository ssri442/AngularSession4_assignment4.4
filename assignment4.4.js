/**
 * Class decorator without parameter
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function ClassDecoratorParams(param1, param2) {
    return function (target // The class the decorator is declared on
    ) {
        console.log("ClassDecoratorParams(" + param1 + ", '" + param2 + "') called on: ", target);
    };
}
function PropertyDecorator(target, // The prototype of the class
    propertyKey, // The name of the property
    descriptor) {
    console.log("PropertyDecorator called on: ", target, "keyyyyy:", propertyKey, " dessss:", descriptor);
}
let ClassParamsMethodDecoratorExample = class ClassParamsMethodDecoratorExample {
    property() {
    }
};
__decorate([
    PropertyDecorator
], ClassParamsMethodDecoratorExample.prototype, "property", null);
ClassParamsMethodDecoratorExample = __decorate([
    ClassDecoratorParams(1, "a"),
    ClassDecoratorParams(2, "b")
], ClassParamsMethodDecoratorExample);
