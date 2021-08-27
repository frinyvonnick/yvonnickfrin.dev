---
title: Generate images from HTML in Node.js 
date: 2019-12-18
tags: 
  - node-html-to-image
---

As developers, we don't have great skills with image manipulation softwares, but we still need it. In my case I had to generate Twitter cards for social media and flyers for the meetup I co-organize. An important point for use is automation. So I wanted a solution that let me make a template and generates a lot of images without extra work.

That is why I created [node-html-to-image](https://github.com/frinyvonnick/node-html-to-image). A Node.js module that generates images from HTML.

Here is the simplest example, you provide an output path and a HTML string. That's all!

```js
const nodeHtmlToImage = require('node-html-to-image')

nodeHtmlToImage({
  output: './image.png',
  html: '<html><body>Hello world!</body></html>'
})
  .then(() => console.log('The image was created successfully!'))
```

I talked about automation earlier. It comes with a templating engine, [Handlebars](https://handlebarsjs.com/). It enables creating multiple images using the same template.

In the following example, we changed `world` by a placeholder and inject its value with the `content` option.

```js
const nodeHtmlToImage = require('node-html-to-image')

nodeHtmlToImage({
  output: './image.png',
  html: '<html><body>Hello {{name}}!</body></html>',
  content: { name: 'you' }
})
  .then(() => console.log('The image was created successfully!'))
```

You want to generate images from HTML without writing a line of code? No problem, I also made a cli that use `node-html-to-image` underneath called [node-html-to-image-cli](https://github.com/frinyvonnick/node-html-to-image-cli).

```sh
npx node-html-to-image-cli index.html image.png
```

Generated image:

![Demonstration of node-html-to-image-cli](https://raw.githubusercontent.com/frinyvonnick/node-html-to-image-cli/master/misc/demo.gif)

Feel free check out the GitHub repositories if you are interested:

- [node-html-to-image](https://github.com/frinyvonnick/node-html-to-image)
- [node-html-to-image-cli](https://github.com/frinyvonnick/node-html-to-image-cli)

Want to support ? Don't forget to leave a ⭐️

<hr/>

Feedback or ideas are appreciated 🙏 Please tweet me if you have questions [@YvonnickFrin](https://twitter.com/YvonnickFrin)!

