/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import PageLayout from '@components/layout/PageLayout';
import Textarea from 'react-textarea-autosize';
// import { WithContext as ReactTags } from 'react-tag-input';
import { Helmet } from 'react-helmet';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// import { faTimesCircle } from '@fortawesome/fontawesome-free-regular';
import Portal from '@components/commons/utilities/Portal';
// import Button from '@components/commons/utilities/Button';
// import FontAwesome from '../../commons/utilities/FontAwesome';
import './editorjs';
import './index.scss';

// const KeyCodes = {
//   comma: 188,
//   enter: 13,
// };
 
// const delimiters = [KeyCodes.comma, KeyCodes.enter];


class NewArticle extends Component {
  static propTypes = {
    draft: PropTypes.bool
  }

  static defaultProps = {
    draft: false
  }

  constructor(props) {
    super(props);

    this.title = React.createRef();
    this.state = {
      draft: false,
      tags: [],
      suggestions: [
        {
          id: 'Family',
          text: 'Family'
        }
      ]
    };
  }

  handleDelete = (i) => {
    const { tags } = this.state;
    this.setState({
     tags: tags.filter((tag, index) => index !== i),
    });
  }

  handleAddition = (tag) => {
    this.setState(state => ({ tags: [...state.tags, tag] }));
  }

  handleDrag = (tag, currPos, newPos) => {
    const { tags } = this.state
    const allTags = [...tags];
    const newTags = allTags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    this.setState({ tags: newTags });
  }

  showTagModal = () => {
    const { draft } = this.props;
    this.setState({
      draft: !draft
    });
  }

  dismisModal = () => {
    this.setState({
      draft: false
    });
  }

  render() {
    const { draft } = this.state;
    return (
      <PageLayout>
        <Helmet>
          <title>New Article - Author&apos;s Haven</title>
        </Helmet>
        <div className="flex float-right">
          <button type="button" className="py-1 px-2 text-sm border rounded flex-end outline-none" onClick={this.showTagModal}>Ready to Publish</button>
        </div>
        <div className="article-container mx-auto mt-6">
          <Textarea inputRef={this.title} className="textarea" placeholder="Title" maxlength="50" />
          <div id="editorjs" />
        </div>

        <Portal>
          <div className={classNames('relative', { 'hidden': !draft })}>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-white h-screen w-screen z-20">
              {/* <div className="article-container mx-auto flex h-full w-full z-20"> */}
              <div className="container h-screen w-screen">
                <div className="flex flex-center justify-center items-center">
                  Hello
                </div>
              </div>
            </div>
          </div>
        </Portal>
      </PageLayout>
    );
  }
}

export default NewArticle;
