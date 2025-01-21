let numOfRaw = 10

function triangleGenerator(nr, t){
  if(nr < 2) return t

  let prevRaw = t[t.length-1];
  let curntRaw = [1]
  for(let i = 1; i<prevRaw.length ; i++){
    curntRaw[i] = prevRaw[i] + prevRaw[i-1]
  }
  curntRaw.push(1)
  t.push(curntRaw)

  return triangleGenerator(nr-1, t)
}

const triangle = triangleGenerator(numOfRaw, [[1]])

for(let i=0; i<triangle.length ; i++){
  console.log(triangle[i]+"\n")
}
