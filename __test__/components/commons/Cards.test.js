import React from 'react';
import CommentCard from '@components/commons/Cards/CommentCard';
import CreateCommentCard from '@components/commons/Cards/CreateCommentCard';
import Search from '@components/commons/Cards/Search';
import Suggested from '@components/commons/Cards/Suggested';
import Tags from '@components/commons/Cards/Tags';
import ReadTime from '@components/commons/Cards/readTime';
import ProfileCard from '@components/commons/Cards/profileCard';
import DisplayStar from '@components/commons/Cards/displayStar';

const props = {
  name: 'Kingsmen',
  src: '',
  alt: 'image',
  body: 'Hello World',
  createdAt: new Date()
};

describe('<Cards />', () => {
  it('render the comment card component', () => {
      const shallowWrapper = shallow(<CommentCard {...props} />);

      expect(toJson(shallowWrapper)).toMatchSnapshot();
      expect(shallowWrapper.find('CommentCard')).toBeTruthy();
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
    const shallowWrapper = shallow(<Tags tags={[]} />);

    expect(toJson(shallowWrapper)).toMatchSnapshot();
    expect(shallowWrapper.find('Tags')).toBeTruthy();
  });

  it('render the read time component', () => {
    const shallowWrapper = shallow(<ReadTime time={new Date()} />);

    expect(toJson(shallowWrapper)).toMatchSnapshot();
    expect(shallowWrapper.find('ReadTime')).toBeTruthy();
  });

  it('render the profile card component', () => {
    const shallowWrapper = shallow(<ProfileCard time={new Date()} name="authur" src="" averageRating={4} />);

    expect(toJson(shallowWrapper)).toMatchSnapshot();
    expect(shallowWrapper.find('ProfileCard')).toBeTruthy();
  });

  it('render the display star component', () => {
    const shallowWrapper = shallow(<DisplayStar averageRating={4} />);

    expect(toJson(shallowWrapper)).toMatchSnapshot();
    expect(shallowWrapper.find('DisplayStar')).toBeTruthy();
  });
});