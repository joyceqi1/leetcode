class dataStruct {
  
  constructor(name, age){
    
    this.name = name,
    this.age = age
    this.symbol = Symbol(this.name);

  }
  showInfo() {
    console.log(this.symbol)
  }
  
}
var obj = new dataStruct('tom', 18)
obj.showInfo()