const data = {
  name: 'Houjifa Hasan',
  age: 26,
  print : function() {
    console.log(this.name);
  },
  address: {
    location: 'Pabna',
    division: 'Rajshahi',
    thana: {
      name: 'Bera',
      code: 1234
    }
  }
}

console.log(data);
data.print();