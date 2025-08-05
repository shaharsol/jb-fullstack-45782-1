"use strict";

(async () => {

    const getData = url => fetch(url).then(response => response.json())

    const fetchTodos = () => getData('https://dummyjson.com/todos')

    // generateHTML (process input)
    const generateTodosHTML = todos => {
        const html = todos.reduce((cumulative, { userId, completed }) => {
            const current = [...cumulative]
            const currentUserId = current.find(current => current.userId === userId)
            if (currentUserId) {
                currentUserId.openTodos += completed ? 0 : 1
                currentUserId.completedTodos += completed ? 1 : 0
            } else {
                current.push({
                    userId,
                    openTodos: completed ? 0 : 1,
                    completedTodos: completed ? 1 : 0
                })
            }
            return current
        }, []).map(({ userId, openTodos, completedTodos }) => `
            <tr>
                <td>${userId}</td>
                <td>${openTodos}</td>
                <td>${completedTodos}</td>
            </tr>
        `).join('')

        return html
    }


    // renderHTML (generate output)
    const renderHTML = (html, target) => document.getElementById(target).innerHTML = html

    const renderTodosHTML = html => renderHTML(html, 'users-list')

    // main...
    const { todos } = await fetchTodos()
    const todosHtml = generateTodosHTML(todos)
    renderTodosHTML(todosHtml)


})()
