import groups from "./data.js";

console.log("groups: ", groups);

//3 challenge

//filter by room
console.log(findGroupsByRoom(groups, "102"));

function findGroupsByRoom(arr, roomNo) {
  const filteredGroups = arr.filter((group) => {
    return group.room === roomNo;
  });

  return filteredGroups;
}

//sort by students count
const sortByStudents = (arr) => {
  //sort vs. toSorted
  const sortedGroups = arr.toSorted((group1, group2) => {
    return group1.students - group2.students;
  });

  return sortedGroups;
};

console.log("sorted: ", sortByStudents(groups));

//find group by id
const findGroupById = function (arr, id) {
  const found = arr.find((group) => {
    return group.id === id;
  });

  return found;
};

console.log("found by id: ", findGroupById(groups, 4));
