import React from 'react';

const textStyles = {
  padding: 15,
  width: '45%',
  height: window.innerHeight - 150,
  border: '1px solid #ccc',
  backgroundColor: 'white',
  overflow: 'scroll',
};


class Editor extends React.Component {
  render() {
    return (
      <textarea
        id="editor"
        style={ textStyles }
        onChange={this.props.onChange}
        defaultValue={this.props.content}
        type="text"
      >
      </textarea>
    );
  }
}

export default Editor;