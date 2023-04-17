
// class Polygon {
//     constructor(p1X, p1Y, p2X, p2Y, p3X, p3Y, p4X, p4Y) {
//       let p1 = [p1X,p1Y];
//       let p2 = [p2X, p2Y];
//       let p3 = [p3X, p3Y];
//       let p4 = [p4X, p4Y];
//     }


//   }


//   const Polygon = class {
//     constructor(p1X, p1Y, p2X, p2Y, p3X, p3Y, p4X, p4Y) {
//       this.height = height;
//       this.width = width;
//     }
//   };


/* Syntax
let vertices = [[0, 0], [0, 1], [1, 1], [1, 0]];
let poly = new Polygon(vertices);
*/

  class Polygon {
    constructor(vertices) {
      this.vertices = vertices; //Array
    }
  
    contains(point) {
      let n = this.vertices.length;
      let inside = false;
  
      for (let i = 0, j = n - 1; i < n; j = i++) {
        let xi = this.vertices[i][0], yi = this.vertices[i][1];
        let xj = this.vertices[j][0], yj = this.vertices[j][1];
  
        let intersect = ((yi > point[1]) != (yj > point[1]))
          && (point[0] < (xj - xi) * (point[1] - yi) / (yj - yi) + xi);
  
        if (intersect) {
          inside = !inside;
        }
      }
  
      return inside;
    }
  }
  //export default Polygon;