import { createStore } from 'redux';

const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const binIncrease = document.querySelector('#increase');
const binDecrease = document.querySelector('#decrease');

const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

const toggleSwitch = () => ({ type : TOGGLE_SWITCH });
const increase = difference => ({ type : INCREASE });
const decrease = () => ({ type : DECREASE });

const initilState = {
  toggle : false,
  counter : 0
};

function reducer(state = initilState, action) {
  switch(action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state,
        toggle : !state.toggle
      };
     case INCREASE:
      return {
        ...state,
        counter : state.counter + action.difference
      };
    case DECREASE:
      return {
        ...state,
        counter : state.counter -1 
      };
    default:
      return state;   
  }
}

const store = createStore(reducer);

const render = () => {
  const state = store.getState();
  if (state.toggle) {
    divToggle.classList.add('active');
  } else {
    divToggle.classList.remove('active');
  }
  counter.innerText = state.counter;
}

render();
store.subscribe(render);

divToggle.onclick = () => {
  store.dispatch(toggleSwitch);
}
binIncrease.onclick = () => {
  store.dispatch(increase(1));
}
binDecrease.onclick = () => {
  store.dispatch(decrease());
}