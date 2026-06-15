// Task 1: Traffic Signal Management
let signal = "Red";

switch (signal) {
  case "Red":
    console.log("Stop");
    break;

  case "Yellow":
    console.log("Get Ready");
    break;

  case "Green":
    console.log("Go");
    break;

  default:
    console.log("Invalid Signal");
}

// Task 2: Employee Attendance Report
for (let i = 1; i <= 30; i++) {
  console.log(`Employee ${i} Present`);
}

//Task 3: ATM Cash Withdrawal
let balance = 10000;

while (balance > 0) {
  balance -= 500;
  console.log(`Remaining Balance: ${balance}`);
}


//Task 4 College Admission Eligibility
let age = 20;
let percentage = 75;
let entrancePassed = true;

if (age >= 18) {
  if (percentage >= 70) {
    if (entrancePassed) {
      console.log("Admission Approved");
    } else {
      console.log("Rejected: Entrance Exam Not Passed");
    }
  } else {
    console.log("Rejected: Percentage Below 70");
  }
} else {
  console.log("Rejected: Age Below 18");
}

//Task 5: Food Delivery Status
function delivery(customerName, foodItem, deliveryAddress) {
 console.log(`${customerName}, your ${foodItem} will be delivered to ${deliveryAddress}.`);}
delivery("Kannan", "Pizza", "Chennai");


//Task 6: Salary Processing System
function calculateSalary(basic) {
  return basic;
}
function calculateBonus(salary) {
  return salary + salary * 0.1;
}
let salary = calculateSalary(50000);
let finalSalary = calculateBonus(salary);

console.log(finalSalary);

// Task 7:E-commerce Discount Engine
function applyDiscount(amount, callback) {
  let discounted = amount - amount * 0.1;
  callback(discounted);
}
function generateInvoice(finalAmount) {
  console.log(`Final Amount: ${finalAmount}`);
}
applyDiscount(5000, generateInvoice);

//Task 8:Promotional Offers
function* promotionalOffers() {
  yield "10% OFF";
  yield "20% OFF";
  yield "Free Delivery";
  yield "Buy 1 Get 1";
}
let offers = promotionalOffers();
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);

//Task 9: Student Database Merge
let scienceStudents = ["Arun", "Kavin", "Priya"];
let commerceStudents = ["Rahul", "Meena", "John"];

let studentDatabase = [...scienceStudents, ...commerceStudents];

console.log("Merged Student Database:");
console.log(studentDatabase);


// Task 10: Online Exam System
function calculateMarks(studentName, ...marks) {
  let total = 0;
  for (let mark of marks) {
    total += mark;
  }
  console.log("Student Name:", studentName);
  console.log("Total Marks:", total);
}
calculateMarks("Kannan", 85, 90, 78, 88, 95);
//---Task 11------
let employee={name:"jero",
    Department:"IT",
    salary1:50000,
    experience:5};
    let {name,Department,salary1,experience}=employee;
    console.log(name);
    console.log(Department);
    console.log(salary1);
    console.log(experience);

    //--Task12---
    let products=[{name:"laptop",price:30000,category:"electronics"},
{name:"phone",price:2000,category:"electronics"},
{name:"tablet",price:1000,category:"electronics"},
    ];
let expensiveProduct=products.filter(function(product){return product.price>5000;});
console.log("products with price greater than 5000:");
console.log(expensiveProduct);

//---Task 13-----

let customers = [
    { name: "jero", purchase: 20000 },
    { name: "kanna", purchase: 60000 },
    { name: "Viji", purchase: 80000 }
];

let premiumCustomer = customers.find(function(customer) {
    return customer.purchase > 50000;
});

console.log(premiumCustomer);
//---Task 14---
let expenses = [1000, 2000, 3000, 4000];

let totalExpense = expenses.reduce(function(total, expense) {
    return total + expense;
});

console.log("Total Expense: ₹" + totalExpense);

//---Task 15---

let players = [
    {name:"jero",age:20},
    {name:"kanna",age:13},
    {name:"Viji",age:19},
    {name:"Alice",age:25}
];

let result = players.every(function(age) {
 
    return players.age > 18;
});

console.log(result);

console.log(result);
//---Task 16---
let candidates = [
    { name: "Jero", skill: "Java" },
    { name: "Kanna", skill: "React" },
    { name: "Viji", skill: "Python" }
];

  let result1 = candidates.some(function(candidate) {
    return candidate.skill === "React";
});

console.log(result1);
//Task 17---
let mobile = "9876543210";

if (
    mobile.length === 10 &&
    (mobile.startsWith("6") ||
     mobile.startsWith("7") ||
     mobile.startsWith("8") ||
     mobile.startsWith("9"))
) {
    console.log("Valid Mobile Number");
} else {
    console.log("Invalid Mobile Number");
}
//---Task 18---
let title = "Learn JavaScript Complete Course";

let slug = title
    .toLowerCase()
    .split(" ")
    .join("-");

console.log(slug);
//---Task 19---
let employees = [
    { name: "Jero", salary: 30000 },
    { name: "Kanna", salary: 50000 },
    { name: "Viji", salary: 40000 }
];

// Highest to Lowest
employees.sort(function(a, b) {
    return b.salary - a.salary;
});

console.log("Highest to Lowest");
console.log(employees);

// Lowest to Highest
employees.sort(function(a, b) {
    return a.salary - b.salary;
});

console.log("Lowest to Highest");
console.log(employees);
//---Task 20---
let movies = ["Leo", "Jailer", "Vikram"];

let bookingIds = movies.map(function(movie, index) {
    return "BOOK" + (index + 1) + " - " + movie;
});

console.log(bookingIds);