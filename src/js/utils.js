/**
 * @todo
 * @param index - индекс поля
 * @param boardSize - размер квадратного поля (в длину или ширину)
 * @returns строка - тип ячейки на поле:
 *
 * top-left
 * top-right
 * top
 * bottom-left
 * bottom-right
 * bottom
 * right
 * left
 * center
 *
 * @example
 * ```js
 * calcTileType(0, 8); // 'top-left'
 * calcTileType(1, 8); // 'top'
 * calcTileType(63, 8); // 'bottom-right'
 * calcTileType(7, 7); // 'left'
 * ```
 * */
export function calcTileType(index, boardSize) {
  // TODO: ваш код будет тут
  const topLeft = 0;
  const topRight = boardSize - 1;
  const bottomLeft = boardSize ** 2 - boardSize;
  const bottomRight = boardSize ** 2 - 1;

  switch (index) {
    case topLeft:
      return 'top-left';
    case topRight:
      return 'top-right';
    case bottomLeft:
      return 'bottom-left';
    case bottomRight:
      return 'bottom-right';
    default:
      if (index > topLeft && index < topRight) {
        return 'top';
      }
      if (index > bottomLeft && index < bottomRight) {
        return 'bottom';
      }
      if (index % boardSize === 0) {
        return 'left';
      }
      if (index % boardSize === boardSize - 1) {
        return 'right';
      }
      return 'center';
  }
}

export function calcHealthLevel(health) {
  if (health < 15) {
    return 'critical';
  }

  if (health < 50) {
    return 'normal';
  }

  return 'high';
}
