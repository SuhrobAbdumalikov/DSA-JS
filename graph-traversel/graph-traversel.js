class GraphTraversal {
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

  DFS(start) {
    let res = [];
    let visited = {};
    let list = this.list;

    function DFSHelper(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      res.push(vertex);
      list[vertex].forEach((v) => {
        if (!visited[vertex]) {
          return DFSHelper(v);
        }
      });
    }
    DFSHelper(start);
    return res;
  }

  BFS(start) {
    let res = [];
    let visited = {};
    let queue = [start];
    visited[start] = true;

    while (queue.length) {
      let shift = queue.shift();
      res.push(shift);
      this.list[shift].forEach((v) => {
        if (!visited[v]) {
            visited[v] = true
          queue.push(v);
        }
      });
    }
    return res;
  }

}

const graph = new GraphTraversal();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("A", "C");

console.log(graph.BFS("A"));

console.log(graph);


// hometask => 