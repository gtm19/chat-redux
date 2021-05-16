# redux-boilerplate

Simple React + Redux starter with the following config:

- React, ReactDOM
- Redux, React-Redux
- Webpack 3
- Babel with es2015 and react presets
- Bootstrap (css only, loaded from a cdn in `index.html`)
- work with `.js` or `.jsx` files
- main `application.scss` stylesheet is imported in `index.js` as a module to enjoy hot reloading

## Learnings

### Shortcut to creating 4 boilerplate reducers

```bash
cat <<EOF >> src/reducers/{messages,channels,selected_channel,current_username}_reducer.jsx
export default function(state = null, action) {
  switch (action.type) {
    default:
      return state;
  }
}
EOF
```
