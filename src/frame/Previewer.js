import 'highlight.js/styles/github.css';
import marked from 'marked';
import React from 'react';

const textStyles = {
  padding: 15,
  width: '45%',
  height: window.innerHeight - 150,
  border: '1px solid #CCCCCC',
  backgroundColor: 'white',
  overflow: 'scroll',
};

class Previewer extends React.Component {
  render() {
    const renderer = this.props.renderer;

    return (
      <div 
        id="preview"
        style={ textStyles }
        dangerouslySetInnerHTML={{__html: marked(this.props.content, {renderer: renderer})}}
      >
      </div>
    );
  }
}

export default Previewer;