function getFirstSelector(selector) {
  return document.querySelector(selector);
};

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const rList = document.querySelectorAll('.ranked-list');

  for (let i = 0, p = rList.length; i < p; i++) {
    let children = rList[i].children;

    for (let m = 0, j = children.length; m < j; m++) {
        children[m].innerHTML = parseInt(children[m].innerHTML) + n;
    }
  }
}
