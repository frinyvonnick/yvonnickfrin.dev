import * as React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"

import "prismjs/themes/prism-solarizedlight.min.css"

export default function CodeBlock({ language, children }) {
  return (
    <Highlight
      {...defaultProps}
      theme={undefined}
      code={children}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => {
            // The following condition remove empty new line at the beginning and the end of code block
            const isFirstOrLastLine = i === tokens.length - 1 || i === 0
            const hasLineOneElement = tokens[i].length === 1
            if (
              isFirstOrLastLine &&
              hasLineOneElement &&
              getTokenProps({ token: tokens[i][0], key: 0 }).children === "\n"
            )
              return null
            return (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            )
          })}
        </pre>
      )}
    </Highlight>
  )
}
