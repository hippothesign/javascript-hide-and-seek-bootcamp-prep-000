function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  const rankedList = document.querySelectorAll('.ranked-list')

  for(let i = 0, l = rankedList.length; i < l; i++){

    let children = rankedList[i].children

for(let j = 0, k = children.length; j < k; j++){

  children[j].innerHTML = parseInt(children[j].innerHTML, 10) + n
    }
  }
}

function deepestChild(){
let deep = document.querySelector('#grand-node div div div div')

  return deep
  }
