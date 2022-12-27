var cl = console.log;

var stdArray = [{
    fname: "Tony",
    lname: 'Stark',
    nickName: 'Ironman',
    email: 'tony@stark.com'
},
{
    fname: "Peter",
    lname: 'Parkar',
    nickName: 'SpiderMan',
    email: 'peter@stark.com'
},
{
    fname: "Bruce",
    lname: 'Wayne',
    nickName: 'BatMan',
    email: 'bruce@wayne.com'
},
{
    fname: "Stephen",
    lname: 'Strange',
    nickName: 'Dr. Strange',
    email: 'dr@strange.com'
},
]

//To get the first name from the first array
cl(stdArray[0].fname);
cl(stdArray[0].nickName);

//to get the string
for (var i = 0; i < stdArray.length; i++) {
    cl(stdArray[i])
}

//To get only a particular value from the array
for (var i = 0; i < stdArray.length; i++) {
    cl(stdArray[i].fname + " " + stdArray[i].lname)
}

// Sir's Example -
// stdArray.forEach(function (stdObj, index){
//     //cl('${stdObj.fname} ${stdObj.lname}')
//     result += '<tr>
//                     <td>${index + 1}</td>
//                     <td>${stdObj.fname}</td>
//                     <td>${stdObj.lname}</td>
//                     <td>${stdObj.nickName}</td>
//                     <td>${stdObj.email}</td>
//                 </tr>'
// })

// stdInfoContainer.innerHTML = result;

//forEach
var stdInfoContainer = document.getElementById("stdInfoContainer");
result = "";

stdArray.forEach(function(stdInfo, index){
    // cl(`${stdInfo.fname} ${stdInfo.lname}`)
    result += `<tr>
                <td>${index + 1}</td>;
                <td>${stdInfo.fname}</td>;
                <td>${stdInfo.lname}</td>;
                <td>${stdInfo.nickName}</td>;
                <td>${stdInfo.email}</td>;
             </tr>`
})

cl(result);
var stdInfoContainer = result;

var elements = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];

var elementsArray = document.getElementById('elementsArray');

result = '';
elements.forEach(function(element, index){
    result += 
        `<tr>
            <td>${index + 1}</td>
            <td>${element.name}</td>
            <td>${element.weight}</td>
            <td>${element.symbol}</td>
        </tr>`
})

cl(result);
elementsArray.innerHTML = result;

var books = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];

var booksinfo = document.getElementById("booksinfo")
result="";

books.forEach(function(book,index){
    result+=
        `<tr>
            <td>${index + 1}</td>
            <td>${book.author}</td>
            <td>${book.title}</td>
            <td>${book.libraryID}</td>
        </tr>`
})

cl(result);
booksinfo.innerHTML=result;

var countries =
[
    {
        "name": "USA",
        "population": 331002651,
        "area": 9833520,
        "capital": "Washington, D.C.",
        "language": "English"
    },
    {
        "name": "Canada",
        "population": 37411047,
        "area": 9984670,
        "capital": "Ottawa",
        "language": "English and French"
    },
    {
        "name": "Mexico",
        "population": 127575529,
        "area": 1964375,
        "capital": "Mexico City",
        "language": "Spanish"
    },
    {
        "name": "France",
        "population": 66710000,
        "area": 640679,
        "capital": "Paris",
        "language": "French"
    },
    {
        "name": "Germany",
        "population": 82790000,
        "area": 357114,
        "capital": "Berlin",
        "language": "German"
    }
]

var countryInfo=document.getElementById('countryInfo');
result="";
countries.forEach(function(country,index){
    result+=
        `<tr>
            <td>${index+1}</td>
            <td>${country.name}</td>
            <td>${country.population}</td>
            <td>${country.area}</td>
            <td>${country.capital}</td>
            <td>${country.language}</td>
        </tr>`;
});
cl(result);
countryInfo.innerHTML=result;

var mobiles=
[
    { name: 'Apple iPhone 12', price: 999, color: 'Black', storage: 128, camera: 'Dual-lens' },
    { name: 'Samsung Galaxy S21', price: 849, color: 'White', storage: 128, camera: 'Triple-lens' },
    { name: 'Google Pixel 4a', price: 349, color: 'Black', storage: 64, camera: 'Single-lens' },
    { name: 'OnePlus 8T', price: 799, color: 'Aquamarine Green', storage: 128, camera: 'Quad-lens' },
    { name: 'Huawei P40 Pro', price: 799, color: 'Silver Frost', storage: 256, camera: 'Quad-lens' }
]

var cellphoneDetails=document.getElementById("cellphoneDetails");
result="";
mobiles.forEach(function(cellphone,index){
    result+=
        `<tr>
            <td>${index+1}</td>
            <td>${cellphone.name}</td>
            <td>${cellphone.price}</td>
            <td>${cellphone.color}</td>
            <td>${cellphone.storage}</td>
            <td>${cellphone.camera}</td>
        </tr>`;
});
cl(result);
cellphoneDetails.innerHTML=result;

//Example 1.
var staffsDetails = [
    { name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
    { name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
    { name: "Chris Colt", age: 37, salary: 3700, currency: "USD" },
    { name: "Jane Doe", age: 24, salary: 4200, currency: "USD" }
  ];

var staffDetails=document.getElementById("staffDetails");
result='';
staffsDetails.forEach(function(details, index){
    result+=
        `<tr>
            <td>${index + 1}</td>
            <td>${details.name}</td>
            <td>${details.age}</td>
            <td>${details.salary}</td>
            <td>${details.currency}</td>
        </tr>`
})
cl(result);
staffDetails.innerHTML=result;