/*
Given a clockface in a 2D coordinate system. The center of the clock is in (0, 0) point, the radius of the clockface is R.
The length of the hour hand is .8R
The length of the minute and the second hand is R

Each hands has 60 different positions:
    the minute hand steps 1 position every second
    the minute hand steps 1 position every minute
    the hour hand steps 1 position evrey 12 minutes

         * * * * *
     *       | (mx, my)
  *          |        *
*            |          *
*            |          *
*            o----------* (sx, sy)
*          /  (0,0)     *
*        /              *
  *    / (hx, hy)     *
     *             *
        * * * * *

Write a program that accepts the time in H:m:s format from the range of [00:00:00 - 12:59:59] and 

A) Calculates the angle the second hand has turned since (0:0:0) and returns the result in radians
B) Calculates the angle the minute hand has turned since (0:0:0) and returns the result in radians
C) Calculates the angle the hour hand has turned since (0:0:0) and returns the result in radians
D) Returns the coordinates of the end of the hour hand (hx, hy) in a string in the following format 'x2="[hx]"  y2="[hy]"', ie. 'x2="10" y2="10"'
E) Returns the coordinates of the end of the minute hand (mx, my) in a string in the following format 'x2="[mx]"  y2="[my]"', ie. 'x2="10" y2="10"'
F) Returns the coordinates of the end of the second hand (sx, sy) in a string in the following format 'x2="[sx]"  y2="[sy]"', ie. 'x2="10" y2="10"'

Let R = 100, define R as a constant

sample input: 6:10:22

you can test your output loading clock.html in the browser

JS reference:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sin
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/cos
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI

*/


//Get angle

function getHourHandAngle(timeStr) {

}

function getMinuteHandAngle(timeStr) {

}

function getSecondHandAngle(timeStr) {

}

//Coordinates 
//do not change the name of the below functions

function getSecondHandCoordinates(timeStr) {

}

function getMinuteHandCoordinates(timeStr) {

}

function getHourHandCoordinates(timeStr) {

}

//you can write other functions too to solve the exercises