#  Money Converter App

A simple currency converter built with [HTML/CSS/JS or React].

##  Features
- Convert from one currency to another using live rates
- Easy-to-use input fields
- Responsive design

##  Tech Stack
- HTML, CSS, JavaScript / React
- ExchangeRate API

##  What I Learned
- Working with APIs
- Fetching and displaying data 
- DOM manipulation / React state handling


## OUTPUT OF THIS CODE


<img width="833" height="754" alt="Screenshot (95)" src="https://github.com/user-attachments/assets/693542ce-9003-4803-9cbc-88b1e90bc994" />


## WHAT I LEARNED FROM THIS CODE 

1)        a.   const [inr, setInr] = useState("");
          b.   const [usd, setUsd] = useState(null);
          c.       const exchangeRate = 0.012; 

a.  This line uses the React hook useState to declare a state variable named inr and a function to update it called setInr.
Initial value:
The initial value of inr is an empty string "".
Purpose:
 inr might hold input from a user — for example, an amount of Indian Rupees entered into a form.

b.   it declares a state variable named usd and an updater function called setUsd.
Initial value:
The initial value of usd is null, indicating that initially, there's no USD value set.
Purpose:
It can be used to hold the converted value in USD based on the INR amount and exchange rate.


c.      This line declares a constant named exchangeRate and assigns it a value of 0.012.
Meaning:
It likely represents the conversion rate from INR to USD. So, 1 INR equals approximately 0.012 USD.



