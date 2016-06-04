var TODOit = function (el) {
  var parent = document.getElementById(el)

  var form = document.createElement('form')

  var input = document.createElement('input')
  input.setAttribute('type', 'text')
  input.setAttribute('placeholder', 'TODO...')

  var addBtn = document.createElement('button')

  // define callback for 'add' button:
  addBtn.onclick = function (e) {
    e.preventDefault()
    var newTodo = document.createElement('p')
    var todoTxt = document.createTextNode(input.value)
    newTodo.appendChild(todoTxt)

    // define callback for strike-through:
    newTodo.onclick = function (e) {
      e.preventDefault()
      if (this.style.getPropertyValue('text-decoration') === 'line-through') {
        this.style.setProperty('text-decoration', 'none')
      } else {
        this.style.setProperty('text-decoration', 'line-through')
      }
    }
    parent.appendChild(newTodo)
    input.value = ''
  }
  var btnTxt = document.createTextNode('Add TODO')
  addBtn.appendChild(btnTxt)

  // put everything on the page:
  form.appendChild(input)
  form.appendChild(addBtn)
  parent.appendChild(form)
}

window.TODOit = TODOit
