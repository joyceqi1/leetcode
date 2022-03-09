var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    let x_arr = [ax1, ax2, bx1, bx2].sort((x,y)=> x-y);
    let y_arr = [ay1, ay2, by1, by2].sort((x,y)=> x-y);
    if((x_arr[3]-x_arr[0]>Math.abs(ax2-ax1)+Math.abs(bx2-bx1))||(y_arr[3]-y_arr[0]>Math.abs(ay2-ay1)+Math.abs(by2-by1))) {
        return Math.abs((ax2-ax1)*(ay2-ay1))+Math.abs((bx2-bx1)*(by2-by1))
    }
    return Math.abs((ax2-ax1)*(ay2-ay1))+Math.abs((bx2-bx1)*(by2-by1))-Math.abs((x_arr[1]-x_arr[2])*(y_arr[1]-y_arr[2]))
};
var ax1 = -3, ay1 = 0, ax2 = 3, ay2 = 4, bx1 = 0, by1 = -1, bx2 = 9, by2 = 2;
console.log(computeArea(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2))