// Task 1: Student Management System

const studentData = [
  {
    id: 1,
    name: 'Rishi',
    department: 'MSC',
    mark: '100'
  },
  {
    id: 2,
    name: 'Suthir',
    department: 'MA',
    mark: '99'
  },
  {
    id: 3,
    name: 'Sarathkumar',
    department: 'MSC',
    mark: '75'
  },
  {
    id: 4,
    name: 'Praveen',
    department: 'BCA',
    mark: '60'
  },
  {
    id: 5,
    name: 'Raj',
    department: 'BSC',
    mark: '78'
  }
]

function findAllName () {
  for (let i = 0; i < studentData.length; i++) {
    console.log(studentData[i].name)
  }
}

findAllName()

function totalMarks () {
  let totalMark = 0
  for (let i = 0; i < studentData.length; i++) {
    totalMark += Number(studentData[i].mark)
  }
  console.log(totalMark)
}

totalMarks()

function findAbove80 () {
  for (let i = 0; i < studentData.length; i++) {
    if (Number(studentData[i].mark) > 80) {
      console.log(studentData[i].name)
    }
  }
}

findAbove80()

function assignGrade () {
  for (let i = 0; i < studentData.length; i++) {
    if (Number(studentData[i].mark) > 90) {
      console.log(studentData[i].name, ' grade is A')
    } else if (Number(studentData[i].mark) > 75) {
      console.log(studentData[i].name, ' grade is B')
    } else if (Number(studentData[i].mark) > 50) {
      console.log(studentData[i].name, ' grade is c')
    } else if (
      Number(studentData[i].mark) > 0 &&
      Number(studentData[i].mark) < 50
    ) {
      console.log(studentData[i].name, ' is Fail')
    } else {
      console.log('Invalid mark')
    }
  }
}

assignGrade()

function showAllStudentData () {
  for (let i = 0; i < studentData.length; i++) {
    console.log(studentData[i].name)
    console.log(studentData[i].department)
    console.log(studentData[i].mark)
    console.log('-------------------')
  }
}

showAllStudentData()

// Task 2: Employee Payroll System

const employees = [
  { id: 101, name: 'Rishi', salary: 45000, department: 'IT' },
  { id: 102, name: 'Priya', salary: 28000, department: 'HR' },
  { id: 103, name: 'Sarath', salary: 55000, department: 'Finance' },
  { id: 104, name: 'Sneha', salary: 32000, department: 'Marketing' }
]

console.log('--- 1.Employee Names ---')
for (let i = 0; i < employees.length; i++) {
  console.log(employees[i].name)
}

let totalSalary = 0
for (let i = 0; i < employees.length; i++) {
  totalSalary += employees[i].salary
}
console.log('\n--- 2.Total Company Salary Expense ---')
console.log('\nTotal Company Salary Expense: ₹' + totalSalary)

console.log('\n--- 3.Employees earning above ₹30,000 ---')
for (let i = 0; i < employees.length; i++) {
  if (employees[i].salary > 30000) {
    console.log(employees[i].name + ' (₹' + employees[i].salary + ')')
  }
}

console.log('\n--- 4.Department Descriptions ---')
for (let i = 0; i < employees.length; i++) {
  let deptInfo = ''
  switch (employees[i].department) {
    case 'IT':
      deptInfo = 'Handles software, networks, and technical support.'
      break
    case 'HR':
      deptInfo = 'Manages recruitment, payroll, and employee welfare.'
      break
    case 'Finance':
      deptInfo = 'Manages company budgets, accounts, and investments.'
      break
    case 'Marketing':
      deptInfo = 'Handles advertising, branding, and social media.'
      break
    default:
      deptInfo = 'General company department.'
  }
  console.log(
    employees[i].name +
      ' belongs to ' +
      employees[i].department +
      ': ' +
      deptInfo
  )
}

function generatePayrollReport (employeeList, callback) {
  console.log('\n--- 4.Starting Payroll Report Generation ---')
  for (let i = 0; i < employeeList.length; i++) {
    callback(employeeList[i])
  }
}

function printPayslip (employee) {
  console.log(
    'PAYSLIP GENERATED: ID ' +
      employee.id +
      ' | Name: ' +
      employee.name +
      ' | Processed Salary: ₹' +
      employee.salary
  )
}

generatePayrollReport(employees, printPayslip)

// Task 3: Online Food Order System

const foodMenu = [
  {
    id: 1,
    foodName: 'Paneer Butter Masala',
    price: 250,
    category: 'North Indian'
  },
  {
    id: 2,
    foodName: 'Masala Dosa',
    price: 120,
    category: 'South Indian'
  },
  { id: 3, foodName: 'Veg Hakka Noodles', price: 180, category: 'Chinese' },
  { id: 4, foodName: 'Chocolate Sizzler', price: 220, category: 'Dessert' }
]

console.log('--- 1.Food Menu Items ---')
for (let food of foodMenu) {
  console.log(food.foodName)
}

let totalMenuValue = 0
for (let food of foodMenu) {
  totalMenuValue += food.price
}
console.log('\nTotal Menu Value: ₹' + totalMenuValue)

console.log('\n--- 3.Premium Food Items (Above ₹200) ---')
for (let food of foodMenu) {
  if (food.price > 200) {
    console.log(food.foodName + ' - ₹' + food.price)
  }
}

console.log('\n--- 4.Category Descriptions ---')
for (let food of foodMenu) {
  let description = ''
  switch (food.category) {
    case 'North Indian':
      description = 'Rich, creamy curries served with flatbreads.'
      break
    case 'South Indian':
      description = 'Light, fermented rice-based dishes served with sambar.'
      break
    case 'Chinese':
      description = 'Wok-tossed noodles and stir-fried starters.'
      break
    case 'Dessert':
      description = 'Sweet treats to end your meal perfectly.'
      break
    default:
      description = 'Delicious food options.'
  }
  console.log(food.category + ': ' + description)
}

function placeOrder (foodItem, quantity, callback) {
  let totalCost = foodItem.price * quantity
  callback(foodItem.foodName, totalCost)
}

function orderConfirmation (name, cost) {
  console.log('\n--- 5.Order Confirmed! ---')
  console.log(
    'Thank you for ordering ' + name + '. Your total bill is ₹' + cost + '.'
  )
}

placeOrder(foodMenu[0], 2, orderConfirmation)

// Task 4: Movie Ticket Booking System

const movies = [
  {
    movieName: 'Baahubali',
    ticketPrice: 200,
    availableSeats: 50,
    language: 'Tamil'
  },
  {
    movieName: 'Jawan',
    ticketPrice: 250,
    availableSeats: 0,
    language: 'Hindi'
  },
  {
    movieName: 'Kantara',
    ticketPrice: 180,
    availableSeats: 15,
    language: 'Kannada'
  },
  {
    movieName: 'Manjummel Boys',
    ticketPrice: 150,
    availableSeats: 8,
    language: 'Malayalam'
  }
]

console.log('--- 1.Currently Showing ---')
for (let movie of movies) {
  console.log(movie.movieName)
}

console.log('--- 2.Calculate total available seats. ---')
let totalSeats = 0
for (let movie of movies) {
  totalSeats += movie.availableSeats
}
console.log('\nTotal Available Seats Across All Movies: ' + totalSeats)

console.log('\n--- 3.Booking Availability Status ---')
for (let movie of movies) {
  if (movie.availableSeats > 0) {
    console.log(
      movie.movieName +
        ': Tickets Available (' +
        movie.availableSeats +
        ' left)'
    )
  } else {
    console.log(movie.movieName + ': HOUSEFULL')
  }
}

console.log('\n--- 4.Language Guide ---')
for (let movie of movies) {
  let region = ''
  switch (movie.language) {
    case 'Hindi':
      region = 'Bollywood Cinema'
      break
    case 'Telugu':
      region = 'Tollywood Cinema'
      break
    case 'Kannada':
      region = 'Sandalwood Cinema'
      break
    case 'Malayalam':
      region = 'Mollywood Cinema'
      break
    default:
      region = 'Indian Regional Cinema'
  }
  console.log(
    movie.movieName + ' is a ' + movie.language + ' movie (' + region + ')'
  )
}

function bookTicket (movie, requestedSeats, callback) {
  if (movie.availableSeats >= requestedSeats) {
    movie.availableSeats -= requestedSeats 
    let amountPaid = movie.ticketPrice * requestedSeats
    callback(true, movie.movieName, requestedSeats, amountPaid)
  } else {
    callback(false, movie.movieName, requestedSeats, 0)
  }
}

function showBookingResult (isSuccess, movieName, seats, cost) {
  console.log('\n--- 5.Ticket Processing System ---')
  if (isSuccess) {
    console.log(
      'SUCCESS! Booked ' +
        seats +
        " seats for '" +
        movieName +
        "'. Paid: ₹" +
        cost
    )
  } else {
    console.log(
      "FAILED! Sorry, not enough seats available for '" + movieName + "'."
    )
  }
}

bookTicket(movies[2], 3, showBookingResult)

bookTicket(movies[1], 2, showBookingResult)



// Task 5: Hospital Patient Records

const patientData = [
  {
    "patientId": "1",
    "patientName": "Arun Kumar",
    "age": 45,
    "disease": "Hypertension"
  },
  {
    "patientId": "2",
    "patientName": "Meena Selvam",
    "age": 32,
    "disease": "Type 2 Diabetes"
  },
  {
    "patientId": "3",
    "patientName": "Karthik Subramaniam",
    "age": 58,
    "disease": "Asthma"
  },
  {
    "patientId": "4",
    "patientName": "Anitha Rajendran",
    "age": 29,
    "disease": "Anemia"
  },
  {
    "patientId": "5",
    "patientName": "Vijay Baskaran",
    "age": 63,
    "disease": "Type 2 Diabetes"
  }
]

function allPatientsName(){
  for(let i = 0 ; i < patientData.length ; i++){
    console.log("Patient Name : " , patientData[i].patientName);
    
  }
}
console.log(`------------1.Name of Patients------------`)
allPatientsName()

console.log(`------------2.No of Patients------------`)
console.log("Total No.of Patient is : ",patientData.length )



function patientAbove60(){
  for(let i = 0 ; i < patientData.length ; i++){
    if(patientData[i].age>60){
      console.log(patientData[i].patientName)
    }
    
  }
}
console.log(`------------3.Patients above age 60------------`)
patientAbove60()


function assignDepartment(){
  for(let i = 0 ; i < patientData.length ; i++){
    switch(patientData[i].disease){
      case "Hypertension":
        console.log(patientData[i].patientName , " need to go Cardiology Deportment")
        break;
      case "Type 2 Diabetes":
        console.log(patientData[i].patientName , " need to go Endocrinology Deportment")
        break;
        case "Asthma":
        console.log(patientData[i].patientName , " need to go Pulmonology Deportment")
        break;
        case "Anemia":
        console.log(patientData[i].patientName , " need to go Hematology Deportment")
        break;
    }
      
  }
}

console.log(`------------4.Assign Department for Patients------------`)
assignDepartment()

console.log(`------------5.Confirm appointment------------`)
function confirmAppointment(name, department) {
  return "Appointment Confirmed: " + name + " is scheduled for the " + department + " department.";
}


function processPatientAppointment(patient, callback) {
  let department = "";


  switch (patient.disease) {
    case "Hypertension":
      department = "Cardiology";
      break;
    case "Type 2 Diabetes":
      department = "Endocrinology";
      break;
    case "Asthma":
      department = "Pulmonology";
      break;
    case "Anemia":
      department = "Hematology";
      break;
    default:
      department = "General Medicine";
  }


  let message = callback(patient.patientName, department);
  console.log(message);
}


for (let i = 0; i < patientData.length; i++) {
  processPatientAppointment(patientData[i], confirmAppointment);
}

//Task 6: Library Management System


const books = [
  {
    "bookId": 101,
    "bookName": "Ponniyin Selvan",
    "author": "Kalki Krishnamurthy",
    "price": 850
  },
  {
    "bookId": 102,
    "bookName": "Thirukkural",
    "author": "Thiruvalluvar",
    "price": 250
  },
  {
    "bookId": 103,
    "bookName": "Sivagamiyin Sapatham",
    "author": "Kalki Krishnamurthy",
    "price": 600
  },
  {
    "bookId": 104,
    "bookName": "Parthiban Kanavu",
    "author": "Kalki Krishnamurthy",
    "price": 450
  },
  {
    "bookId": 105,
    "bookName": "Oru Desathin Kadhai",
    "author": "S. Ramakrishnan",
    "price": 350
  }
];

console.log(`------------1.All book name------------`)
function booksName(){
  for(let book of books){
    console.log(book.bookName)
  }
}


booksName()

console.log(`------------2.Total value ------------`)
function bookValue(){
  let value = 0
  for(let book of books){
      value+= book.price
  }
  console.log("Total price : " , value)
}

bookValue()

console.log(`----3.Books above ₹500 ----`)

function bookAbove500(){
  for(let book of books){
    if(book.price>500){
      console.log("Book with price above 500 is : " , book.bookName);
      
    }
  }
}

bookAbove500()

console.log(`----4.Book categories ----`)
function displayBookInfo(book, category) {
  return "Book: " + book.bookName + " | Author: " + book.author + " | Category: " + category;
}


function categorizeBooks(booksArray, callback) {
  for (let i = 0; i < booksArray.length; i++) {
    let book = booksArray[i];
    let category = "";

    switch (book.bookName) {
      case "Ponniyin Selvan":
      case "Sivagamiyin Sapatham":
      case "Parthiban Kanavu":
        category = "Historical Fiction";
        break;
      case "Thirukkural":
        category = "Philosophy/Ethics";
        break;
      case "Oru Desathin Kadhai":
        category = "Contemporary Literature";
        break;
      default:
        category = "General";
    }

    let result = callback(book, category);
    console.log(result);
  }
}


categorizeBooks(books, displayBookInfo);

console.log(`----5.Book issue system ----`)

function bookIssueSystem(name){
  let found = null
  for(let book of books){
    
    if(book.bookName == name){
      found = "yes"
    }
  }
  if(found == "yes"){
    console.log(name , " is available and delivered successfully");
  }
  else{
    console.log(name , " is not available");
    
  }
}

bookIssueSystem("Thirukkural")


// Task 7: E-Commerce Product Dashboard

const products = [
  { productId: "P1", productName: "Laptop", price: 50000, stock: 5 },
  { productId: "P2", productName: "Mouse", price: 500, stock: 20 },
  { productId: "P3", productName: "Keyboard", price: 1000, stock: 8 },
  { productId: "P4", productName: "Monitor", price: 8000, stock: 15 },
  { productId: "P5", productName: "USB Cable", price: 200, stock: 3 }
];

console.log("------------1.All Product Names------------");
for(let p of products) { console.log(p.productName); }

console.log("\n------------2.Total Inventory Value------------");
let totalVal = 0;
for(let p of products) { totalVal += (p.price * p.stock); }
console.log("Total Value: ₹" + totalVal);

console.log("\n------------3.Low Stock Products (< 10)------------");
for(let p of products) {
  if(p.stock < 10) console.log(p.productName + " (Stock: " + p.stock + ")");
}

function generateReport(product, status) {
  return "Product: " + product.productName + " | Status: " + status;
}

function processInventory(arr, callback) {
  console.log("\n------------4.Product Report------------");
  for(let p of arr) {
    let status = (p.stock < 10) ? "Low Stock" : "Available";
    console.log(callback(p, status));
  }
}
processInventory(products, generateReport);

// Task 8: College Admission System

const applicants = [
  { name: "Arun", age: 19, percentage: 75, department: "CSE" },
  { name: "Meena", age: 17, percentage: 85, department: "ECE" },
  { name: "Suresh", age: 20, percentage: 55, department: "BCA" },
  { name: "Anitha", age: 21, percentage: 92, department: "CSE" }
];

console.log("------------1.Applicant Names------------");
for(let a of applicants) { console.log(a.name); }

function admissionCallback(name, result) {
  return "Applicant: " + name + " | Result: " + result;
}

function checkAdmission(list, callback) {
  console.log("\n------------2.Admission Results------------");
  let eligibleCount = 0;
  for(let a of list) {
    let deptName = "";
    switch(a.department) {
      case "CSE": deptName = "Computer Science"; break;
      case "ECE": deptName = "Electronics"; break;
      case "BCA": deptName = "Applications"; break;
      default: deptName = "General";
    }

    if(a.age >= 18 && a.percentage >= 60) {
      eligibleCount++;
      console.log(callback(a.name, "Eligible for " + deptName));
    } else {
      console.log(callback(a.name, "Not Eligible"));
    }
  }
  console.log("Total Eligible Students: " + eligibleCount);
}
checkAdmission(applicants, admissionCallback);

// Task 9: Bus Reservation System

const passengers = [
  { passengerId: 1, name: "Rishi", seatNumber: 1, ticketPrice: 500, type: "AC" },
  { passengerId: 2, name: "Priya", seatNumber: 5, ticketPrice: 300, type: "Non-AC" }
];

console.log("------------1.Passenger Names------------");
for(let p of passengers) { console.log(p.name); }

let totalColl = 0;
for(let p of passengers) { totalColl += p.ticketPrice; }
console.log("------------2.Total collection------------");
console.log("\nTotal Collection: ₹" + totalColl);

function confirmTicket(name, type) {
  return "Passenger: " + name + " | Bus Type: " + type;
}

function manageBus(list, callback) {
  console.log("\n------------3.Booking Details------------");
  for(let p of list) {
    let busDesc = "";
    switch(p.type) {
      case "AC": busDesc = "Luxury AC Coach"; break;
      case "Non-AC": busDesc = "Standard Coach"; break;
      default: busDesc = "Regular Bus";
    }
    console.log(callback(p.name, busDesc));
  }
}
manageBus(passengers, confirmTicket);


// Task 10: Mobile Store Management

const mobiles = [
  { brand: "Samsung", model: "Galaxy S24", price: 75000, stock: 5 },
  { brand: "Xiaomi", model: "Redmi Note", price: 15000, stock: 20 },
  { brand: "Apple", model: "iPhone 15", price: 85000, stock: 3 }
];

console.log("------------1.Mobile Names------------");
for(let m of mobiles) { console.log(m.model); }

let stockVal = 0;
for(let m of mobiles) { stockVal += (m.price * m.stock); }
console.log("\nTotal Stock Value: ₹" + stockVal);

console.log("\n------------3.Premium Models (> ₹20k)------------");
for(let m of mobiles) {
  if(m.price > 20000) console.log(m.model + " - ₹" + m.price);
}

function salesReport(model, category) {
  return "Model: " + model + " | Category: " + category;
}

function generateMobileReport(list, callback) {
  console.log("\n------------4.Sales Report------------");
  for(let m of list) {
    let cat = "";
    switch(m.brand) {
      case "Samsung": cat = "Android Premium"; break;
      case "Apple": cat = "iOS Luxury"; break;
      default: cat = "Budget";
    }
    console.log(callback(m.model, cat));
  }
}
generateMobileReport(mobiles, salesReport);