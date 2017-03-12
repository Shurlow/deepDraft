'use strict';
import React, { Component } from 'react';
import { Editor, EditorState, ContentState, convertToRaw, convertFromRaw } from 'draft-js'

const DeepstreamMixin = require('deepstream.io-tools-react')

const CustomEditor = React.createClass({
  getInitialState() {
    const emptyRaw = convertToRaw(EditorState.createEmpty().getCurrentContent())
    return {
      raw: emptyRaw,
      local: {
        editorState: EditorState.createEmpty(),
        selection: EditorState.createEmpty().getSelection()
      }
    }
  },

  mixins: [DeepstreamMixin],

  onChange(newEditorState) {
    // We need to persist the raw content in deepstream,
    // but save the current selection locally
    this.setState({
      raw: convertToRaw(newEditorState.getCurrentContent()),
      local: {
        selection: newEditorState.getSelection()
      }
    })
  },

  render() {

    // Create a new EditorState with the raw content saved from deepstream
    const newEditor = EditorState.createWithContent(convertFromRaw(this.state.raw))
    // Apply the locally saved SelectionState to the newly created EditorState
    const withSelection = EditorState.forceSelection(newEditor, this.state.local.selection)

    return (
      <div style={styles.root}>
        <div style={styles.editor} onClick={this.focus}>
          <Editor
            editorState={withSelection}
            onChange={this.onChange}
            placeholder="Enter some text..."
            ref="editor"
          />
        </div>
        <input
          onClick={this.logState}
          style={styles.button}
          type="button"
          value="Log State"
        />
      </div>
    )
  }
})

const styles = {
  root: {
    fontFamily: '\'Helvetica\', sans-serif',
    padding: 20,
    width: 600,
  },
  editor: {
    border: '1px solid #ccc',
    cursor: 'text',
    minHeight: 80,
    padding: 10,
  },
  button: {
    marginTop: 10,
    textAlign: 'center',
  },
};

export default CustomEditor
