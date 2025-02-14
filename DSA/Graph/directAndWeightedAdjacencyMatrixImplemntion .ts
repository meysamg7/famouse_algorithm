class Graph {
    private adjMatrix: (number | null)[][];
    private size: number;
    private vertexData: string[];
  
    constructor(size: number) {
      this.size = size;
      this.adjMatrix = Array.from({ length: size }, () => Array(size).fill(null));
      this.vertexData = Array(size).fill('');
    }
  
    addEdge(u: number, v: number, weight: number): void {
      if (u >= 0 && u < this.size && v >= 0 && v < this.size) {
        this.adjMatrix[u][v] = weight;
        this.adjMatrix[v][u] = weight;
      }
    }
  
    addVertexData(vertex: number, data: string): void {
      if (vertex >= 0 && vertex < this.size) {
        this.vertexData[vertex] = data;
      }
    }
  
    printGraph(): void {
      console.log("Adjacency Matrix:");
      this.adjMatrix.forEach(row => {
        console.log(row.map(x => (x !== null ? x.toString() : "0")).join(" "));
      });
  
      console.log("\nVertex Data:");
      this.vertexData.forEach((data, index) => {
        console.log(`Vertex ${index}: ${data}`);
      });
    }
  }
  
  // Example usage:
  const g = new Graph(4);
  g.addVertexData(0, 'A');
  g.addVertexData(1, 'B');
  g.addVertexData(2, 'C');
  g.addVertexData(3, 'D');
  g.addEdge(0, 1, 3); // A -> B with weight 3
  g.addEdge(0, 2, 2); // A -> C with weight 2
  g.addEdge(3, 0, 4); // D -> A with weight 4
  g.addEdge(2, 1, 1); // C -> B with weight 1
  
  g.printGraph();
  