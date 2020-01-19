var app = new Vue({
    el: '#app',
    data: {
        message: '测试'
    }
})
var app1 = new Vue({
    el: '#app-2',
    data: {
        message: new Date().toLocaleString()
    }
})
var app2 = new Vue({
    el: '#app-3',
    data: {
        seen : true
    }
})
var app3 = new Vue({
    el : '#app-4',
    data: {
        todos: [
            {text: "测试1"},
            {text: "测试2"},
            {text: "测试3"}
        ]
    }
})
var app4 = new Vue({
    el: '#app-5',
    data: {
        message: 'hello world!'
    },
    methods: {
        reverse: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})