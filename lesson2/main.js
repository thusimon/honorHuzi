/**
 * Created by Lu on 10/10/2018.
 */
class LikeButton {
    constructor(){
        this.state = {isLiked:false};
    }
    setState(newState){
        const oldEle = this.ele;
        this.state = Object.assign(this.state,newState);
        // every time call setState, should re-render
        this.ele = this.render();
        if (this.updateDom){
            this.updateDom(oldEle, this.ele);
        }
    }
    changeLikeText(){
        let curLiked = this.state.isLiked;
        this.setState({isLiked: !curLiked});
    }
    render(){
        this.ele = document.createElement("div");
        this.ele.innerHTML = `
          <button class='like-btn'>
            <span class='like-text'>${this.state.isLiked ? 'Cancel': 'Like'}</span>
            <span>\uD83D\uDC4D</span>
          </button>
        `;
        this.ele.onclick = this.changeLikeText.bind(this);
        return this.ele;
    }
}

const wrapper = document.querySelector('.wrapper');

const likeBtn1 = new LikeButton();
likeBtn1.updateDom = (oldEle, newEle) =>{
    wrapper.insertBefore(newEle, oldEle);
    wrapper.removeChild(oldEle);
};
wrapper.appendChild(likeBtn1.render());

const likeBtn2 = new LikeButton();
likeBtn2.updateDom = (oldEle, newEle) =>{
    wrapper.insertBefore(newEle, oldEle);
    wrapper.removeChild(oldEle);
};
wrapper.appendChild(likeBtn2.render());