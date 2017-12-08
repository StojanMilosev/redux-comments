import { renderComponent , expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('comment-list tests',()=>{
    let component;

    beforeEach(()=>{
        const props = {comments:['new comment 1','new comment 2']};
        component = renderComponent(CommentList,null,props);
    });

    it('should shoiw an li for each comment',()=>{
        expect(component.find('li').length).to.equal(2);
    });

    it('should show all comments',()=>{
        expect(component).to.contain('new comment ');
        expect(component).to.contain('new comment 2');
    });

});