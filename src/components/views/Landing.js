import React, { Component } from 'react';
import PageLayout from '@components/layout/PageLayout';
import ArticleCard from '@components/commons/Cards/Article';


class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }
  render() {
    return (
      <PageLayout>
        <div className="container mx-auto mt-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 md:w-1/2">
              <ArticleCard />
            </div>
          </div>
        </div>
      </PageLayout>
    )
  }
}

export default Landing;