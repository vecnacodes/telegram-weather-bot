declare function MyCustomDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor): void;
declare class MyClass {
    myMethod(): void;
}
declare const myClassInstance: MyClass;
