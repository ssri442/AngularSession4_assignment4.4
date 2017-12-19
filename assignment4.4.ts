
/**
 * Class decorator without parameter
*/

function ClassDecoratorParams(param1: number, param2: string) {
    return function(
        target: Function // The class the decorator is declared on
        ) {
        console.log("ClassDecoratorParams(" + param1 + ", '" + param2 + "') called on: ", target);
    }
}


function PropertyDecorator(
    target: Object, // The prototype of the class
    propertyKey: string | symbol ,// The name of the property
    descriptor: TypedPropertyDescriptor<any>
    ) {
    console.log("PropertyDecorator called on: ", target ,"keyyyyy:" , propertyKey , " dessss:" ,descriptor);
}


@ClassDecoratorParams(1, "a")
@ClassDecoratorParams(2, "b")

class ClassParamsMethodDecoratorExample {
    
        @PropertyDecorator
        
        property(){
    
        }
    }