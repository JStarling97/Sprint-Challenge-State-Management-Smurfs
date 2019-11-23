1. What problem does the context API help solve?

   React Context is a way for a child component to access a value in a parent component.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

   Actions are payloads of information that send data from your application to your store. They are the only source of information for the store.

   Reducer is a pure function that takes the previous state and an action, and returns the next state.

   Store is basically just a plain JavaScript object that allows components to share state.

   Redux is a single source of truth, it means that the only way to change your data in UI is to dispatch redux action

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

   Your application state is global, and your component state is local.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

   Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

Context, Its easier for me to understand. Something I don't spend awhile on.
