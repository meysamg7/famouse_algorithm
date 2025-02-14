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
      this.adjMatrix.forEach(row => console.log(row.join(" ")));
  
      console.log("\nVertex Data:");
      this.vertexData.forEach((data, index) => {
        console.log(`Vertex ${index}: ${data}`);
      });
    }
  
    private dfsUtil(v: number, visited: boolean[]): void {
      visited[v] = true;
      process.stdout.write(this.vertexData[v] + " ");
  
      for (let i = 0; i < this.size; i++) {
        if (this.adjMatrix[v][i] === 1 && !visited[i]) {
          this.dfsUtil(i, visited);
        }
      }
    }
  
    dfs(startVertexData: string): void {
      const visited: boolean[] = new Array(this.size).fill(false);
      const startVertex = this.vertexData.indexOf(startVertexData);
  
      if (startVertex === -1) {
        console.log("Invalid start vertex data.");
        return;
      }
  
      this.dfsUtil(startVertex, visited);
    }
  }
  
  // Example usage:
  const g = new Graph(7);
  
  g.addVertexData(0, 'A');
  g.addVertexData(1, 'B');
  g.addVertexData(2, 'C');
  g.addVertexData(3, 'D');
  g.addVertexData(4, 'E');
  g.addVertexData(5, 'F');
  g.addVertexData(6, 'G');
  
  g.addEdge(3, 0);  // D - A
  g.addEdge(0, 2);  // A - C
  g.addEdge(0, 3);  // A - D
  g.addEdge(0, 4);  // A - E
  g.addEdge(4, 2);  // E - C
  g.addEdge(2, 5);  // C - F
  g.addEdge(2, 1);  // C - B
  g.addEdge(2, 6);  // C - G
  g.addEdge(1, 5);  // B - F
  
  g.printGraph();
  
  console.log("\nDepth First Search starting from vertex D:");
  g.dfs('D');
  