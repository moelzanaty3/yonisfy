---
title: "React Router"
showMetadata: true
editable: true
showToc: true
order: 1
tocDepth: 3
---

## React Router

### What is routing?

Routing is the capacity to show different pages to the user. That means the user can move between different parts of an application by entering a URL or clicking on an element.

As you may already know, by default, React comes without routing. And to enable it in our project, we need to add a library named react-router.

To install it, you will have to run the following command in your terminal:

```shell
yarn add react-router-dom
```

Now, we've successfully installed our router, let's start using it in the next section.

### Setting up the router

To enable routing in our React app, we first need to import BrowserRouter from react-router-dom.

In the `index.js` file, enter the following:

```jsx
import App from './App'
import './assets/styles/App.css'
import './assets/styles/index.css'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(<App />, document.getElementById('root'))
/**
 * This should hold everything in our app where
 * routing is needed. That means, if we need routing
 * in our entire app, we must wrap our higher component
 * with BrowserRouter.
 * 
 * By the way, you don't have to rename BrowserRouter as Router
 * as I do here, I just want to keep things readable.
 * A router alone doesn't do much. So let's add a route
 */
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
```

This should hold everything in our app where routing is needed. That means, if we need routing in our entire app, we must wrap our higher component with `BrowserRouter`.

By the way, you don't have to rename `BrowserRouter as Router` as I do here, I just want to keep things readable.

A router alone doesn't do much. So let's add a route in the next section.

### Rendering routes

To render routes, we have to import the Route component from the router package.

In the snippet below

```jsx
import React from "react";

export default function App() {
  return (
    <Router>
      <main>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
    <Route path="/" render={() => <h1>Hello Zanaty!</h1>} />
      </main>
    </Router>
  );
}
```

Then, add it where we want to render the content. The Route component has several properties. But here, we just need path and render.

`path:` the path of the route. Here, we use `/` to define the path of the home page.

`render:` will display the content whenever the route is reached. Here, we'll render a welcome message to the user.

In some cases serving routes like that is perfectly fine. But imagine a case when we have to deal with a real component – using render may not be the right solution.

So, how can we display a real component? Well, the Route component has another property named component.

In your `App.js` file, add the following code:

```jsx
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { deleteProduct, getAllProduct } from './api/ProductAPI'
import ProductList from './containers/ProductList'

const ProductDetails = () => {
  return <>Product Details</>
}

class App extends Component {
  state = {
    products: []
  }

  // code ... 

  render() {
    return (
      <div>
        {/*
          path: the path of the route. Here, we use / to define the path of the home page.
          render: will display the content whenever the route is reached.
        */}
        <Route
          path="/"
          exact
          render={() => (
            <ProductList
              products={this.state.products}
              onDeleteProduct={this.handleDeleteProduct.bind(this)}
            />
          )}
        />
        <Route path="product/:id" component={ProductDetails} />
        <Route render={() => <h1>404: page not found</h1>} />
      </div>
    )
  }
}

export default App
```

you can check the new code at this state

💎 [4b4a9ecae669f1cb12e0c9a6797e2fe1d490edc8](https://github.com/mohammedelzanaty/react-redux-guide-with-zanaty/commit/4b4a9ecae669f1cb12e0c9a6797e2fe1d490edc8).

Now we have the router working (but still have an issue)! Try navigating to `http://localhost:3000/` and then to `http://localhost:3000/product/1`. Both should work … sort of!

React Router has a ton of features that we're not going to explain here. The docs do a great job.
The `:id` part is a variable. In `http://localhost:3000/product/1`, 1 would be the variable.
The killer feature of React Router is that it's really accessible. It manages things like focus so you don't have to. Pretty great. On the Product Details page, notice that both pages render. It has to do with how React Router does routes.

React Router will render all components that the path match.

React Router does partial matches.
**The URL** `/engineer/mohammed/elzanaty` will match the paths `/`, `/engineer`, `/engineer/mohammed` and `/engineer/mohammed/elzanaty`. It will not match `/mohammed`, `/mohammed/elzanaty`, or `/engineer/elzanaty`.
So let's make it match only one path with a component called Switch.

In your `App.js` file, add the following code:

```jsx
import React, { Component } from 'react'
import { Route, Switch, Redirect, Link } from 'react-router-dom'
import { deleteProduct, getAllProduct } from './api/ProductAPI'
import ProductList from './containers/ProductList'
import ProductDetails from './containers/ProductDetails'

class App extends Component {
  state = {
    products: []
  }

  // code ... 

  render() {
    return (
      <div>
        {/*Switch to tell to React Router to load only one route at a time*/}
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <ProductList
                products={this.state.products}
                onDeleteProduct={this.handleDeleteProduct.bind(this)}
              />
            )}
          />
          <Route exact path="/product/:id" component={ProductDetails} />
          <Route
            path="/404"
            render={() => (
              <div className="page-not-found">
                <h1>404: page not found</h1>
                <Link to="/">Home</Link>
              </div>
            )}
          />
          <Redirect to="/404" />
          <Route />
        </Switch>
      </div>
    )
  }
}

export default App
```

Now notice it only renders one page at a time.

So now let's make the two pages link to each other. Go to `ProductDetails.js`.

```jsx
// at top
import { Link } from "react-router-dom";

// change wrapping <a>
// code....
<Link to={`product/${product.id}`}>
          <h3 className="product-title">{product.title}</h3>
</Link>
// code....
```

you can check the new code at this state

💎 [edf68fe2b6f244f4dd7793780469a66a8866b4c1](https://github.com/mohammedelzanaty/react-redux-guide-with-zanaty/commit/edf68fe2b6f244f4dd7793780469a66a8866b4c1).

Why did we change this? Didn't the `<a>` work? It did but with a flaw: every link you clicked would end up in the browser navigating to a whole new page which means React would totally reload your entire app all over again. With `<Link>` it can intercept this and just handle that all client-side. Much faster and a better user experience.

Now each result is a link to a product details page! And that id is being passed as a prop to Details. Try replacing the return of Details with:

```jsx
import React, { Component } from 'react'
import { getProductById } from '../api/ProductAPI'
import { Link } from 'react-router-dom'

class ProductDetails extends Component {
  state = {
    product: {}
  }

  componentDidMount() {
    // get product
    const productId = this.props.match.params.id
    getProductById(productId).then(product => {
      this.setState({ product })
    })
  }

  render() {
    return <div>Product Details</div>
    return (
      <div>
        <Link className="close-product-details" to="/">
          Close
        </Link>
        <pre>
          <code>{JSON.stringify(this.state.product, null, 2)}</code>
        </pre>
      </div>
    )
  }
}
```

you can check the new code at this state

💎 [ba46061c9cd24866923cee46fe2880dc896f5754](https://github.com/mohammedelzanaty/react-redux-guide-with-zanaty/commit/ba46061c9cd24866923cee46fe2880dc896f5754).