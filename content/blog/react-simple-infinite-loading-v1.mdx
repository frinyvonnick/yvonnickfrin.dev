---
title: react-simple-infinite-loading v1 is out 🎉
date: 2020-01-15
tags: 
  - react-simple-infinite-loading
---

[react-window](https://github.com/bvaughn/react-window) is an awesome tool but it can be a bit verbose when implementing infinite loading list. Here is an [example](https://codesandbox.io/s/x70ly749rq). [react-simple-infinite-loading](https://github.com/frinyvonnick/react-simple-infinite-loading) is a component that handles code complexity for you. It is a wrapper around three libraries from [Brian Vaughn](https://github.com/bvaughn):

- [react-window](https://github.com/bvaughn/react-window) is made to display efficiently large lists. It only creates components for the visible elements and reuse nodes.
- [react-window-infinite-loader](https://github.com/bvaughn/react-window-infinite-loader/) is a HOC that loads elements just-in-time as user scrolls down the list
- [react-virtualized-auto-sizer](https://github.com/bvaughn/react-virtualized-auto-sizer/) helps you displaying your list so it fits the space available in its parent container.

![react-simple-infinite-loading demo](/images/react-simple-infinite-loading.gif)

## v1 is out!

The component now have a complete set of features:

- Load items as the user scrolls down
- Use internal methods to scroll programmatically or reset cached items
- Override default scrollbar style

## Usage

Let's go through the minimal example.

```js
import React from 'react'

import InfiniteLoading from 'react-simple-infinite-loading'

function Example({ items, fetchMore, hasMore }) {
  return (
    <div style={{ width: 300, height: 300 }}>
      <InfiniteLoading
        hasMoreItems={hasMore}
        itemHeight={40}
        loadMoreItems={fetchMore}
      >
        {items.map(item => <div key={item}>{item}</div>)}
      </InfiniteLoading>
    </div>
  )
}
```

`react-simple-infinite-loading` requires four properties:

- **children**: It should be an array of JSX nodes.
- **hasMoreItems**: this property determine if the user reached the end of the list so it prevents him to scroll further.
- **itemHeight**: it is mandatory to optimize number of elements rendered and determine if more rows need to be loaded.
- **loadMoreItems**: a callback function the component will call when more rows need to be loaded.

I hide `loadMoreItems` function implementation on purpose since it depends on your context. It may be a fetch call, GraphQL query, database access, whatever you want. You can see a complete example using [Star Wars API](https://swapi.co/) in the [documentation](https://github.com/frinyvonnick/react-simple-infinite-loading/tree/master/example).

## Override default scrollbar style

`react-simple-infinite-loading` use [react-custom-scrollbars](https://github.com/malte-wessel/react-custom-scrollbars) under the hood to override native scrollbar style. You need to add the prop `customScrollbar` to enable it.

```js
import React from 'react'

import InfiniteLoading from 'react-simple-infinite-loading'

function Example({ items, fetchMore, hasMore }) {
  return (
    <div style={{ width: 300, height: 300 }}>
      <InfiniteLoading
        hasMoreItems={hasMore}
        itemHeight={40}
        loadMoreItems={fetchMore}
        customScrollbar
      >
        {items.map(item => <div key={item}>{item}</div>)}
      </InfiniteLoading>
    </div>
  )
}
```

## Display a placeholder while loading more rows

You can set a `placeholder` property that will be displayed while the rows are loading. By default it adds an extra row at the end of the list with the `placeholder` node as content.

```js
import React from 'react'

import InfiniteLoading from 'react-simple-infinite-loading'

function Example({ items, fetchMore, hasMore }) {
  return (
    <div style={{ width: 300, height: 300 }}>
      <InfiniteLoading
        hasMoreItems={hasMore}
        itemHeight={40}
        loadMoreItems={fetchMore}
        placeholder={<div>Loading...</div>}
      >
        {items.map(item => <div key={item}>{item}</div>)}
      </InfiniteLoading>
    </div>
  )
}
```

![react-simple-infinite-loading demo](/images/react-simple-infinite-loading.gif)

If you want to have a placeholder by row that will be loaded you need to provide the optional property `itemsCount` (It only works if you know the number of rows in advance). There is a counterpart, you will need to have a more fine-grained implementation of `loadMoreItems` callback. This function takes as parameter a start index and a end index of rows that need to be loaded.

![react-simple-infinite-loading demo with multiple placeholders](/images/react-simple-infinite-loading-placeholder.gif)

## Call internal methods

`react-window` and `react-window-infinite-loader` exposes a few methods to manipulate the list programmatically. You can use it through a ref.

You have access to three methods:

- **scrollTo(scrollOffset: number): void** - Scroll to a specified offset.
- **scrollToItem(index: number, align: string = "auto"): void** - Scroll to a specified item. 
- **resetloadMoreItemsCache(): void** - Clear previously loaded items from cache.

Here is an example with the `scrollTo` method.

```js
function Example({ items, fetchMore, hasMore }) {
  const ref = React.useRef()
  const scrollToTop = () => {
    if (ref.current) {
      ref.current.scrollTo(0)
    }
  }

  return (
    <>
      <button onClick={scrollToTop}>Scroll to top</button>
      <div style={{ width: 300, height: 300 }}>
        <InfiniteLoading
          hasMoreItems={hasMore}
          itemHeight={40}
          loadMoreItems={fetchMore}
          ref={ref}
        >
          {items.map(item => <div key={item}>{item}</div>)}
        </InfiniteLoading>
      </div>
    </>
  )
}
```

![react-simple-infinite-loading demo](/images/react-simple-infinite-loading-scroll-top.gif)

If you are interested feel free to give it a try!

Repository: https://github.com/frinyvonnick/react-simple-infinite-loading

Feedback and contributions are appreciated 🙏 Please tweet me if you have any questions [@YvonnickFrin](https://twitter.com/YvonnickFrin)!

Hope it will help!
