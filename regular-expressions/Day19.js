// https://www.geeksforgeeks.org/write-regular-expressions/

// Activity 1: Basic Regular Expressions

const text = "JavaScript is a powerful language.";
const pattern = /JavaScript/g;

const matches = text.match(pattern);

if (matches) 
    console.log('Matches found:', matches); 
else 
    console.log('No matches found.');

const text2 = "The prices are 123 dollars, 45 cents, and 6789 in total.";
const pattern2 = /\d+/g; // '\d+' matches one or more digits
    
const matches2 = text2.match(pattern2);

if (matches2) {
    console.log('Matches found:', matches2);
} else {
    console.log('No matches found.');
}
    
// Activity 2: Character Classes and Quantifiers

const text3 = "Hello world! JavaScript is Awesome and very Interesting.";
const pattern3 = /\b[A-Z][a-zA-Z]*\b/g;

const matches3 = text3.match(pattern3);

console.log('Matches found:', matches3);
    
const text4 = "The prices are 123 dollars, 45 cents, and 6789 in total.";
const pattern4 = /\d+/g;

const matches4 = text4.match(pattern4);

console.log('Matches found:', matches4);

// Activity 3: Grouping and Capturing

const text5 = "(123) 456-7890";
const pattern5 = /\((\d{3})\)\s(\d{3})-(\d{4})/;

const match5 = text5.match(pattern5);

if (match5) {
    const [, areaCode, centralOfficeCode, lineNumber] = match5;
    console.log('Area Code:', areaCode);
    console.log('Central Office Code:', centralOfficeCode);
    console.log('Line Number:', lineNumber);
} else {
    console.log('No match found');
}

const email = "anuj@example.com";
const pattern6 = /^([^@]+)@([^@]+\.[a-zA-Z]{2,})$/;

const match6 = email.match(pattern6);

if (match6) {
    const [, username, domain] = match6;
    console.log('Username:', username);
    console.log('Domain:', domain);
} else {
    console.log('No match found');
}

// Activity 4: Assertions and Boundaries

const text7 = "word is the beginning of this string";
const pattern7 = /^word\b/;

const match7 = text7.match(pattern7);

if (match7) {
    console.log('Match found:', match7[0]);
} else {
    console.log('No match found');
}

const text8 = "This is the end word";
const pattern8 = /word\b$/;

const match8 = text8.match(pattern8);

if (match8) {
    console.log('Match found:', match8[0]);
} else {
    console.log('No match found');
}

// Activity 5: Practical Applications

function validatePassword(password) {
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isValid = pattern.test(password);
    
    if (isValid) {
        console.log('Password is valid.');
    } else {
        console.log('Password is invalid.');
    }
}

validatePassword("Password1!");
validatePassword("password");

function validateURL(url) {
    const pattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-]*)*(\?[;&=\w%+.-]*)?(#[\w-]*)?$/;
    const isValid = pattern.test(url);
    
    if (isValid) {
        console.log('URL is valid.');
    } else {
        console.log('URL is invalid.');
    }
}

validateURL("https://www.example.com/path?query=123#fragment");
validateURL("http://example");




