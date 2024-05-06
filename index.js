const superbowlWin = function(arr) {
    const winFinder = function(element, index, array) {
      return element.result === "W";
    }
    return arr.find(winFinder) !== undefined ? arr.find(winFinder).year : arr.find(winFinder);
  }