const userData = [
  { fname: "esme", lname: "sanchez", id: 1892038, isTherapist: true },

  { fname: "rick", lname: "jeps", id: 1894024, isTherapist: false },

  { fname: "angie", lname: "lange", id: 1982403, isTherapist: false },

  { fname: "renat", lname: "gros", id: 1894039, isTherapist: true },

  { fname: "bettino", lname: "yang", id: 3789204, isTherapist: true },
];

const createUserListItem = ({ fname, lname }) => {
  const listItem = document.createElement("li");
  listItem.append(`${lname}, ${fname}`);
  listItem.classList.add("user-item");
  return listItem;
};

const body = document.querySelector("body");
const userList = document.createElement("ul");
userList.classList.add("user-list");

for (const user of userData) {
  const userListItem = createUserListItem(user);
  userList.append(userListItem);
}

body.prepend(userList);
