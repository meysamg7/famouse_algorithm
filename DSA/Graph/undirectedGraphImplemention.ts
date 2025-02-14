class Graph {
    private adjMatrix: number[][];
    private size: number;
    private vertexData: string[];
  
    constructor(size: number) {
      this.size = size;
      this.adjMatrix = Array.from({ length: size }, () => Array(size).fill(0));
      this.vertexData = Array(size).fill('');
    }
  
    addEdge(u: number, v: number): void {
      if (u >= 0 && u < this.size && v >= 0 && v < this.size) {
        this.adjMatrix[u][v] = 1;
        this.adjMatrix[v][u] = 1;
      }
    }
  
    addVertexData(vertex: number, data: string): void {
      if (vertex >= 0 && vertex < this.size) {
        this.vertexData[vertex] = data;
      }
    }
  
    printGraph(): void {
      console.log("Adjacency Matrix:");
      this.adjMatrix.forEach(row => console.log(row.join(' ')));
  
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
  g.addEdge(0, 1); // A - B
  g.addEdge(0, 2); // A - C
  g.addEdge(0, 3); // A - D
  g.addEdge(1, 2); // B - C
  
  g.printGraph();
  