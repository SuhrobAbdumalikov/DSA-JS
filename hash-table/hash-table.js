// function hash(key, value) {
//   let total = 0;
//   let prime = 31;
//   for (let i = 0; i < key.length; i++) {
//     let char = key[i];
//     let val = char.charCodeAt(0) - 96;
//     total = (total * prime + val) % value;
//   }
//   return total;
// }

// console.log(hash("pink", 13));
// console.log(hash("cyan", 13));

class HashTable {
  constructor(size) {
    this.size = size;
    this.items = new Array(size).fill(undefined).map(() => []);
  }

  hash(key) {
    let total = 0;
    let prime = 31;
    for (let i = 0; i < key.length; i++) {
      let char = key[i];
      let val = char.charCodeAt(0) - 96;
      total = (total * prime + val) % this.size;
    }
    return total;
  }

  set(key, value) {
    const index = this.hash(key);
    this.items[index].push({ key, value });
  }

  get(key) {
    const index = this.hash(key);
    const item = this.items[index].find((item) => item.key === key);
    return item ? item.value : "404 Not Found!";
  }

  remove(key) {
    const index = this.hash(key);
    this.items[index] = this.items[index].filter((item) => item.key !== key);
  }

  has(key) {
    const index = this.hash(key);
    const hasKey = this.items[index].find((a) => a.key === key);
    return hasKey ? "Yes It is!" : "No It is'not!";
  }
}

const hashTable = new HashTable(10);

hashTable.set("username", "Suxrob");
hashTable.set("age", 19);
hashTable.set("location", "Surkhandarya");
hashTable.set("email", "suxrob@gmail.com");

console.log(hashTable.items);
console.log(hashTable.get("username"));
console.log(hashTable.get("age"));
console.log(hashTable.get("location"));
console.log(hashTable.get("email"));
console.log(hashTable.has("location"));
