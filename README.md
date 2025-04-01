## Welcome to the technical part of the interview! Congratulations for making it here.

### Scenario: Shopping Cart 🛒

- A client has asked you to build a checkout system for a shop which sells home furniture.

- You can find the list of products and their prices in `/src/products.json`.

- Your task is to create an API endpoint that can take in item `id`s and return the total cost. The endpoint should accept a POST request.

- For example,

| Endpoint        | Request                 | Response            |
| --------------- | ----------------------- | ------------------- |
| POST /api/total | { "items": ["1"] }      | { "total": 7.99 }   |
| POST /api/total | { "items": ["2", "3"] } | { "total": 224.98 } |

- The above example takes in a list of strings, however, feel free to structure your requests in any way you'd like.

- Think about edge cases and how you would handle them e.g. an empty list, null values, invalid items etc.

- Run the app by running `npm run dev` (install the dependencies first by running `npm i`). It's a good idea to do this before writing any code just to check everything is working.

- Run unit tests with `npm test`.

- We recommend using a tool such as Postman to manually test your solution.

#### Advice

- We understand that you only have an hour to do this and thus we would rather you write good quality code even if it means you do not finish the exercise rather than rush to get it done at the expense of code quality.

- As well as code quality, try to think about unit tests, extensibility and maintainability.

#### Good luck!
