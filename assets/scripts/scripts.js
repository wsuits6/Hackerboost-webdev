let A = 1;
let B = 2

// Addition
console.log("Addition:", A + B)

// Subtraction
console.log("Subtraction:", A - B)

// Multiplication
console.log("Multiplication:", A * B)

// Modulus
console.log("Modulus:", B % A)

// Increment
console.log("Increment");
console.log("First value of A:", A)
A++;
console.log("Value of A after increment:", A)


// Decrement
console.log("Decrement");
console.log("First Value of B:", B)
B--;
console.log("value of B after drement",B)

console.log("=======================================")
console.log("Comparison Operator")
console.log("New Values of A and B")
A = 1
B = 2

console.log("A is Equal to:", A)
console.log("B is Equal to:", B)

console.log("====================")

//Equal operator
console.log(A == B)
console.log("A is not eqaul (==)  to B")

//Not Equal To Operator 
console.log(B != A)
console.log(" B is NOT equal to A")


//less than Oprator 
console.log(A < B)
console.log("A is less  than B")

console.log(B < A)
console.log("B is not equalt to A")


//Greater than Operator 
console.log(B > A)
console.log("B is Greater than A")
console.log(A > B)
console.log("A is not greater than B")


//Greater than or equal to operator 
console.log(B >= A)
console.log(A >= B)

//Less than or equal to 
console.log(B <= A)
console.log(A <= B)


/**Animations Javascripts */
const elements = document.querySelectorAll('.fade-in');

const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('show');
    });
});

elements.forEach(el => obs.observe(el));
