/**
 * Created by Lu on 10/10/2018.
 */
class LikeButton {
    constructor(){
        this.state = {isLiked:false};
    }
    changeLikeText(){
        const likeText = this.ele.querySelector('.like-text');
        this.state.isLiked = !this.state.isLiked;
        likeText.innerHTML = this.state.isLiked ? 'Cancel':'Like';
    }
    render(){
        this.ele = document.createElement("div");
        this.ele.innerHTML = `
          <button class='like-btn'>
            <span class='like-text'>Like</span>
            <span>\uD83D\uDC4D</span>
          </button>
        `;
        this.ele.onclick = this.changeLikeText.bind(this);
        return this.ele;
    }
}

const wrapper = document.querySelector('.wrapper');
const likeBtn1 = new LikeButton();
wrapper.appendChild(likeBtn1.render());
const likeBtn2 = new LikeButton();
wrapper.appendChild(likeBtn2.render());