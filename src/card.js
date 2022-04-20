class person extends HTMLElement{
    constructor(){
        super();
        this.image = this.getAttribute('image');
        this.name = this.getAttribute('name');
        this.attachShadow({ mode: 'open' });
    }
    static get observedAttribute(){
        return ['image', 'name'];
    }
    attributesChangeCallback(attribute, oldValue, newValue){
        switch(attribute){
            case 'image':
                this.image = newValue;
                break;
            case 'name':
                this.name = newValue;
                break;
            default:
                console.log(Error('Error'));
                break;
        }
    }
    getStyle(){
        return `
            <style>
                :host{
                    width: 95%;
                    max-width:500px;
                    height: 100%;
                    border-radius: 12px;
                    --text-color: hsl(0, 0%, 100%);
                    --border-image: #a775f1;
                }
                @media (min-width: 768px){
                    :host{
                        width: 100%;
                        max-width: 100%;
                    }
                }
                .user{
                    padding: 15px 32px;
                }
                .user_info{
                    width: 100%;
                    display: flex;
                    align-items: center;
                    margin-bottom: 10px;
                    color: var(--text-color);
                    font-weight: 500;
                }
                .user_info img{
                    width: 40px;
                    border-radius: 50%;
                }
                .user_info p{
                    margin:  5px 0;
                }
                .user_info figure{
                    width: 40px;
                    height: 40px;
                    margin: 0 15px 0 0;
                    border: 2px solid var(--border-image);
                    border-radius: 50%;
                }
                .user_info-name{
                    color: var(--text-color);
                }
                .user_info-name + p{
                    font-size: 13px;
                    opacity: .5;
                }
                .user_text-focus{
                    width: 100%;
                    height: 100%;
                    font-size: 21px;
                    font-weight: 600;
                    color: var(--text-color);
                }
                .user_text-review{
                    width: 100%;
                    height: 100%;
                    margin-top: 20px;
                    color: hsl(0, 0%, 70%);
                }
            </style>
        `;
    }
    getTemplate(){
        const container = document.createElement('template');
        container.innerHTML = `
        <section class="user">
            <div class="user_info">
                <figure>
                    <img src="${this.image}" alt="Photo of ${this.name}">
                </figure>
                <div>
                    <p class="user_info-name">${this.name}</p>
                    <p>Verified Graduate</p>
                </div>
            </div>
            <div>
                <slot name="principal" class="user_text-focus"><p></p></slot>
                <slot name="secondary" class="user_text-review"><p></p></slot>
            </div>
        </section>
        ${this.getStyle()}`;
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