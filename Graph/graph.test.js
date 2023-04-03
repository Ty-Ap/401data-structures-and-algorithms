const Graph = require('./graph');

describe('Graph', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  describe('addNode', () => {
    test('adds a node to the graph', () => {
      graph.addNode('A');
      expect(graph.getNodes()).toEqual(['A']);
    });

    test('returns the added node', () => {
      const node = graph.addNode('A');
      expect(node).toBe('A');
    });
  });

  describe('addEdge', () => {
    beforeEach(() => {
      graph.addNode('A');
      graph.addNode('B');
      graph.addNode('C');
    });

    test('adds an edge between two nodes in the graph', () => {
      graph.addEdge('A', 'B', 5);
      expect(graph.getNeighbors('A')).toContainEqual({ node: 'B', weight: 5 });
      expect(graph.getNeighbors('B')).toContainEqual({ node: 'A', weight: 5 });
    });

    test('assigns a weight to the edge if specified', () => {
      graph.addEdge('A', 'B', 5);
      expect(graph.getNeighbors('A')).toContainEqual({ node: 'B', weight: 5 });
    });

    test('throws an error if one or both nodes are not in the graph', () => {
      expect(() => {
        graph.addEdge('A', 'D');
      }).toThrow();
    });
  });

  describe('getNodes', () => {
    test('returns all the nodes in the graph', () => {
      graph.addNode('A');
      graph.addNode('B');
      graph.addNode('C');
      expect(graph.getNodes()).toEqual(['A', 'B', 'C']);
    });

    test('returns an empty array if there are no nodes', () => {
      expect(graph.getNodes()).toEqual([]);
    });
  });

  describe('getNeighbors', () => {
    beforeEach(() => {
      graph.addNode('A');
      graph.addNode('B');
      graph.addNode('C');
      graph.addEdge('A', 'B', 5);
      graph.addEdge('A', 'C', 10);
    });

    test('returns a collection of edges connected to the given node', () => {
      expect(graph.getNeighbors('A')).toContainEqual({ node: 'B', weight: 5 });
      expect(graph.getNeighbors('A')).toContainEqual({ node: 'C', weight: 10 });
    });
    test('returns an empty collection if there are no neighbors', () => {
      // Add node B to the graph, but don't add any edges
      graph.addNode('B');
      expect(graph.getNeighbors('B')).toEqual([]);
    });
    
    test('throws an error if the node is not in the graph', () => {
      expect(() => {
        graph.getNeighbors('D');
      }).toThrow();
    });
  });

  describe('size', () => {
    test('returns the total number of nodes in the graph', () => {
      graph.addNode('A');
      graph.addNode('B');
      graph.addNode('C');
      expect(graph.size()).toBe(3);
    });

    test('returns 0 if there are no nodes', () => {
      expect(graph.size()).toBe(0);
    });
  });
});
