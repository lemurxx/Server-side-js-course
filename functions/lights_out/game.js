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

function handleClick(row, col) {
    App.updateView(row, col, true);
}

App.createView(size);
App.subscribeClick(handleClick);