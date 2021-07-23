import CONFIG from '../../globals/config';

class RestoDetailElement extends HTMLElement {
    set resto(values) {
        this._resto = values;
        this.render();
    }

    _renderItems(items) {
        let itemsEl = '';
        if (Object.keys(items).length !== 0) {
            items.forEach((item) => {
                itemsEl += `<li>${item.name}</li>`;
            });
        }
        return itemsEl;
    }

    _renderComments(comments) {
        let commentEl = '';
        if (Object.keys(comments).length !== 0) {
            comments.forEach((comment) => {
                commentEl += `
                    <li>    
                        <blockquote>
                            <p>${comment.review}</p>
                            <cite>
                                ${comment.date} by 
                                <strong>
                                    ${comment.name}
                                </strong>
                            </cite>
                        </blockquote>
                    </li>
                `;
            });
        }
        return commentEl;
    }

    render() {
        this.innerHTML = `
            <div id="detailresto" class="detailresto">
                <figure>
                    <img class="resto_poster" src="${CONFIG.IMG.imgMedium(this._resto.pictureId)}" 
                    alt="${this._resto.name}" />
                </figure>
                <section class="resto_info">
                    <h2 class="resto_title">${this._resto.name}</h2>
                    <div class="resto_description">
                        <h3>Resto Description:</h3>
                        <p>${this._resto.description}</p>
                    </div>
                    <ul class="resto_meta">
                        <li>
                            <strong>Rating:</strong> ${this._resto.rating}
                        </li>
                        <li>
                            <strong>City:</strong> ${this._resto.city}
                        </li>
                        <li>
                            <strong>Address:</strong> ${this._resto.address}
                        </li>
                        <li>
                            <strong>Categories:</strong>
                            <ul class="boxed_list">
                                ${this._renderItems(this._resto.categories)}
                            </ul>
                        </li>
                        <li>
                            <strong>Foods:</strong>
                            <ul class="boxed_list">
                                ${this._renderItems(this._resto.menus.foods)}
                            </ul>
                        </li>
                        <li>
                            <strong>Drinks:</strong>
                            <ul class="boxed_list">
                                ${this._renderItems(this._resto.menus.drinks)}
                            </ul>
                        </li>
                    </ul>
                    <div class="resto_review">
                        <h3>Customer Review:</h3>
                        <ul class="user-reviews">
                            ${this._renderComments(this._resto.customerReviews)}
                        </ul>
                    </div>
                </section>
            </div>
        `;
    }
};

customElements.define('resto-detail', RestoDetailElement);
