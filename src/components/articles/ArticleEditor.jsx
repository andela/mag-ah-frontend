import React, { Component } from "react";
import Editor, { createEditorStateWithText } from "draft-js-plugins-editor";
import createInlineToolbarPlugin from "draft-js-inline-toolbar-plugin";
import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  CodeButton,
  HeadlineOneButton,
  HeadlineTwoButton,
  HeadlineThreeButton,
  UnorderedListButton,
  OrderedListButton,
  BlockquoteButton,
  CodeBlockButton
} from "draft-js-buttons";

import "draft-js-inline-toolbar-plugin/lib/plugin.css";

const inlineToolbarPlugin = createInlineToolbarPlugin({
  structure: [
    ItalicButton,
    BoldButton,
    UnderlineButton,
    CodeButton,
    HeadlineOneButton,
    HeadlineTwoButton,
    HeadlineThreeButton,
    UnorderedListButton,
    OrderedListButton,
    BlockquoteButton,
    CodeBlockButton
  ]
});

const { InlineToolbar } = inlineToolbarPlugin;
const plugins = [inlineToolbarPlugin];
const text =
  "In this editor a toolbar shows up once you select part of the text …";

export default class ArticleEditor extends Component {
  state = {
    editorState: createEditorStateWithText(text)
  };

  onChange = editorState => {
    this.setState({
      editorState
    });
  };

  focus = () => {
    this.editor.focus();
  };

  render() {
    const { editorState } = this.state;
    return (
      <div
        role="button"
        tabIndex="-1"
        className="editor mt-4"
        onClick={this.focus}
        onKeyDown={this.focus}
      >
        <Editor
          editorState={editorState}
          onChange={this.onChange}
          onKeyDown={this.onChange}
          plugins={plugins}
          ref={element => {
            this.editor = element;
          }}
        />
        <InlineToolbar />
      </div>
    );
  }
}
