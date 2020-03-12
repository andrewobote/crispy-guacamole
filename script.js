result = () => {
    var element = document.createElement('p');
    var text = document.createTextNode('You did it!');
    element.appendChild(text);
    document.querySelector('#result').appendChild(element);
}
