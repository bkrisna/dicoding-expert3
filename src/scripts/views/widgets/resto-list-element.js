import CONFIG from '../../globals/config';

class RestoListElement extends HTMLElement {
    set restos(values) {
        this._restos = values;
        this.render();
    }

    _renderItems(items) {
        let itemsEl = '';
        if (Object.keys(items).length !== 0) {
            items.forEach((item) => {
                itemsEl += `
                    <li>
                        <figure>
                            <img src="${CONFIG.IMG.imgSmall(item.pictureId)}" alt="gambar-resto-${item.name}">
                            <figcaption>
                                <h3>${item.name} - ${item.city}</h3>
                            </figcaption>
                        </figure>
                        <article>
                            <h3>Rating: ${item.rating}<h3>
                            <p class="text-concat">
                                ${item.description}
                            </p>
                        </article>
                        <a href="#/detail/${item.id}" class="button">
                            Read More ...
                        </a>
                    </li>    
                `;
            });
        }
        return itemsEl;
    }

    render() {
        this.innerHTML = `
            <section class="restos" id="restos">
                <ul class="restolist">
                    ${this._renderItems(this._restos)}
                </ul>
            </section>
        `;
    }
};

customElements.define('resto-list', RestoListElement);
