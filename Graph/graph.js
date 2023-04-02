class Graph {
  constructor() {
    this.adjacencyList = {};
    this.nodes = 0;
  }

  addNode(value) {
    this.adjacencyList[value] = [];
    this.nodes++;
    return value;
  }

  addEdge(node1, node2, weight = null) {
    if (!(node1 in this.adjacencyList) || !(node2 in this.adjacencyList)) {
      throw new Error('Both nodes should already be in the graph');
    }

    this.adjacencyList[node1].push({ node: node2, weight });
    this.adjacencyList[node2].push({ node: node1, weight });
  }

  getNodes() {
    return Object.keys(this.adjacencyList);
  }

  getNeighbors(node) {
    if (!(node in this.adjacencyList)) {
      throw new Error('Node not found in graph');
    }

    return this.adjacencyList[node];
  }

  size() {
    return this.nodes;
  }
}


module.exports = Graph;