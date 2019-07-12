import React, { Component } from 'react';
import PageLayout from '@components/layout/PageLayout';
import './index.scss';


class SingleArticle extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {
    
  }
  render() {
    return (
      <PageLayout>
        <div className="article-container mx-auto mt-8">
          Hello
        </div>
      </PageLayout>
    )
  }
}

export default SingleArticle;

