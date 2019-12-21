---
title: Build a Node.js CLI using yargs 
date: 2019-11-15
tags: 
  - gitmoji-changelog
---

As developers, we use cli tools everyday. We use them to simplify common tasks of our job:
- Packaging
- Linting
- Building apps
- Deploying apps
- Publishing packages
- Automate a lot of stuff...

But that's not all. A lot of them aren't related to development at all! Here is a list of [cli apps](https://github.com/agarrharr/awesome-cli-apps).

I developped myself a couple of cli tools like [gitmoji-changelog](https://github.com/frinyvonnick/gitmoji-changelog). It is a changelog generator for [gitmoji](https://github.com/carloscuesta/gitmoji) commit convention. I also contributed to [gatsby-cli](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-cli) which helps developers build blazing fast websites and apps using React. All of these were made with [yargs](https://github.com/yargs/yargs).

## Why using yargs?

Since [Node.js](https://nodejs.org/en/) provides us with all utilities to build a cli app, why should you use `yargs`?

A good example is better than a lot of explanations. Let's go through the creation of a simple cli app. When called it will display `Hello world!`.

What an original example!

The cli take an argument to override `world` word. It also takes a named option `times` to log the message more than once.

We will build it step by step without using `yargs` then refactor the codebase using it.

First of all, we create an `index.js` file with the following content.

```js
console.log('Hello world!')
```

We execute our file using `node` and our message is printed in our console.

```console
foo@bar:~$ node index.js
Hello world!
```

Fine, arguments are available in the `argv` property of the global variable `process`. The first one is the executable path and the second one the path to the JavaScript file that was executed.

```console
[
  "~/.nvm/versions/node/v10.15.3/bin/node",
  "~/index.js"
]
```

If we call the cli with an argument, it will the third element of this array. We get its value writing `process.argv[2]` and using `world` as default value if it isn't provided.

```js
const args = process.argv

const name = args[2] || 'world'

console.log(`Hello${name}!`)
```

Call the cli, you can now override `world`!

```console
foo@bar:~$ node index.js you
Hello you!
```

Things will go wild! Remember we want to add an option to display the message more than one time. Optional arguments are usually represented like this `--times 3`. They can be placed where you want.

We begin by dealing with the case the optional argument is placed after the name argument.

```js
const args = process.argv

const name = args[2] || 'world'
const times = args[4] || 1

for (let i = 0;i < times; i++) {
  console.log(`Hello${name}!`)
}
```

Call the cli, now the message is displayed three times!

```console
foo@bar:~$ node index.js you --times 3
Hello you!
Hello you!
Hello you!
```

The previous code won't work if we don't provide the name argument. It won't work either if you place the optional argument before the name.

We change the code to handle the use case when the optional argument is placed in first position.

```js
// ...
if (args[2] === '--times') {
  name = args[4]
  times = args[3]
} 
// ...
```

We keep the same behavior when placed after the name.

```js
// ...
} else if (args[3] === '--times') {
  name = args[2]
  times = args[4]
}
// ...
```

Here is the case where the name argument is provided and the optional argument isn't.

```js
// ...
} else if (args[2] && args[2] !== '--times') {
  name = args[2]
}
// ...
```

Here is the final code.

```js
const args = process.argv
let times = 1
let name = 'world'

if (args[2] === '--times') {
  name = args[4]
  times = args[3]
} else if (args[3] === '--times') {
  name = args[2]
  times = args[4]
} else if (args[2] && args[2] !== '--times') {
  name = args[2]
} 

for (let i = 0;i < times; i++) {
  console.log(`Hello ${name}!`)
}
```

It is a bit complex and hard to read. Moreover it won't work if we add a new positional argument.

## Refactor our cli app using yargs

To build a maintainable and scalable cli app we will use [yargs](https://github.com/yargs/yargs). It exposes a lot of functions well described in its [documentation](https://github.com/yargs/yargs#documentation-). We will use the function [command](https://github.com/yargs/yargs/blob/master/docs/api.md#commandcmd-desc-builder-handler). It takes four parameters, a name, a description, a builder and a handler. If you pass `*` or `$0` as name parameter it will be the default command.

```js
require('yargs')
  .command('$0 [name]', 'start the server',() => {}, () => {
    console.log('Hello world!')
  })
```

The code is a bit more complex to only display a `Hello world!` message. It will become more interesting as our code becomes more complex. Let's add our name argument. It will be done in the builder parameter which is a function that gets yargs instance as parameter. We use the [positional](https://github.com/yargs/yargs/blob/master/docs/api.md#positionalkey-opt) function to describe our argument. As you can see, it directly takes a default value.

```js
require('yargs')
  .command('$0 [name]', 'start the server',(yargs) => {
    yargs
      .positional('name', {
        describe: 'name to display',
        default: 'world'
      })
  }, () => {
    console.log(`Hello world!`)
  })
```

Arguments are passed as parameter to the handler function. It is an object with a property for each argument. We named our argument `name`, its value is available in `argv.name` property.

```js
require('yargs')
  .command('$0 [name]', 'start the server',(yargs) => {
    yargs
      .positional('name', {
        describe: 'name to display',
        default: 'world'
      })
  }, (argv) => {
    console.log(`Hello ${argv.name}!`)
  })
```

Time to see the power of `yargs`. We add our optional argument `times` using the [option](https://github.com/yargs/yargs/blob/master/docs/api.md#optionkey-opt) function which has a similar API to `positional`. We don't forget to add a default value. The `for` is the same as in the vanilla implementation. 

```js
require('yargs')
  .command('$0 [name]', 'start the server',(yargs) => {
    yargs
      .positional('name', {
        describe: 'name to display',
        default: 'world'
      })
      .option('times', {
        alias: 't',
        type: 'number',
        default: 1,
        description: 'number of times the message is logged'
      })
  }, (argv) => {
    for (let i = 0;i < argv.times; i++) {
      console.log(`Hello ${argv.name}!`)
    }
  })
```

As you can see, we didn't have to deal with the technical complexity of writing a cli app. `yargs` handles it for us.

## Bonus: It comes with help option

`yargs` automatically adds a command `help` for you! It uses the information we provided when we described our interface.

```console
foo@bar:~$ node index.js --help
yargs.js [name]

start the server

Positionals:
  name  name to display                                        [default: "world"]

Options:
  --help       Print the help                                       [boolean]
  --version    Print the version number                            [boolean]
  --times, -t  number of times the message is logged        [number] [default: 1]
```

`yargs`'s [API](https://github.com/yargs/yargs/blob/master/docs/api.md) is well documented and you can find more complex [examples](https://github.com/yargs/yargs/blob/master/docs/examples.md) in it.

You're set 🙌

Now you can build all the cli apps you ever imagined! 

<hr />

Feedback is appreciated 🙏 Please tweet me if you have any questions [@YvonnickFrin](https://twitter.com/YvonnickFrin)!
