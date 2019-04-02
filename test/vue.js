const options = {
    template:
        `<div>
            <span>{{text1}}</span> 
        <div>`
    ,
    data() {
        return {
            name: 'name1',
        };
    },
    watch: {
        'name': function () {
            console.log('name changed');
        },
    },
    computed: {
        fullName: function() {
            return 'zuo  ' + this.name;
        }
    },
};

function observe (value) {
    for (let key in value) {
        defineReactive(value, key, value[key]);
    }
}

class Dep {
    constructor () {
        this.subs = []; // 订阅列表
    }
    addSub(sub) {
        this.subs.push(sub);
    }
    notify() {
        for (let sub of this.subs) {
            sub.update();
        }
    }
}

class Watcher {
    constructor() {

    }
}

function defineReactive (obj, key, val) {
    const dep = new Dep();

    Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: true,
        get() {
            console.log('触发get');
            return val;
        },
        set(newVal) {
            console.log('触发set');
            val = newVal;
            dep.notify();
        }
    })
}

class MyVue {
    constructor (options) {
        // 
        const vm = this;
        this.$options = options;
        vm._data = options.data();
        // initMixin 阶段

        // initLifecycle(vm); // 初始化
        // initEvents(vm); // 初始化事件方法
        // initRender(vm); // 初始化$attrs 等属性
        // callHook(vm, 'beforeCreate');
        // initInjections(vm); // 处理injections
        /**
         * 这一阶段初始化options属性
         * 顺序依次是:
         *  props
         *  methods
         *  data
         *  computed
         *  watche
         */
        observe.call(vm, vm._data);
        // initState(vm) // 
        // initProvide(vm) // resolve provide after data/props
        // callHook(vm, 'created')
        // ...

    }
}

const vue = new MyVue(options);

// 测试触发getter
(vue._data.name);
// 测试触发getter
vue._data.name = 'name2';
