'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;
var STATS_X = 170;
var STATS_GAP_X = 80;
var PLAYER_NAME_Y = 260;
var PLAYER_NAME_GAP_Y = 10;
var PLAYER_TIME_GAP_Y = 25;
var MAX_COLUMN_HEIGHT = 150;
var COLUMN_WIDTH = 40;

function renderCloud(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

function getMaxElement(arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (maxElement < arr[i]) {
      maxElement = arr[i];
    }
  }
  return maxElement;
}

function getRandomColor(hue, saturationDiapason, lightness) {
  var randomColor = 'hsl(' + hue + ','+ Math.floor(Math.random() * saturationDiapason) +'%,'+  lightness + '%)';
  return randomColor;
}


window.renderStatistics = function renderStatistics(ctx, names, times) {

  var maxPlayerTime = getMaxElement(times);

  // canvas:
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white');

  ctx.fillStyle = 'black';
  ctx.textBaseline = 'hanging';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 150, 20);
  ctx.fillText('Список результатов:', 150, 39);

  // display stats:
  for (var i = 0; i < times.length; i++) {
    var columnHeight = times[i] * MAX_COLUMN_HEIGHT / maxPlayerTime * -1;
    var statsShiftX = (i > 0) ? (STATS_GAP_X * i) : 0;

    // display player name
    ctx.fillText(names[i], STATS_X + statsShiftX, PLAYER_NAME_Y);

    // display columns
    ctx.fillStyle = (names[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : getRandomColor(240, 101, 50);
    ctx.fillRect(STATS_X + statsShiftX, PLAYER_NAME_Y - PLAYER_NAME_GAP_Y, COLUMN_WIDTH, columnHeight);

    // display time
    ctx.fillStyle = 'black';
    ctx.fillText(Math.floor(times[i]), STATS_X + statsShiftX, PLAYER_NAME_Y + columnHeight - PLAYER_TIME_GAP_Y);
  }
};
