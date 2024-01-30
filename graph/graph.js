class Graph {
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
    while (this.list[vertex].length) {
      let edge = this.list[vertex].pop();
      this.removeEdge(vertex, edge);
    }
    delete this.list[vertex];
  }
}

const graph = new Graph();

graph.addVertex("Tokyo");
graph.addVertex("Dubai");
graph.addVertex("Aspen");

graph.addEdge("Tokyo", "Dubai");
graph.addEdge("Aspen", "Dubai");

graph.removeEdge("Tokyo", "Dubai");

graph.removeVertex("Aspen");

console.log(graph);
