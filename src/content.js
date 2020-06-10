import React from 'react';
import marked from 'marked';
import './App.css';

marked.setOptions({
  gfm: true,
  breaks: true,
});

let markText = `# Heading 1
## Heading 2
### Heading 3
---
This text is __Bold__,
Text with a ~~strikethrough~~
- list
- items
- displayed 
- by use of
- one hyphen
---
> Block text!
This is a inline \`<div></div>\`
This is a block of code
\`\`\`
let x = 1
let y = 2
let z = x + y
\`\`\`
\`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\`
---

More information about markdown can be found [here](https://www.google.com)

---

Page created with ![React](https://cdn.iconscout.com/icon/free/png-256/react-2-458175.png "React")
 `;

class Marker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: markText,
    };
  }

  changeText = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  render() {
    let { text } = this.state;

    return (
      <div className='container'>
        <textarea
          id='editor'
          className='screen'
          onChange={(e) => {
            this.changeText(e);
          }}
          type='text'
          value={text}
        />
        <div id='hello'></div>
        <div
          id='preview'
          className='screen'
          dangerouslySetInnerHTML={{ __html: marked(text) }}
        />
      </div>
    );
  }
}

export default Marker;
