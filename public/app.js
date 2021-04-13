// marking the active sidebar link
const items = document.querySelectorAll(".sidebar__item");
items.forEach(function (item) {
  if (location.href === item.children[0].href) item.classList.add("active");
});

document.addEventListener("DOMContentLoaded", (event) => {
  document.querySelectorAll(".code-snippet").forEach((block) => {
    hljs.highlightBlock(block);
  });
});

// Binary search on sorted array
const binary_search = function (arr, target) {
  var lower = 0;
  var upper = arr.length - 1;
  var middle = Math.floor((lower + upper) / 2);

  // loop until lower is nolonger less or equal to upper
  while (arr[middle] !== target && lower <= upper) {
    if (lower < arr[middle]) upper = middle - 1;
    else lower = middle + 1;

    middle = Math.floor((lower + upper) / 2);
  }

  // return -1 if target value is not found
  return arr[middle] === target ? middle : -1;
};

// Linear search
const linear_search = function (arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
};

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
