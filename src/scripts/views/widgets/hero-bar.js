class HeroBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section class="hero">
                <h1>Anda Lapar?</h1>
                <article>
                    <p>
                        Jangan sampai kelaparan membuat anda menderita karena memilih tempat makan yang salah. 
                        <span>#MyRestoCatolague</span> solusi nya
                    </p>
                    <a href="#" class="button">Find Now !!</a>
                </article>
            </section>
        `;
    }
};

customElements.define('hero-bar', HeroBar);
