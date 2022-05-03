## Cart:-

We now need to create our cart feature in our application. To start, we'll create our cartIcon and cartDropdown components. Then we'll create the necessary reducer, actions, and types associated to handling hiding and showing the carDropdown component.

## Redux:-

We have added redux to our application so we can leverage all the benefits that come with uni-directional data flow. Instead of the prop drilling we would have to do in order to pass our new user object down deeper into our component trees from our app, we can now just connect those components directly to our redux store where we store all our data.

- i want to separate all our business logic in our selectors. In this lesson we add a new selector to show our total count of items.
- I want to be able to remove the item from the cart if the user doesn't want it anymore during checkout so we're going to add the appropriate action and case in our cart reducer.
- We don't want our users to lose their carts whenever they refresh, so we are going to leverage one of the benefits of redux by persisting our store object in localstorage using redux-persist.

➡️ I have now created the collection page and converted our shop items data over from an array to an object to better leverage our url parameters! Converting arrays       over to objects to store data is called data-normalization and it makes searching for specific elements in our code much easier and efficient!

➡️ I don't want our users to lose their carts whenever they refresh, so we are going to leverage one of the benefits of redux by persisting our store object in           localstorage using redux-persist.

➡️ In this section, I am going to introduce our stripe integration and create a stripe button to help us leverage the stripe checkout library. Stripe is an excellent service that allows us to massively simplify our checkout flow, which would otherwise be incredibly complicated.

➡️ We are now adding styled-components to explore CSS-in-JS. We convert over our Homepage component, Header component and CustomButton component to use styled-components instead of scss.

➡️ I've moved our shop data into our firestore database, now we need to modify our application in such a way that considers our data being loaded asynchronously. We have created a WithSpinner HOC as well as modified our shop to initialize the call for data.

➡️ I have added some media query styles to our styled components, try as an exercise to convert the appropriate pages to be mobile responsive!

➡️ I moved  shop data into our firestore database, now we need to modify our application in such a way that considers our data being loaded asynchronously.and I  created a WithSpinner HOC as well as modified our shop to initialize the call for data.

upcomming :-
hosting 404 contact , loding , 

### yarn add (You can specify versions using one of these)

```
yarn add package-name
yarn add package-name@1.2.3
yarn add package-name@tag

```
