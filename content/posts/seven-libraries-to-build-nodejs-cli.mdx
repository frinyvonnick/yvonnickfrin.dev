---
title: 7 libraries to build Node.js CLI
date: 2019-11-20
tags:
  - gitmoji-changelog
---

Last week, I wrote an article about [building a Node.js CLI using yargs](https://dev.to/yvonnickfrin/build-a-node-js-cli-using-yargs-2hd). I introduced it saying we use cli tools everyday to simplify common tasks in our jobs. I made myself a couple of cli like [gitmoji-changelog](https://github.com/frinyvonnick/gitmoji-changelog). It is a changelog generator for [gitmoji](https://github.com/carloscuesta/gitmoji) commit convention.

I would like to share with you a few libraries I used on this project and while contributing to [Gatsby](https://github.com/gatsbyjs/gatsby). Gatsby is a good source of inspiration, consider contributing to it. I learned a lot while doing it (they give free swag to thank contributions 🤫).

## yargs

[🔗 repository](https://github.com/yargs/yargs)

It is a library that helps you defining your tool's interface. It also parses arguments for you. The icing on the cake is that yargs generates automatically an help menu.

Here is a simple example that displays a message "Hello [something]" a certain amount of times.

```js
require('yargs')
  .command('$0 [name]', 'say hello', (yargs) => {
    yargs
      .positional('name', {
        describe: 'hello\'s target',
        default: 'world'
      })
      .option('times', {
        alias: 't',
        type: 'number',
        default: 1,
        description: 'number of times to say hello'
      })
  }, (argv) => {
    for (let i = 0;i < argv.times; i++) {
      console.log(`Hello ${argv.name}!`)
    }
  })
  .argv
```

<br />
Result:

![yargs demo](/images/yargs.gif)

## prompts

[🔗 repository](https://github.com/terkelg/prompts)

A common use case in cli tools is asking user for information. Prompts is a lightweight library based on promises. It implements an exhautive list of question's types.

```js
(async () => {
  const prompts = require('prompts')

  const response = await prompts({
    type: 'confirm',
    name: 'value',
    message: 'Can you confirm?',
    initial: true
  })

  console.log('Reponse: ', response.value)
})()
```

<br />
Result:

![prompts demo](/images/prompts.gif)

## signale

[🔗 repository](https://github.com/klaussinani/signale)

Standard `console` API provides only a few methods to display information. Signale comes with 19 built-in methods (logs are prefixed with emojies ❤️)! You can also implements custom loggers.

```js
const signale = require('signale')

signale.success('CLI started');

const options = {
  types: {
    santa: {
      badge: '👽',
      color: 'magenta',
      label: 'alien',
      logLevel: 'info'
    }
  }
}

const custom = new signale.Signale(options);

custom.santa('E.T go home')

signale.complete('Call sent')
```

<br />
Result:

![signale demo](/images/signale.gif)

## chalk

[🔗 repository](https://github.com/chalk/chalk)

It is a pain in the neck to add style to a cli output. Chalk provides an easy-to-use API to colorize logs. It also supports template literals!

```js
const chalk = require('chalk')

console.log(`${chalk.blue('Welcome')} in the activity monitor${chalk.red('!')}`)

console.log(chalk.green(`Your computer seems in ${chalk.underline('great')} shape.`))

console.log(`
envinfo:
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`)
```

<br />
Result:

![chalk demo](/images/chalk.gif)

## progress

[🔗 repository](https://github.com/visionmedia/node-progress)

Another common use case is dealing with asynchronous operations. It is nice to give user a percentage of completion when your cli is doing a heavy computation. Progress is an highly customizable ascii progress bar. It comes with a bunch of options and standard information (percentage, total, estimated completion, ...) to display on the progress bar. You can also add your own information.

```js
const ProgressBar = require('progress')

let ticks = 0

const bar = new ProgressBar(
  'Rocket launch :bar in :counter',
  { total: 10, width: 50 },
)

const timer = setInterval(function () {
  ticks++
  bar.tick({ counter: 10 - ticks })
  if (bar.complete) {
    console.log('\n🚀')
    clearInterval(timer)
  }
}, 100)
```

<br />
Result:

![progress demo](/images/progress.gif)

## configstore

[🔗 repository](https://github.com/yeoman/configstore)

Earlier we saw Prompts to ask user information. It is also nice to store its answer to avoid asking it again and again. Configstore is a library that persists data for you. It stores it in a json file on the user's disk. It handles well the dot notation!

```js
const Configstore = require('configstore')
const packageJson = require('../package.json')

const config = new Configstore(packageJson.name)

config.set('answer', true);
console.log('answer:', config.get('answer'));

config.set('a.really.deep.config', true);
console.log('a.really.deep.config:', config.get('a.really.deep.config'));

config.delete('answer');
console.log('answer:', config.get('answer'));
```

<br />
Result:

![configstore demo](/images/configstore.gif)

## envinfo

[🔗 repository](https://github.com/tabrindle/envinfo)

As frontend developer I use user-agent to get information about my user device. It helps a lot to reproduce bugs for example. As cli developer you don't have access to this kind of information. envinfo is a library that generates reports that users can provide when opening issues on your project.

```js
(async () => {
  const envinfo = require('envinfo')

  const environment = await envinfo.run(
    {
      System: ['OS', 'Shell'],
      Binaries: ['Node', 'Yarn', 'npm'],
      Utilities: ['Git'],
    },
    { markdown: true }
  )
  
  console.log(environment)
})()
```

<br />
Result:

![envinfo demo](/images/envinfo.gif)

Alternatives exist for these libraries but I used these ones and I enjoy working with them. In my opinion, they covers the majority of problems you might encounter while coding cli tools.

Hope it will help 🙌 Happy cli coding!

<hr />

Feedback is appreciated 🙏 Please tweet me if you have any questions [@YvonnickFrin](https://twitter.com/YvonnickFrin)!
