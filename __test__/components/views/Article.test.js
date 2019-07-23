import React from 'react';
import NewArticle from '@components/views/Article/NewArticle';
import EditArticle from '@components/views/Article/EditArticle';
import SingleArticle from '@components/views/Article/SingleArticle';

const editProps = {
    article: {
        title: 'hello',
        body: "{\"time\":1563876688871,\"blocks\":[{\"type\":\"paragraph\",\"data\":{\"text\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed nisi lacus sed viverra tellus in hac habitasse platea. At auctor urna nunc id cursus metus aliquam<b> eleifend mi. Vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt. Scelerisque varius morbi enim nunc faucibus. Turpis in eu mi bibendum neque egestas congue quisque. Sed sed risus pretium quam. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Eget est lorem ipsum dolor. Hac habitasse platea dictumst vestibulum rhoncus. Duis at tellus at urna condimentum mattis pellentesque id. Facilisis gravida neque convallis a cras.</b>\"}},{\"type\":\"paragraph\",\"data\":{\"text\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed nisi lacus sed viver<code class=\\\"inline-code\\\">ra tellus in hac ha</code>bitasse platea. At auctor urna nunc id cursus metus aliquam eleifend mi. Vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt. Scelerisque varius morbi enim nunc faucibus. T<mark class=\\\"cdx-marker\\\">urpis in eu mi bibendum neque egestas congue quisque. Sed sed risus pretium quam. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Eget est lorem ipsum dolor. Hac habitasse platea dictumst vestibulum rhoncus. Duis at tellus at urna condimentum mattis pellentesque id. Facilisis gravida neque convallis a cras.</mark>\"}}],\"version\":\"2.15.0\"}",
        tags: ['andela'],
        author: {
            id: 1,
            username: 'Berry',
            profile: {

            }
        }
    },
    match: {
        params: {
            articleId: 'hello'
        }
    },
    getSingleArticle: jest.fn(),
    editArticle: jest.fn(),
    getAllTags: jest.fn(),
    history: { push: jest.fn() }
};

const newProps = {
    title: 'Hello World',
    tags: ['andela']
};

describe('<Article/>', () => {
    it('renders New Article page component without crashing', () => {
        const shallowWrapper = shallow(<NewArticle {...newProps} />);

        expect(toJson(shallowWrapper)).toMatchSnapshot();
        expect(shallowWrapper.find('NewArticle')).toBeTruthy();
        expect(shallowWrapper.find('NewArticle')).toBeTruthy();
    });

    it('renders Edit Article page component without crashing', () => {
        const shallowWrapper = shallow(<EditArticle {...editProps} />);

        expect(toJson(shallowWrapper)).toMatchSnapshot();
        expect(shallowWrapper.find('EditArticle')).toBeTruthy();
    });

    it('renders Single Article page component without crashing', () => {
        const shallowWrapper = shallow(<SingleArticle {...editProps} />);

        expect(toJson(shallowWrapper)).toMatchSnapshot();
        expect(shallowWrapper.find('SingleArticle')).toBeTruthy();
    });
});