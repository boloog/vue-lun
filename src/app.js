import Vue from 'vue/dist/vue.js'
import Button from '../components/button'
import Icon from '../components/icon'
import ButtonGroup from '../components/button-group'


Vue.component('v-button', Button)
Vue.component('v-icon', Icon)
Vue.component('v-button-group', ButtonGroup)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false

    }
})

// chai 单元测试

import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)

const expect = chai.expect

{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'zan'
        }
    })
    button.$mount('#test')

    let useElement = button.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#icon-zan')
    button.$el.remove()
    button.$destroy()
}

{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'zan',
            loading: true
        }
    })
    button.$mount()

    let useElement = button.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#icon-loading')
    // 执行完删除 节约内存
    button.$el.remove()
    button.$destroy()
}

// 默认
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'zan'
        }
    })
    button.$mount(div)

    let svg = button.$el.querySelector('svg')
    let { order } = window.getComputedStyle(svg)
    expect(order).to.eq('1')
    button.$el.remove()
    button.$destroy()
}


// 触发事件 click
{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'zan'
        }
    })
    button.$mount()

    let spy = chai.spy(function () {
        console.log('事件触发')
    })

    button.$on('click', spy)


    //app.js:95 Uncaught TypeError: Cannot read property 'click' of null
    let childButton = button.$el
    childButton.click()

    expect(spy).to.have.been.called()
}