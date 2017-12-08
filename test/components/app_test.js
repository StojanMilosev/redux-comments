import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

//app testing
describe('Testing App',()=>{
    let component;
    //initialization
    beforeEach(()=>{
        component = renderComponent(App);
    });
    //test for comment section
    it('should have comment section', ()=> {
        expect(component.find('.comment-box')).to.exist;
    });

    //test for comment section
    it('should have comment list', ()=> {
        expect(component.find('.comment-list')).to.exist;
    });
});


