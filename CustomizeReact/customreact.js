function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href', reactElement.props.href);  // Use 'href' from props
    domElement.setAttribute('target', reactElement.props.target);

    container.appendChild(domElement);
}

const mainContainer = document.querySelector("#root");

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click Me to Visit Google'
};

customRender(reactElement, mainContainer);
