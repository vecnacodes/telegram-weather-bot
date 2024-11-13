function MyCustomDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('Property:', propertyKey);  
    console.log('Descriptor:', descriptor); 
  }
  
  
  class MyClass {
    @MyCustomDecorator
    myMethod() {
      console.log('Method logic goes here');
    }
  }
  
 
  const myClassInstance = new MyClass();
  myClassInstance.myMethod();  
  