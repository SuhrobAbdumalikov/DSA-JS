function hash(key, value) {
  let total = 0;
  let prime = 31;
  for (let i = 0; i < key.length; i++) {
    let char = key[i];
    let val = char.charCodeAt(0) - 96;
    total = (total * prime + val) % value;
  }
  return total;
}

console.log(hash("pink", 13));
console.log(hash("cyan", 13));
