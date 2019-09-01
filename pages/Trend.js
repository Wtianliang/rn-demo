import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import actions from '../redux/action';

import {
  Text,
  View,
  StyleSheet,
  Button
} from 'react-native';
import theme from "../redux/reducer/theme";
import { RichTextEditor, RichTextToolbar } from 'react-native-zss-rich-text-editor';


class Trend extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.getHTML = this.getHTML.bind(this);
    this.setFocusHandlers = this.setFocusHandlers.bind(this);
  }

  onEditorInitialized() {
    this.setFocusHandlers();
    this.getHTML();
  }

  async getHTML() {
    const titleHtml = await this.richtext.getTitleHtml();
    const contentHtml = await this.richtext.getContentHtml();
    //alert(titleHtml + ' ' + contentHtml)
  }

  setFocusHandlers() {
    this.richtext.setTitleFocusHandler(() => {
      //alert('title focus');
    });
    this.richtext.setContentFocusHandler(() => {
      //alert('content focus');
    });
  }


  render() {
    const { navigation } = this.props;
    return (
      <Fragment>
        <Text>Trend</Text>
        <RichTextEditor
          ref={(r) => this.richtext = r}
          style={styles.richText}
          initialTitleHTML={'Title!!'}
          initialContentHTML={'Hello <b>World</b> <p>this is a new paragraph</p> <p>this is another new paragraph</p>'}
          editorInitializedCallback={() => this.onEditorInitialized()}
        />
        <RichTextToolbar
            getEditor={() => this.richtext}
          />
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  richText: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
});

const mapDispatchToProps = dispatch => {
  return {
    themeChange: theme => dispatch(actions.themeChange(theme))
  }
};
export default connect(null, mapDispatchToProps)(Trend);