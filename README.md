# Calender Application using React(Typescript) ✈️

Original instructions are here 👉 [Instructions](README-original.md)

### Features

- Displays calender of the current month
- Set reminders on the calender
- Edit Reminders
- Delete Reminders
- Select color of the reminder marker
- View next and previous month calenders

### Tech stack

- [React](https://reactjs.org/) As the framework
- [Typescript](https://www.typescriptlang.org/)
  - I decided to use Typescript in to enforce type safety in the code base when implementing the global state management store.
- [MobX](https://mobx.js.org/README.html)
  - I used mobx for the reason that it has has two way data binding and it didn't have a huge learning curve.
- [Styled-Components](https://styled-components.com/)
  - I use style-components to create my isolated components
- [Material UI](https://material-ui.com/)
  - For some buttons and Modal for the calender

### Challenges

- Getting Familiar with MobX was a bit challenging when setting the store, because it was my first time using it.
- Calculating the total number of days in a month, until i used `dayjs` to handle the calculations.

### The Future/If i had more time

- Write Tests! Due to lack of time, i was not able to write tests.
  - If i had more time, i would need to write test that will check whether the components are mounting with the right props.
  - Write tests to test the dayInAMonth calculations
  - Tests for the CRUD store operations
- Ordering the reminders by timeStamp
- Handling multiple reminders on the calender date by changing the reminder to reminder[] in the calendar interface and updating the CRUD operations.
- Set up Gitlab pipeline to deploy to [Netlify](https://www.netlify.com/)
- Improve the UI

### Local setup

- Install latest version of [Node here](https://nodejs.org/en/)
- Clone repository `git clone https://gitlab.com/codelittinc/react-interview-project-dennis-mubamba.git`
- Install dependencies: Run `yarn` or `npm install`
- Start local dev server: Run `yarn run dev` or `npm run dev`
- Start application: Run `yarn` or `npm start`
- Visit site: Open [http://localhost:3000]()

### Testing

Run using `yarn run test` or `npm run test`.

Tests are written using Jest and React Testing Library.

### Data Structure

- Main Data structures used to build with a one-to-many relation between the Calender and Reminder. One calender date can have many reminders

```
interface Calendar {
  day: number;
  reminder?: Reminder;
}

interface Reminder {
  text?: string;
  date?: string;
  color?: string;
}


```
