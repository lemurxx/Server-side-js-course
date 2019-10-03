//implement the logic of a Lights Out puzzle
//https://en.wikipedia.org/wiki/Lights_Out_(game)
//https://www.neok12.com/games/lights-out/lights-out.htm
//Define a constant that stores the size of the puzzle

//To handle the UI use the App API
//App API methods:
//createView(size)                    -  creates the UI of a size X size puzzle
//updateView(rowindex, colindex, val) -  updates the rowindex / colindex (indexes are 0 based) element, the val parameter can be true / false, true will light up the element
//subscribeClick(callbackFn)          -  the function passed to subscribeClick is called each time the user clicks an element, 
//                                       the row and column indexes of the clicked element are passed to callbackFn   

const size = 4;

let array = Array.from({ length: size },
    (v, i) => Array.from({ length: size }, (v2, j) => false));

function handleClick(row, col) {
    //array[row][col] = !array[row][col];
    changeArray(row, col);
    refresh();
}

function refresh() {
    array.forEach((row, rowIdx) => row.forEach((el, colIdx) => {
        App.updateView(rowIdx, colIdx, el)
    }));
}

function changeArray(row, col) {
    if (row > 0)
        array[row - 1][col] = !array[row - 1][col];
    let minCol = Math.max(col - 1, 0);
    let maxCol = Math.min(col + 1, size - 1);
    for (let i = minCol; i < maxCol + 1; i++) {
        array[row][i] = !array[row][i];
    }

    if (row < size - 1)
        array[row + 1][col] = !array[row + 1][col];
    console.log(array);

}

App.createView(size);
App.subscribeClick(handleClick);