function renderStatistics(ctx, names, times) {
  var maxPlayerTime = times[0];
  var maxColumnHeight = 150;
  var columnHeight = maxColumnHeight;
  var columnWidth = 40;
  var distance = 80;
  var xPosition = 170;
  var xPositionShift;
  var randomColor;
  var i;

  // canvas:
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = 'black';
  ctx.textBaseline = 'hanging';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 150, 20);
  ctx.fillText('Список результатов:', 150, 39);

  // maximum time:
  for (i = 0; i < times.length; i++) {
    if (maxPlayerTime < times[i]) {
      maxPlayerTime = times[i];
    }
  }

  // display stats:
  for (i = 0; i < times.length; i++) {
    columnHeight = times[i] * maxColumnHeight / maxPlayerTime * -1;
    xPositionShift = (i > 0) ? (distance * i) : 0;
    ctx.fillText(names[i], xPosition + xPositionShift, 260);
    randomColor = Math.floor(Math.random() * 101);
    ctx.fillStyle = (names[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'hsl(240, randomColor, 50)';
    ctx.fillRect(xPosition + xPositionShift, 250, columnWidth, columnHeight);
    ctx.fillStyle = 'black';
    ctx.fillText(Math.floor(times[i]), xPosition + xPositionShift, 260 + columnHeight - 25);
  }
}
