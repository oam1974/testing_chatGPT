function fitsInOneBox(boxes) {
  return boxes.every((box, i) => {
    if (i === boxes.length - 1) return true
    return boxes.slice(i + 1).every(nextBox => (
      (box.l > nextBox.l && box.w > nextBox.w && box.h > nextBox.h) ||
      (box.l < nextBox.l && box.w < nextBox.w && box.h < nextBox.h)
    ))
  })
}
