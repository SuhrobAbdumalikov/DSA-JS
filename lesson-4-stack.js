class Stuck {
  constructor() {
    this.items = [];
    this.top = null;
  }

  Push(data) {
    this.items.push(data);
    this.top = data;
  }

  Pop() {
    if (this.items.length !== 0) {
      this.top = null;
      if (this.items.length === 1) {
        this.top = null;
        this.items.pop();
      }
      if (this.items.length > 1) {
        this.top = this.items[this.items.length - 2];
        this.items.pop();
      }
    } else return null;
  }

  GetTop() {
    return this.items.length - 1;
  }

  Size() {
    return this.items.length;
  }

  IsEmpty() {
    return this.items.length === 0;
  }

  Enqueue(data) {
    return this.items.push(data);
  }
  Dequeue() {
    this.items.shift();
  }
  GetFront() {
    this.items[0];
  }
  Sort() {
    this.top = this.items[0];
    let lang = this.items.length;
    for (let i = 0; i < lang; i++) {
      for (let j = 0; j < lang; j++) {
        if (lang[j] > lang[j - 1]) {
          let sNum = lang[j];
          lang[j] = lang[j - 1];
          lang[j - 1] = sNum;
        }
      }
    }
    return lang;
  }
}

const stuck = new Stuck();

stuck.Push(1);
stuck.Push(3);

const getBin = (n) => {
  let s1;
  let s2;
  let res = [];
  let queue = new Stack();
  for (let i = 0; i < n; i++) {
    res.push(queue.Dequeue());
    s1 = res[i] + "0";
    s2 = res[i] + "1";
    queue.Enqueue(s1);
    queue.Enqueue(s2);
  }
  return res;
};

class TwoStuck {
  #length1;
  #length2;
  #items1;
  #items2;
  constructor(size) {
    this.size = size;
    this.#items1 = [];
    this.#items2 = [];
    this.#length1 = 0;
    this.#length2 = 0;
    this.allItem = [];
  }

  Push1(data) {
    if (this.#items1.length + this.#items2.length === this.size) {
      console.log("Stack full");
      return -1;
    }
    this.#items1.push(data);
    this.#length1++;
    this.allItem = [...this.#items1, ...this.#items2];
  }
  Push2(data) {
    if (this.#items1.length + this.#items2.length === this.size) {
      console.log("Stack Full");
      return -1;
    }
    this.#items2.push(data);
    this.#length2++;
    this.allItem = [...this.#items1, ...this.#items2];
  }
  Pop1() {
    this.#items1.pop();
    this.#length1--;
  }
  Pop2() {
    this.#items2.pop();
    this.#length2--;
  }
}

const twoStuck = new TwoStuck(4);

twoStuck.Push1("hello 1");
twoStuck.Push1("hello 2");

twoStuck.Push2("salom 1");
twoStuck.Push2("salom 2");
