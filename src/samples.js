export const pointy = `
const users = [{ name: "1", isActive: true }, { name: "2", isActive: false }];

function checkUserisActive(user) {
  return user.isActive;
}
/* somethings off here */
const activeUsers = users.filter(function(data) {
   return checkUserisActive(data);
});
`;

export const pointFree = `
const users = [{ name: "1", isActive: true }, { name: "2", isActive: false }];

function checkUserisActive(user) {
  return user.isActive;
}
/* here the function is called implicitly for us no need to make another anonymous function */
const activeUsers = users.filter(checkUserisActive);
`;

export const imperative1 = `
showSelectedList = () => {
    let results = [];
    const mockUsers = this.state.users;
    for (let i = 0; i < mockUsers.length; i++) {
      if (this.state.showStatus === "all") {
        if (mockUsers[i].type === this.state.selectedList)
          results.push(mockUsers[i]);
      } else if (this.state.showStatus === "active") {
        if (
          mockUsers[i].type === this.state.selectedList &&
          mockUsers[i].isActive
        )
          results.push(mockUsers[i]);
      } else {
        if (
          mockUsers[i].type === this.state.selectedList &&
          !mockUsers[i].isActive
        )
          results.push(mockUsers[i]);
      }
    }
    return results;
  };
`;

export const curry1 = `
/* This wont work if you pass anything less than two arguments */

function add(a,b){
  return a + b;
}
/* 
    This is now curried!
    if you pass just one argument i.e. add(1) it will return a function waiting for another argument

    so you can do something like this:


    addByeOne(2) -> 3
    addByOne(5) -> 6

*/
const addByOne = addCurry(1);

function addCurry(a) {
  return function(b) {
    return a + b;
  };
}

`;

export const curry2 = `
const numbers = [1, 2, 3, 4];

function addCurry(a) {
  return function(b) {
    return a + b;
  };
}

/* Its point free now!*/

const newNumbers = numbers.map(addCurry(1));

console.log(newNumbers); // [2,3,4,5]
`;

export const compose = `
function addCurry(a) {
  return function(b) {
    return a + b;
  };
}

function multiplyCurried(a, b) {
  return function(b) {
    return a * b;
  };
}

/* point free and curried and composed see how they fit together! */

const multiplyAndAdd = compose(addCurry(10), multiplyCurried(4));

console.log(multiplyAndAdd(4)); // 26
`;

export const fpselect = `
const getUsers = (userType = "verified", filterFn = R.always(Boolean(true))) =>
  R.pipe(R.groupBy(R.prop("type")), R.prop(userType), R.filter(filterFn));
`;

export const topActiveUsers = `
const mockUsers = [
  { name: "varenya", type: "verified", isActive: true },
  { name: "vara", type: "top", isActive: true },
  { name: "uttam", type: "top", isActive: false },
  { name: "niraj", type: "top", isActive: true },
  { name: "vishwas", type: "verified", isActive: false },
  { name: "manoj", type: "anonymous", isActive: true }
];
  /* this will give us a function that accepts the list of users and returns only top active users*/

  const getActiveTopUsers = getUsers('top',R.prop('active'))

  console.log(getActiveTopUsers(mockUsers)); 
  
  // [{name : "vara", type : "top" , isActive: "true" }, {"name" : "uttam" ,type : "top" ,isActive : true}]

  /* you can imagine extending this for any type and condition for active/inactive */
  
  const getTopInActive = getUsers('top', (user) => !user.isActive)
`;

export const stateMachine = `
const stateMachine = {
  verified: {
    active: getUsers("verified", R.propEq("isActive", true)),
    inactive: getUsers("verified", R.propEq("isActive", false)),
    all: getUsers("verified")
  },
  top: {
    active: getUsers("top", R.propEq("isActive", true)),
    inactive: getUsers("top", R.propEq("isActive", false)),
    all: getUsers("top")
  },
  anonymous: {
    active: getUsers("anonymous", R.propEq("isActive", true)),
    inactive: getUsers("anonymous", R.propEq("isActive", false)),
    all: getUsers("anonymous")
  }
};
`;

export const incrementState = `
  function increment(state,props){
    return { count : state.count + props.step }
  }
  function decrement(state,props){
    return { count : state.count - props.step }
  }

  /* And in React you do this */

  this.setState(increment);

  /* if Decrement you can do this :*/

  this.setState(decrement);
`
export const actions = `

/* ES6 syntanx for currying ! */
 export const CHANGE_SHOW_TYPE = showType => (state, props) => ({
  selectedList: showType
 });

/* In the component we can do something like this: */

reduce = action => {
    const stateReducer = actions[action.type] || actions[DEFAULT];
    console.log("BEFORE", this.state, action);
    this.setState(stateReducer(action.payload), () => {
      console.log("AFTER", this.state);
    });
  };

`