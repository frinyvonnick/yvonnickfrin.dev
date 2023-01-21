---
title: "DevTips: Use early returns to avoid nested conditions"
date: 2019-12-12
---

As a developper, you will encounter some patterns you should identify as [code smells](https://martinfowler.com/bliki/CodeSmell.html). Most of them have well known solutions. Today I want to talk about using early returns to avoid else statements and nested conditions.

Let's take a example. I need to call a server to know if a person already exists in my database. The function that makes the call also return a loading indicator so I can inform the user.

```js
render() {
  const personToLookFor = 'Thierry'
  const [result, loading] = doesPersonExists()

  if (!loading) {
    let message
    if (result) {
      message = `${personToLookFor} already exists.` 
    } else {
      message = `${personToLookFor} doesn't exist.`
    }
    return message
  } else {
    return 'Loading...'
  }
}
```

As you can see the nested conditions and if/else statements are hard to read. You don't really understand what does this piece of code at first glance. I bet you already run into this pattern before. Let's refactor this a bit to make it more maintainable!

If the call is still pending we can directly quit the function and display the loading indicator.

```js
render() {
  const personToLookFor = 'Thierry'
  const [result, loading] = doesPersonExists()

  if (loading) return 'Loading...'

  let message
  if (result) {
    message = `${personToLookFor} already exists.` 
  } else {
    message = `${personToLookFor} doesn't exist.`
  }
  return message
}
```

Isn't it a bit clearer? We can also get rid of the else statement by returning directly the message in the if statement.

```js
render() {
  const personToLookFor = 'Thierry'
  const [result, loading] = doesPersonExists()

  if (loading) return 'Loading...'

  if (result) {
    return `${personToLookFor} already exists.` 
  }
  return `${personToLookFor} doesn't exist.`
}
```

It also removes the necessity to have a message variable. You're set 🙌

Hope it will help you!

<hr />

Feedback is appreciated 🙏 Please tweet me if you have any questions [@YvonnickFrin](https://twitter.com/YvonnickFrin)!
