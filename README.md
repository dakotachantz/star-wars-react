# Star Wars React App
In this project, you will use the `Star Wars API (SWAPI)` to render a set of Star Wars vehicles 'cards'. To achieve this you will implement the following React logic: `props`, `state` and `lifecycle`.

## Normal Mode  

### Project Setup  

We have scaffolded the majority of the project for you! The purpose of this project is to get you familiar with the concepts of props, state, and lifecycle events.

There are detailed instructions in the app.js file located inside 'components' in the 'src' file. Read the instructions carefully.

The body of the page consists of three sections, a header (jumbotron), a form, and the vehicle 'cards' section.

The form needs to collect the 'pilot's' name. Your job is to set the state of the pilot's name upon submission so that it can be displayed right beneath the submit button.

Before you can render the vehicles, you will first have to fetch the data from the Start Wars API vehicle endpoint: https://swapi.co/api/vehicles/

Creating the vehicle cards is relatively easy using Bootstrap 4. See docs for details.

### Props and State  

You will need to set the appropriate props and set the initial state for each of the following: 'vehicles' (empty array), 'value' (empty string. This is the initial value of the form's input), and 'pilot' (empty string.)
```
constructor(props) {
  // super
  // bind handlers
  // set initial state: vehicles, value, pilot.
}
```
### Lifecycle  

As you have already learned, the best place to fetch data is in componentDidMount. Once the data is fetched, you will need to set it to the state, so that you can render each individual vehicle in the render method. You will need to iterate over the data in order to retrieve the values listed in app.js.

```
componentDidMount(){
  //Fetch from Star Wars api
  // Set 'vehicles' state
}
```
### Render  

```
render() {
  /*
  Store vehicles state in a variable.
  Map over this variable to access the values needed to render.
  */
  return (
    <div className="App">
      {/*
      jumbotron
      form
      vehicle cards
       */}
    </div>
  );
}
}
```

## Hard Mode  

Try adding a 'starships' and 'people' component...