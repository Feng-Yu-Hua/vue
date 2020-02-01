new Vue({
    el:"#app",
    data:{
        Home:'首頁',
        Feature:'自我介紹',
    }
});
new Vue({
    el:"#app4",
    data:{
        item:4
    }
});
new Vue({
    el:"#app2",
    data:{
        day:'Thursday',
        hotbooks:[
            {   id:'1',
                cover:'../vue/images/100-2500x1656.jpg',
                name:'自我介紹',
                description:'你好阿'
            },
            {
                id:'2', 
                cover:'../vue/images/1005-5760x3840.jpg',
                name:'自我介紹2',
                description:'你好阿2'
            },
            {
                id:'3',
                cover:'../vue/images/1000-5626x3635.jpg',
                name:'自我介紹3',
                description:'你好阿3'
            }
        ]
    }
})
Vue.component('card-item',{
    template:`
    <div>
        <div class="mt-2">
            <slot name="title"></slot>
        </div>
        <div class="mt-2">
            <slot name="body"></slot>
        </div>        
    </div>
    `
})