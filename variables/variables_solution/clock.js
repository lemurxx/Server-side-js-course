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

*/

const R = 100;


function calculateRadians(position) {
    return Math.PI / 30 * position; //2 PI -> 60 positions
}

//Positions 0-60

function getMinuteHandPosition(minutes) {
    return minutes; //1 position / minute
}

function getSecondHandPosition(seconds) {
    return seconds; //1 position / second
}

function getHourHandPosition(hours, minutes) {
    return Math.floor((hours * 60 + minutes) / 12); //1/12 position / minute
}


//Get time

function getSeconds(timeStr) {
    return +timeStr.split(':')[2];
}

function getMinutes(timeStr) {
    return +timeStr.split(':')[1];
}

function getHours(timeStr) {
    return +timeStr.split(':')[0];
}


//Get angle

function getHourHandAngle(timeStr) {
    return calculateRadians(getHourHandPosition(getHours(timeStr), getMinutes(timeStr)));
}


function getMinuteHandAngle(timeStr) {
    return calculateRadians(getMinuteHandPosition(getMinutes(timeStr)));
}


function getSecondHandAngle(timeStr) {
    return calculateRadians(getMinuteHandPosition(getSeconds(timeStr)));
}

//Coordinates

function calculateCoordinates(angle, radius) { //angle in radians
    return `x2 = "${Math.cos(angle) * radius}" y2 = "${Math.sin(angle) * radius}"`;
}

function getSecondHandCoordinates(timeStr) {
    return calculateCoordinates(getSecondHandAngle(timeStr), R);
}

function getMinuteHandCoordinates(timeStr) {
    return calculateCoordinates(getMinuteHandAngle(timeStr), R);
}

function getHourHandCoordinates(timeStr) {
    return calculateCoordinates(getHourHandAngle(timeStr), R * .8);
}


console.log('A) ', getSecondHandAngle('07:45:10'));
console.log('B) ', getMinuteHandAngle('07:54:10'));
console.log('C) ', getHourHandAngle('07:45:10'));
console.log('D) ', getHourHandCoordinates('07:45:10'));
console.log('E) ', getMinuteHandCoordinates('07:45:10'));
console.log('F) ', getSecondHandCoordinates('07:45:10'));