import { renderComponent , expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

//app testing
describe('Testing App',()=>{
    let component;

    beforeEach(()=>{
        component = renderComponent(CommentBox);
    });

    it('should have correct class', ()=> {
       expect(component).to.have.class('comment-box');
    });

    it('should have text area', ()=> {
        expect(component.find('textarea')).to.exist;
    });


    it('has button', ()=> {
        expect(component.find('button')).to.exist;
    });

    //text input functionality tests
    describe('entering test',()=>{
        beforeEach(()=>{
            component.find('textarea').simulate('change','new comment');
        });

        it('shows entered text', ()=> {
            expect(component.find('textarea')).to.have.value('new comment');
        });

        it('entered text cleared when submited', ()=> {
            component.simulate('submit');
            expect(component.find('textarea')).to.have.value('');
        });
    });

});