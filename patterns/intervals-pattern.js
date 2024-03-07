var merge = function (intervals) {
  intervals.sort(([aStart, aEnd], [bStart, bEnd]) =>
    aStart !== bStart ? aStart - bStart : aEnd - bEnd
  );

  let merge = [];
  let prev = intervals[0];

  for (let i = 0; i < intervals.length; i++) {
    let [prevStart, prevEnd] = prev;
    let [currentStart, currentEnd] = intervals[i];

    if (prevEnd >= currentStart) {
      prev[1] = Math.max(prevEnd, currentEnd);
    } else {
      prev = intervals[i];
    }
  }
  merge.push(prev);
  return merge;
};

var eraseOverlapIntervals = function (intervals) {
  intervals.sort(([aStart, aEnd], [bStart, bEnd]) =>
    aStart !== bStart ? aStart - bStart : aEnd - bEnd
  );

  let count = 0;
  let prevEnd = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    let [currentStart, currentEnd] = intervals[i];

    if (prevEnd > currentStart) {
      count++;
      prevEnd = Math.min(prevEnd, currentEnd);
    } else {
      prevEnd = intervals[i][1];
    }
  }
  return count;
};

var insert = function (intervals, newInterval) {
  intervals.push(newInterval);
  intervals.sort(([aStart, aEnd], [bStart, bEnd]) =>
    aStart !== bStart ? aStart - bStart : aEnd - bEnd
  );

  let merge = [];
  let prev = intervals[0];

  for (let i = 0; i < intervals.length; i++) {
    let [prevStart, prevEnd] = prev;
    let [currentStart, currentEnd] = intervals[i];

    if (prevEnd >= currentStart) {
      prev[1] = Math.max(prevEnd, currentEnd);
    } else {
      merge.push(prev);
      prev = intervals[i];
    }
  }
  merge.push(prev);
  return merge;
};

//! Climbing Stairs 70
var climbStairs = function (n) {
  let arr = [1, 2];
  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[n - 1];
};

console.log(climbStairs(8));
