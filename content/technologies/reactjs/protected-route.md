---
title: "Protected Route"
showMetadata: true
editable: true
showToc: true
order: 3
---

<iframe width="100%" height="600" src="https://www.youtube.com/embed/BmBupjGJcaU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Protected routes and authentication with React

One of the project I build these days, I find my self need to protect certain routes in my application from users who don't have access to and need a proper authentication. though react router doesn't provide a specific functionality for this, because it was build with composability in mind, adding it is fairly straight forward.

Before we even go about creating our protected routes, we’ll need a way to figure out if the user is authenticated. so we need to give access to the user which has only access to.

so there's a starter code for this tutorial feel free to download, clone it into your local machine and you will find link in the description below.

Now the idea is that anyone will be able to access /public (and therefore see the Public component), but eventually, anyone who tries to access /protected who isn’t authenticated, will get redirected to /login.

So naturally, the next step is to render a Route with a path of /protected. The problem is that by rendering a normal Route, anyone will be able to access it, which obviously isn’t what we want.

It would be nice if, just like React Router v4 gives us a Route component, they also gave us a PrivateRoute component which would render the component only if the user was authenticated.

```javascript
<Route path="/public" component={Public} />
<Route path="/login" component={Login} />
<PrivateRoute path='/protected' component={Protected} />
```

Unfortunately, they don’t. However, the good news is that Route is composable. That means wee can create our PrivateRoute implementation which handles our own specific use cases.

Here are the requirements for our PrivateRoute component.

It has the same API as `<Route />`.
It renders a `<Route />` and passes all the props through to it.
It checks if the user is authenticated. If they are, it renders the “component” prop. If not, it redirects the user to /login.
With those requirements in mind, let’s build it out.

```javascript
// Requirement 1.
// It has the same API as <Route />

const PrivateRoute = ({ component: Component, ...rest }) => (

)
// Requirement 2.
// It renders a <Route /> and passes all the props through to it.

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={} />
)

// Requirement 3.
// It checks if the user is authenticated, if they are,
// it renders the "component" prop. If not, it redirects
// the user to /login.

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)
```

At this point, everything works great. When a user who isn’t authenticated tries to go to /protected, they’re redirected to /login. Then once they’re authenticated, they can access /protected.

There is one more addition we can make to make the UX a little better. You’ve probably experienced this very common UX fail before. You try to access a specific page, it redirects you to the login page, you authenticate, then, instead of taking you back to the initial page you were trying to access, it takes you to a completely unrelated page. Instead of being taken to an unrelated page, you should have been taken back to the initial page you were trying to access before you were redirected. At this point in our code, we’re also committing that UX fail. Let’s fix it.

First, inside of our PrivateRoute component, when we redirect the user for not being authenticated, we’ll need to pass along the current route they’re trying to visit so we can come back to it after they authenticate. We can do this by changing the Redirect’s to prop from a string to an object and pass along a state key whose value is the current location of the route the user is trying to access.

```javascript
<Redirect to={{
  pathname: '/login',
  state: { from: props.location }
}} />
```