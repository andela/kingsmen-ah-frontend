import React, { Component } from 'react';
import PageLayout from '@components/layout/PageLayout';
import Textarea from 'react-textarea-autosize';
import { WithContext as ReactTags } from 'react-tag-input';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { faTimesCircle } from '@fortawesome/fontawesome-free-regular';
import Portal from '@components/commons/utilities/Portal';
import Button from '@components/commons/utilities/Button';
import FontAwesome from '../../commons/utilities/FontAwesome';
import Editor from './Editor';
import './index.scss';
import '../../commons/index.scss';

const KeyCodes = {
  comma: 188,
  enter: 13,
};
 
const delimiters = [KeyCodes.comma, KeyCodes.enter];
let ready = false;

const logger = console;
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
      title: '',
      tags: [],
      suggestions: [
        {
          id: 'Family',
          text: 'Family'
        }
      ]
    };
  }

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleDelete = (i) => {
    const { tags } = this.state;
    this.setState({
     tags: tags.filter((tag, index) => index !== i),
    });
  }

  handleAddition = (tag) => {
    const { tags } = this.state;
    if (tags.length < 5) {
      this.setState(state => ({ tags: [...state.tags, tag] })); 
    } else {
      logger.log('The maximum number of tags allowed is 5');
    }
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

  publishArticle = () => {
    const { createNewArticle, history } = this.props;
    const { title, tags } = this.state;

    let articleTags = [];
    tags.map(tag => {
      articleTags.push(tag.text);
    });

    this.editor.isReady
      .then(() => {
        this.editor.save().then((outputData) => {
          const values = {
            title,
            body: JSON.stringify(outputData),
            tags: articleTags
          };

          if (tags.length) {
            createNewArticle(values, history);
          } else {
            toast.error('Minimum of 1 tags required');
          }
        });
      })
      .catch(() => {
        toast.error('Please check your internet connection!');
      });
  }

  render() {
    if (!this.editor) {
      this.editor = Editor();
    }
    const { draft, tags, suggestions, title } = this.state;
    if (title.length > 4) {
      ready = true;
    }

    return (
      <PageLayout>
        <Helmet>
          <title>New Article - Author&apos;s Haven</title>
        </Helmet>
        <div className="flex float-right">
          <Button type="solid" color="blue" onClick={this.showTagModal} disabled={!ready}>Review Article</Button>
        </div>
        <div className="content-area mx-auto mt-6">
          <Textarea inputRef={this.title} className="textarea" name="title" onChange={this.onChange} placeholder="Title" maxLength="50" />
          <div id="editorjs" />
        </div>

        <Portal>
          <div className={classNames('relative', { 'hidden': !draft })}>
            <div className="absolute top-0 left-0 right-0 bottom bg-transparent-0 z-20 overflow-y-hidden h-screen fixed">
              <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="container mx-auto text-center text-black opacty-100 z-30">
                  <div className="float-right block">
                    <FontAwesome
                      type={faTimesCircle}
                      onClick={this.dismisModal}
                      onKeyDown={this.dismisModal}
                      styleClass="outline-none text-2xl cursor-pointer"
                    />
                  </div>
                  <div className="block">
                    <ReactTags
                      tags={tags}
                      suggestions={suggestions}
                      delimiters={delimiters}
                      handleDelete={this.handleDelete}
                      handleAddition={this.handleAddition}
                      handleDrag={this.handleDrag}
                      handleTagClick={this.handleTagClick}
                      placeholder="Add a tag"
                      classNames={{
                        tags: 'tagsClass',
                        tagInput: 'tagInputClass',
                        tagInputField: 'tag-input-field-class',
                        selected: 'selectedClass flex justify-center',
                        tag: 'tagClass',
                        remove: 'removeClass',
                        suggestions: 'suggestionsClass',
                        activeSuggestion: 'activeSuggestionClass'
                      }}
                    />
                    <Button type="solid" color="blue" onClick={this.publishArticle} id="publish-article">Publish Now</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Portal>
      </PageLayout>
    );
  }
}

NewArticle.propTypes = {
  createNewArticle: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired
}

export default withRouter(NewArticle);
