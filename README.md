# ![GA-Logo](https://camo.githubusercontent.com/6ce15b81c1f06d716d753a61f5db22375fa684da/68747470733a2f2f67612d646173682e73332e616d617a6f6e6177732e636f6d2f70726f64756374696f6e2f6173736574732f6c6f676f2d39663838616536633963333837313639306533333238306663663535376633332e706e67)Intro to React.js: Part 2



### Learning Objectives

* Pass in data to a React component via `props`.
* Modify the `state` of a React component through events.

### Intro

Before our break, we learned that React is a powerful and efficient front-end framework that emphasized performance and reusability of _components_, and that it utilizes _JSX_ for these components. This is what we had for our `Hello` component:

```js
// bring in React and Component instance from react
import React, {Component} from 'react'

// define our Hello component
class Hello extends Component {
  // what should the component render
  render () {
    // Make sure to return some UI
    return (
      <h1>Hello World!</h1>
    )
  }
}

export default Hello
```

What important piece of a component is missing here? A component is a consistent format for displaying varied data. Our `<Hello />` component doesn't currently take in and display any data!

In React, `state` and `props` are the two mechanisms we use to pass data to a component. 

**Note**: `state` and `props` are *client side* tools that consume data from the database. If we want to change anything on the database, we're going to need to make HTTP requests to a server.

### Hello World: A Little Dynamic

Let's make our Hello component more interesting.
* Rather than simply display "Hello world", let's display a greeting that addresses the user by name.
* So the question is, how do we feed a name to our `Hello` component without hardcoding it into our render method?

First, we pass in data wherever we are rendering our component, in this case in `src/index.js`:

```js
import ReactDOM from `react-dom`
import Hello from './App.js'

ReactDOM.render(
  <Hello name={"Nick"} />,
  document.getElementById('root')
)
```

Then in our component definition, we have a reference to that data via as a property on the `props` object...

```js
class Hello extends Component {
  render () {
    return (
      <h1>Hello {this.props.name}</h1>
    )
  }
}
```

In the above example, we replaced "world" with `{this.props.name}`.

#### What are `.props`?

Properties! Every component has `.props`
* Properties are *immutable*. That is, they cannot be changed while your program is running. Props are attached to a component when the page loads and they don't change until the component is destroyed or the page reloads.
* We pass properties into our components as attributes of the JSX element when we call the `.render` method (in `src/index.js`).

First we can pass multiple properties to our component when its rendered in `src/index.js`..

```js
import ReactDOM from `react-dom`
import Hello from './App.js'

ReactDOM.render(
  <Hello name={"Nick"} age={24} />,
  document.getElementById('root')
)
```

Then in our component definition we have access to both values...

```js
class Hello extends Component {
  render () {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <p>You are {this.props.age} years old</p>
      <div>
    )
  }
}

```

> **NOTE:** The return statement in `render` can only return one DOM element. You can, however, place multiple elements within a parent DOM element, like we do in the previous example with `<div>`.



## State

So we know about React properties, and how they relate to our component's data. `props` represent data that will be the same for the whole time our component is rendered. What about data in our application that may change depending on user action? That's where `state` comes in...

Values stored in a component's state are mutable attributes.
* Like properties, we can access a state variable called `val` using `this.state.val`
* Setting up and modifying state is not as straightforward as properties. It involves building a constructor function for our class, and then defining methods to define how to update our state....

Lets implement state in our earlier `Hello` example by incorporating a counter into our greeting.

```js
class Hello extends Component {
  // when our component is initialized,
  // our constructor function is called
  constructor (props) {
    // make call to parent class' (Component) constructor
    super()
    // define an initial state
    this.state = {
      counter: 0 // initialize this.state.counter to be 0
    }
  }
  render () {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <p>You are {this.props.age} years old</p>
        <p>The initial count is {this.state.counter}
        </p>
      </div>
    )
  }
}
```

Ok, we set an initial state. But how do we go about changing it?
* We need to set up some sort of trigger event to change our counter.

Let's use a button click event. We will need to define a function to handle the click and we will need to attach that function to a button.


<details><summary>Where should we define the function?</summary>

  > Inside of the class definition for our component!

</details>

<details><summary>How should we attach it to a button?</summary>

  > Inside the `JSX` return value!  Notice the ultra-slick ES6 function.

</details>


```js
class Hello extends Component {
  constructor (props) {
    super()
    this.state = {
      counter: 0
    }
  }
  handleClick (e) {
    // setState is inherited from the Component class
    this.setState({
      counter: this.state.counter + 1
    })
  }
  render () {
    // can only return one top-level element
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <p>You are {this.props.age} years old</p>
        <p>The initial count is {this.state.counter}
        </p>
        <button onClick={(e) => this.handleClick(e)}>click me!</button>
      </div>
    )
  }
}
```

> Take a closer look at how this event is implemented. We use an attribute called `onClick` to define the behavior that happens when we click this particular button. As it's value, we're passing in an anonymous function that invokes handleClick, a function defined on this component.

Whenever we run `.setState`, our component "diff's" the current DOM, and compares the Virtual DOM node with the updated state to the current DOM.
* Only replaces the current DOM with parts that have changed.


## Closing

React, like Angular, is a powerful web framework that allows fast rendering and is a front-end tool. It works mainly in the "views" layer. We're able to access and manipulate data that we place inside of the `props` or `state` of the component.

### Additional Reading

* [Tyler McGinnis' React.js Program](http://www.reactjsprogram.com/)
* [Raw React: No JSX, Webpack, ES6, etc.](http://jamesknelson.com/learn-raw-react-no-jsx-flux-es6-webpack/)
* [Integrating React with Backbone](https://blog.engineyard.com/2015/integrating-react-with-backbone)
* [React DC (Meetup)](http://www.meetup.com/React-DC/)
* [React Tic-Tac-Toe (by Jesse Shawl)](https://github.com/jshawl/react-tic-tac-toe)


### What's Next?

* [Router](https://github.com/reactjs/react-router)
* [API/Axios](https://www.npmjs.com/package/axios)
* [Events](https://facebook.github.io/react/tips/dom-event-listeners.html)
* [Forms](https://facebook.github.io/react/docs/forms.html)
