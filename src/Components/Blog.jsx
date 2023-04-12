import React from "react";

const Blog = () => {
  return (
    <React.Fragment>
      <h1 className="text-2xl font-bold">1.When should you use context API?</h1>
     <ol>
          <li>
            1.Theming: We can use Context API to store the current theme of our
            application and make it available to all components. This way,
            whenever the user switches the theme (such as enabling dark mode),
            all components will be updated with the new theme.
          </li>
          <li>
            2. User Authentication: We can also use Context API to store a
            user's authentication status and pass it down to all the components
            that need it. This way, we can easily restrict access to certain
            parts of our application based on the user's authentication status.
          </li>
          <li>
            3.Multilingual Support: We can store the current language of our
            application in the context and pass it down to all the components
            that need it. This way, We can easily switch between different
            languages without having to pass the language down as props to all
            the components.
          </li>
          <li>
            4. Accessing data from external sources: Finally, We can use the
            Context API to store data retrieved from external sources such as
            APIs or databases and make it available to all components. This can
            simplify our code and make it easier to manage data across your
            application.
          </li>
        </ol>
    
     <h1 className="text-2xl font-bold">2.What is a custom hook?</h1>
      <p>
        A Custom Hook allows to extract some components logic into a reusable
        function. Custom Hooks are nothing but a JavaScript function, use while
        creating a React app. If we have common logic that we want to share
        between components then we use custom Hooks. The main goal is creating
        code reusability.
      </p>
      <h1 className="text-2xl font-bold">3.What is useRef?</h1>
      <p>
      The useRef is a hook that allows to directly create a reference to the DOM element in the functional component.
      </p>
      <h1 className="text-2xl font-bold">4.What is useMemo?</h1>
<p>useMemo is a React hook that memorizes the output of a function. That is it. useMemo accepts two arguments: a function and a list of dependencies. useMemo will call the function and return its return value. Then, every time you call useMemo again, it will first check if any dependencies have changed.</p>
    </React.Fragment>
  );
};

export default Blog;
