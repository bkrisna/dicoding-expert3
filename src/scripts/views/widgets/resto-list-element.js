/* eslint-disable max-len */
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
                    <li class='resto-item'>
                        <figure>
                            <img class="lazyload" data-src="${CONFIG.IMG.imgSmall(item.pictureId)}" alt="gambar-resto-${item.name}">
                            <figcaption class='resto-title'>
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
        if (Object.keys(this._restos).length !== 0) {
            this.innerHTML = `
                <section class="restos" id="restos">
                    <ul class="restolist">
                        ${this._renderItems(this._restos)}
                    </ul>
                </section>
            `;
        } else {
            this.innerHTML = `
                <section class="restos" id="restos">
                    <div class="resto-not-found">Tidak ada daftar resto untuk ditampilkan.</div>
                </section>
            `;
        }
    }
};

customElements.define('resto-list', RestoListElement);
