class AdjacencyList {
  constructor() {
    this.list = {};
  }

  addVertex(vertex) {
    if (!this.list[vertex]) {
      this.list[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    if (this.list[v1] && this.list[v2]) {
      this.list[v1].push(v2);
      this.list[v2].push(v1);
    }
  }

  removeEdge(v1, v2) {
    if (this.list[v1] && this.list[v2]) {
      this.list[v1] = this.list[v1].filter((v) => v !== v2);
      this.list[v2] = this.list[v2].filter((v) => v !== v1);
    }
  }

  removeVertex(vertex) {
    if (!this.list[vertex]) {
      return null;
    }

    while (this.list[vertex].length) {
      const edge = this.list[vertex].pop();
      this.removeEdge(vertex, edge);
    }
    delete this.list[vertex];
  }
}

const adjacencyList = new AdjacencyList();

adjacencyList.addVertex("Dubai");
adjacencyList.addVertex("Tashkent");
adjacencyList.addVertex("Russia");
adjacencyList.addVertex("Bali");

adjacencyList.addEdge("Dubai", "Russia");
adjacencyList.addEdge("Bali", "Tashkent");

console.log(adjacencyList, "before");
adjacencyList.removeVertex("Dubai");
console.log(adjacencyList, "after");
