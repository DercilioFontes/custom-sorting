var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

students.sort(function sortbyNamebyAge(first, second) {
  if (first.name < second.name) {
    return -1;
  } else if (first.name === second.name) {
    return first.age - second.age;
  } else {
    return 1;
  }
});

console.log(students);

//Write a sorting function (sometimes called a custom comparator), that sorts the above array first by the name ascending alphabetically, and in cases where the names are equal sort by descending age.


// http://www.javascriptkit.com/javatutors/arraysort.shtml
// When such a function is passed into array.sort(), the array elements are sorted based on the relationship between each pair of elements "a" and "b" and the function's return value. The three possible return numbers are: <0 (less than 0), 0, or >0 (greater than 0):

// Less than 0: Sort "a" to be a lower index than "b"
// Zero: "a" and "b" should be considered equal, and no sorting performed.
// Greater than 0: Sort "b" to be a lower index than "a".