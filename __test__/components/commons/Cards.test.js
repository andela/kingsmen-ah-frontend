import React from 'react';
import ArticleCard from '@components/commons/Cards/Article';
import CommentCard from '@components/commons/Cards/CommentCard';
import CreateCommentCard from '@components/commons/Cards/CreateCommentCard';
import Search from '@components/commons/Cards/Search';
import Suggested from '@components/commons/Cards/Suggested';
import Tags from '@components/commons/Cards/Tags';
import ReadTime from '@components/commons/Cards/readTime';
import ProfileCard from '@components/commons/Cards/profileCard';
import DisplayStar from '@components/commons/Cards/displayStar';

const articleProps = {
  isSmall: true,
  article: {
    author: {
      username: ''
    },
    slug: 'ape'
  }
};

const props = {
  name: 'Kingsmen',
  src: '',
  alt: 'image',
  body: 'Hello World',
  createdAt: "2345678"
};

describe('<Cards />', () => {
  it('render the comment card component', () => {
      const shallowWrapper = shallow(<CommentCard {...props} />);

      expect(toJson(shallowWrapper)).toMatchSnapshot();
      expect(shallowWrapper.find('CommentCard')).toBeTruthy();
  });

  it('render the article card component', () => {
    const shallowWrapper = shallow(<ArticleCard {...articleProps} isSmall={false} />);

    expect(toJson(shallowWrapper)).toMatchSnapshot();
    expect(shallowWrapper.find('ArticleCard')).toBeTruthy();
    expect(shallowWrapper.find('img').props().width).toEqual('100%');
  });

  it('render the article card component', () => {
    const shallowWrapper = shallow(<ArticleCard {...articleProps} />);

    expect(toJson(shallowWrapper)).toMatchSnapshot();
    expect(shallowWrapper.find('ArticleCard')).toBeTruthy();
  });

  it('render the create new comment card component', () => {
    const shallowWrapper = shallow(<CreateCommentCard {...props} />);

    expect(toJson(shallowWrapper)).toMatchSnapshot();
    expect(shallowWrapper.find('CreateCommentCard')).toBeTruthy();
  });

  it('render the search card component', () => {
    const shallowWrapper = shallow(<Search {...props} />);

    expect(toJson(shallowWrapper)).toMatchSnapshot();
    expect(shallowWrapper.find('Search')).toBeTruthy();
  });

  it('render the suggested card component', () => {
    const shallowWrapper = shallow(<Suggested {...props} />);

    expect(toJson(shallowWrapper)).toMatchSnapshot();
    expect(shallowWrapper.find('Suggested')).toBeTruthy();
  });

  it('render the tags component', () => {
    const shallowWrapper = shallow(<Tags tags={['andela']} />);

    expect(toJson(shallowWrapper)).toMatchSnapshot();
    expect(shallowWrapper.find('Tags')).toBeTruthy();
    expect(shallowWrapper.find('p')).toHaveLength(1);
  });

  it('render the read time component', () => {
    const shallowWrapper = shallow(<ReadTime time="12345" />);

    expect(toJson(shallowWrapper)).toMatchSnapshot();
    expect(shallowWrapper.find('ReadTime')).toBeTruthy();
  });

  it('render the profile card component', () => {
    const shallowWrapper = shallow(<ProfileCard time="" name="authur" src="" averageRating={4} />);

    expect(toJson(shallowWrapper)).toMatchSnapshot();
    expect(shallowWrapper.find('ProfileCard')).toBeTruthy();
  });

  it('render the display star component', () => {
    const shallowWrapper = shallow(<DisplayStar averageRating={6} />);

    expect(toJson(shallowWrapper)).toMatchSnapshot();
    expect(shallowWrapper.find('FontAwesome')).toHaveLength(5);
  });

  it('render the display 4 stars component', () => {
    const shallowWrapper = shallow(<DisplayStar averageRating={4} />);

    expect(toJson(shallowWrapper)).toMatchSnapshot();
    expect(shallowWrapper.find('DisplayStar')).toBeTruthy();
    expect(shallowWrapper.find('FontAwesome')).toHaveLength(4);
  });

  it('render the display 3 stars component', () => {
    const shallowWrapper = shallow(<DisplayStar averageRating={3} />);

    expect(toJson(shallowWrapper)).toMatchSnapshot();
    expect(shallowWrapper.find('FontAwesome')).toHaveLength(3);
  });

  it('render the display 2 stars component', () => {
    const shallowWrapper = shallow(<DisplayStar averageRating={2} />);

    expect(toJson(shallowWrapper)).toMatchSnapshot();
    expect(shallowWrapper.find('FontAwesome')).toHaveLength(2);
  });

  it('render the display a star component', () => {
    const shallowWrapper = shallow(<DisplayStar averageRating={1} />);

    expect(toJson(shallowWrapper)).toMatchSnapshot();
    expect(shallowWrapper.find('FontAwesome')).toHaveLength(1);
  });

  it('render the display a star component', () => {
    const shallowWrapper = shallow(<DisplayStar averageRating={0} />);

    expect(toJson(shallowWrapper)).toMatchSnapshot();
    expect(shallowWrapper.find('FontAwesome')).toHaveLength(0);
  });
});