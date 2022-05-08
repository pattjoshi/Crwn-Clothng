# Crwn-Clothing

## A E-Commerce website which built with React JS, styled-component , and redux. Back-end use firebase. Stripe API use for payment. You can sign in with your Google Account or email or password . Click demo to try it by yourself! .

# Images:-
## Home page :-
<img width="933" alt="image" src="https://user-images.githubusercontent.com/78966839/167308488-d7360e6d-7a6c-4a8d-b330-b172c8801c0f.png">

## Shop page :-
<img width="944" alt="image" src="https://user-images.githubusercontent.com/78966839/167308501-249d327f-82d6-400b-9f98-affab486f10c.png">

## In side database :-
<img width="940" alt="image" src="https://user-images.githubusercontent.com/78966839/167308506-95d92ceb-69d6-4506-a7eb-39e42eed3b50.png">

## 404 Error page:- 
<img width="957" alt="image" src="https://user-images.githubusercontent.com/78966839/167311291-47ca6aa9-252a-40c8-af2c-b1d58c54b91e.png">

## Video:-



https://user-images.githubusercontent.com/78966839/167311319-d51b3940-45aa-4a34-8e06-2f1ce62c7c7d.mov


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

➡️ I m' using redux-thunk for asynchronous event handling! We have modified our collections-page collections-overview components to use the container pattern to separate their loading logic out of our shop component, and into their own isolated files.

➡️ If the user entry garbage thing in URL the Return 404 Error page.

➡️ You can sign in with your Google Account and and e_mail password. 

➡️ if the user is already login then sign in page is not show.

### How to Host React website on Forebase Alo stape 
```
npm install -g firebase-tools
yarn build
firebase login
firebase init
firebase deploy
```
<img width="656" alt="image" src="https://user-images.githubusercontent.com/78966839/166789239-38bbfee0-5043-417b-9350-877ea6ba70f3.png">

### yarn add (You can specify versions using one of these)

```
yarn add package-name
yarn add package-name@1.2.3
yarn add package-name@tag

```
🙏 If you find this repo helpful then don't forget to give a star ❇️ to this repository. :)
