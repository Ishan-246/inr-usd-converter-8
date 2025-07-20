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


A) const [inr, setInr] = useState("") =

  This line uses the React hook useState to declare a state variable named inr and a function to update it called setInr.
Initial value:
The initial value of inr is an empty string "".
Purpose:
 inr might hold input from a user — for example, an amount of Indian Rupees entered into a form.

  
  B) const [usd, setUsd] = useState(null);  =
  
  it declares a state variable named usd and an updater function called setUsd.
Initial value:
The initial value of usd is null, indicating that initially, there's no USD value set.
Purpose:
It can be used to hold the converted value in USD based on the INR amount and exchange rate.


C) const exchangeRate = 0.012; =

This line declares a constant named exchangeRate and assigns it a value of 0.012.
Meaning:
It likely represents the conversion rate from INR to USD. So, 1 INR equals approximately 0.012 USD.


D)   const convertCurrency = () => {   =

Defines a function convertCurrency that performs the currency conversion when called.



E)     const result = (parseFloat(inr) * exchangeRate).toFixed(2); =

Converts the string inr to a floating-point number using parseFloat.
Multiplies this number by exchangeRate to get the equivalent USD amount.
Uses .toFixed(2) to round the result to two decimal places, ensuring a proper currency format.
The value is stored in the variable result.


F)      setUsd(result);  =
Updates the usd state with the calculated result.


G)     return (
    <div className="App"> =
    
Begins the JSX return statement, rendering a div with the class name App as the container of the UI.


I)       <h2>INR ➜ USD Converter 💱   </h2> =

Displays a header/title for the app indicating its purpose.


J)          <input type="number"// 
        placeholder="Enter amount in ₹"
        value={inr}
        onChange={(e) => setInr(e.target.value)}
      /> =
      
Adds a number input box:
type="number" restricts input to numeric values.
The comment // appears to be accidental or misplaced.
placeholder="Enter amount in ₹" shows placeholder text guiding users.
value={inr} binds the input value to the inr state.
onChange={(e) => setInr(e.target.value)} updates the inr state whenever the user types, by capturing the input's current value.


K)        <button onClick={convertCurrency}>Convert</button>  =

Renders a button labeled "Convert".
When clicked, it executes the convertCurrency function to perform conversion.


L)        <button onClick={convertCurrency}>Convert</button>  =

Renders a button labeled "Convert".
When clicked, it executes the convertCurrency function to perform conversion.


M)       {usd && <p>USD: ${usd}</p>} =

Conditionally renders a paragraph displaying the USD value:
If usd has a truthy value (i.e., not null or 0), it shows "USD: $<value>".
Uses JSX expression {usd && ...} for conditional rendering.


N)       </div>
  );
}
Closes the div and the return statement of the React component.
jsx

export default App;
Exports the App component as the default export, making it available to be imported in other files.
