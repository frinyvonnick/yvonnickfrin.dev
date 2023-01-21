---
title: Immutability in JavaScript
date: 2019-07-15
tags: 
  - immutadot
---

*This article was originally posted on medium [here](https://medium.zenika.com/immutability-in-javascript-7e1a19b45615)*

**TLDR;** EcmaScript provides utilities to keep data immutable. These tools find their limits with nested structures. [immutadot](https://github.com/zenika-open-source/immutadot) is a library to deal with nested immutable structures. [Give it a try](https://immutadot.zenika.com/).

<hr/>

According to [wikipedia](https://en.wikipedia.org/wiki/Immutable_object) an *immutable object (unchangeable object) is an object whose state cannot be modified after it is created*. This rule is quite simple, if you want to modify some property of an object you have to do it on a copy. We will see a bit later what improvements and fancy features it unlocks for our developments.

## EcmaScript

EcmaScript provides utilities to keep our data immutable. Arrays and objects APIs contain methods to create copies and even prevent instances from being updated. More recently EcmaScript introduced a new syntaxes to create copies of objects and arrays.

### Object.assign

We want to add a name property in our object.

```js
const lutraLutra = {
  commonNames: ['eurasian otter'],
}
```

We can do it with `Object.assign` and a little trick. Basically it copies all properties from an object into another one, thus it mutates the target object. We use a small trick, passing an empty object as first parameter, which creates a new reference.

```js
const newLutraLutra = Object.assign(
  {}, 
  lutraLutra,
  { name: 'Lutra lutra' },
)
```

We now have a new object with our new `name` property and a `commonNames` property remain unchanged. With this method you can create/overwrite multiple properties at the same time.

### Array.concat

Now let's do it with an array. We want to add two new elements in an array in an immutable way.

```js
const commonNames = ['eurasian otter']
```

Unlike `Array.push`, `Array.concat` does not mutate our array. Instead, it returns a new array.

```js
const newCommonNames = commonNames.concat(
  'european otter',
  'common otter'
)
```

This method is flexible. It takes as many elements as you want. They can be either values or arrays.

### Object.freeze

`Object.freeze` isn't really familiar. It lets you make an object immutable! It prevents every type of mutation (creation, modification, deletion) induced by the use of setters.

```js
let lutraLutra = {
  commonNames: ['eurasian otter', 'european otter', 'common otter'],
  name: 'Lutra lutra'
}
```

We will try to delete `name` property after object has been frozen.

```js
lutraLutra = Object.freeze(lutraLutra)

delete lutraLutra.name
```

Reallocation isn't necessary since the object passed as parameter has been made immutable by `Object.freeze`. This method has two available modes:

- A non-strict mode that does not apply mutations
- A strict mode that throws a `TypeError` if you try to apply mutations

Be careful, it is not recursive. Our property `commonNames` isn't immutable.

### Spread operator

The spread operator syntax has been introduced in ES2015 for arrays and in ES2018 for objects. It copies all properties of a given object into a new object literal.

```js
const newLutraLutra = {
  ...lutraLutra,
  name: 'Lutra lutra',
}
```

With arrays, it copies all values of an array into a new array.

```js
const newCommonNames = [
  ...commonNames,
  'common otter',
]
```

it replaces nicely `assign` and `concat`, it is easily readable and creates a convention between arrays and objects. It is possible to spread multiple arrays and objects in a same literal.

## Why use immutability?

You found out how to make objects and arrays immutable with JavaScript but we didn't explain yet why using immutability is so necessary nowadays. As developers, we are always looking for a way to write more maintainable and readable code. Some paradigms such as Functionnal Programming are focusing on this.

> Functional programming’s goal is to allow us to think less and write more descriptive code.
>
> -- <cite>[Alexander Kondov](https://hackernoon.com/functional-programming-paradigms-in-modern-javascript-immutability-4e9751ca005c)</cite>

It has a declarative approach of programming, which means that you focus on describing what your program must accomplish rather than how it should do it. It gives more meaning to your code so that the next developper can understand it more easily. Functional programming brings along other concepts that help reach this goal, such as immutability.

### What are the benefits?

Does it sound like a hype term to you? Immutabilty brings many solutions to programming matters we ecounter everyday:

- Avoid side effects
- Data changes detection made simple (shallow comparison)
- Explicit data changes
- Memoization
- Memory optimization
- Better rendering performances
- Easy testing

> « Unlike most trends in the world of JavaScript, data immutability is bound to stick with us for a while, and for good reason: firstly, because it’s not a trend: it’s a way of coding (and thinking in code) that promotes clarity, ease of use and understanding data flow, and makes code less prone to errors. »
>
> -- <cite>[Ricardo Magalhães](https://hackernoon.com/data-immutability-with-vanilla-javascript-63834a65a6c9)</cite>

In the last few years one of our biggest challenges has been to find an efficient way to detect changes in our data to determine whether or not we should render our interfaces. It's easy to detect changes between primitive values, but it's a completely different issue for objects and arrays. You could compare them by value but you would have to implement recursive algorithms and deal with potential issues like cyclical references. Another method would be to compare object references with the strict equality operator `===`. It's more effective and there isn't any risk to enter in some deathly infinity loop. That's why modern frameworks enforce this concept.

### Highlighted by modern frameworks/libraries

Modern frontend frameworks and libraries are based on a concept that improves drastically performances. This is the well-known Virtual DOM. This technology has been created from a simple evidence: DOM manipulations are expensive.

Like explained, frontend frameworks and libraries chose to use immutability in order to improve their performances. Nowadays we have to deal with more and more data in our applications, and therefore more markups. So our browsers need to handle much more computations than 10 years earlier. DOM operations are expensive, modern frameworks tend to reduce the number of DOM updates.

### Why do we need utility libraries?

As we saw earlier, the way to handle immutability in EcmaScript is made simple thanks to syntactic sugar but is quite limited in nested structures. With the arrival of libraries like `redux`, nested structures have become more popular.

```js
const animals = {
  weasels: {
    lutraLutra: {
      commonNames: ['eurasian otter'],
    },
  },
}

const newAnimals = {
  ...animals,
  weasels: {
    ...animals.weasels,
    lutraLutra: {
      ...animals.weasels.otter,
      name: 'Lutra lutra',
    },
  },
}
```

As you can see it becomes more tedious to write and harder to read. Simple use-cases like overriding an index of an array aren't easily achievable.

```js
const lutraLutra = {
  name: 'Lutra lutra',
  commonNames: ['eurasian otter', 'european', 'common otter'],
}

const newCommonNames = [...lutraLutra.commonNames]
newCommonNames[1] = 'european otter'

const newLutraLutra = { 
  ...lutraLutra,
  commonNames: newCommonNames,
}
```

These reasons are sufficient to start finding out some tool that help focusing on what really matters, the meaning of your code. That's why we created [immutadot](https://immutadot.zenika.com/), to help us keep javascript codebase readable and maintenable. [Give it a try](https://npm.runkit.com/immutadot).
