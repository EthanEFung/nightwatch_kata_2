window.onload = function() {
  const $submit = document.getElementsByTagName('button').item(0);

  $submit.addEventListener('click', e => {
    e.preventDefault();
    const $list = document.getElementsByTagName('ul').item(0);

    const input = document.getElementsByTagName('input').item(0).value;

    const $todo = document.createElement('li')
    $todo.textContent = input;

    $list.appendChild($todo);
  })
}