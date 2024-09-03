class Person {
  static arr = [];
  constructor(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;
  }
  read() {
    console.log(Person.arr);
  }
  dicreaseSort() {
    Person.arr.sort((a, b) => b.price - a.price);
    Person.arr.forEach((item) =>
      console.log(`Name:${item.name},Price:${item.price}`)
    );
    // Person.arr.forEach(item => console.log(Object.entries(Person)))
  }
  increaseSort() {
    Person.arr.sort((a, b) => a.price - b.price);
    Person.arr.forEach((item) =>
      console.log(`Name:${item.name},Price:${item.price}`)
    );
  }
  find(itemForFind) {
    Person.arr.filter((item) => {
      item == itemForFind;
      return true;
    });
  }
}

class Admin extends Person {
  add(item) {
    Person.arr.push(item);
  }
  delete(deletedItem) {
    const index = Person.arr.findIndex((item) => deletedItem == item.name);
    Person.arr.splice(index, 1);
  }
  change(changedItem, newPrice) {
    const index = Person.arr.findIndex((item) => item.name === changedItem);
    Person.arr[index].price = newPrice;
  }
}

class Counter extends Person {
  sum() {
    Person.arr.forEach((item) => {
      item.totalPrice = item.count * item.price;
    });

    return Person.arr.reduce((sum, b) => sum + b.totalPrice, 0);
  }
}
class User extends Person {}

const admin = new Admin();
const user = new User();
const counter = new Counter();
admin.add(new Person("bread", 1, 2));
admin.add(new Person("chease", 3, 5));
admin.add(new Person("milk", 5, 2));
admin.add(new Person("something", 3, 1));
admin.add(new Person("aaa", 7, 1));
admin.read();
admin.delete("chease");
admin.read();
admin.change("milk", 8);
admin.read();
console.log(counter.sum());
admin.dicreaseSort();
admin.increaseSort();
admin.find("milk");
