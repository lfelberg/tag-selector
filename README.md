# Tag selector Headspin coding challenge

The front end module satisfies the following requirements:

- [X] Be able to delete a tag from a session.
- [X] Be able to add a tag to a session.
- [X] When a tag is added to a session, UI immediately updates the
statistics for any selections that include the session based on the
new tag.
- [X] When a tag is deleted from a session, UI immediately updates the
statistics for any selections that included the session based on that
tag.
- [X] When the mouse hovers a selection, its corresponding sessions get
visually highlighted in some way.
- [X] Be able to delete a selection.
- [X] Be able to create a new selection. When the new selection is created,
it immediately updates with statistics, if there are any objects that
pass its filter.

Extras:

1. Selections as defined above take the form of a logical disjunction (a=x or b=y).
   Extend selections to be disjunctions of conjunctions:
   (a=x and b=y) or (a=z and c=p and d=m) or ...

   1a. Duplicate tag names allowed in conjunctions
       (a=x and a=y) or (a=m and a=n)

       This involves allowing tagging a session with multiple tags
       that share a name.

2. Read-only tags. Some download sessions might be tagged with Read-only, or
   "system tags" that cannot be deleted or modified, but can still be
   selected for like a regular tag.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
