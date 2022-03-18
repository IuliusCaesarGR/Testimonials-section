class person extends HTMLElement{
    constructor(){
        super();
        this.image = this.getAttribute('image');
        this.name = this.getAttribute('name');
        this.backImage = this.getAttribute('backImg');
        this.attachShadow({ mode: 'open' });
    }
    static get observedAttribute(){
        return ['image', 'name', 'backImage'];
    }
    attributesChangeCallback(attribute, oldValue, newValue){
        switch(attribute){
            case 'image':
                this.image = newValue;
                break;
            case 'name':
                this.name = newValue;
                break;
            case 'backImage':
                this.backImage = newValue;
                break;
            default:
                console.log(Error('Error'));
                break;
        }
    }
    getTemplate(){
        const container = document.createElement('template');
        container.innerHTML = `
        <section>
            <div>
                <figure>
                    <img src="${this.image}" alt="Photo of ${this.name}">
                </figure>
                <p>${this.name}</p>
                <p>Verified Graduate</p>
            </div>
            <div>
                <slot name="principal"><p></p></slot>
                <slot name="secondary"><p></p></slot>
            </div>
        </section>`;
        return container;
    }
    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
        console.log(this.name)
    }
    connectedCallback(){
        this.render();
    }
}

window.customElements.define('testimonial-card', person);