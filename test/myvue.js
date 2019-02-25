class MyVue {
    constructor(options) {
        this.$options = options;
        this.name = options.name;
        const vm = this;
        this._data = options.data();

        observer(this._data);

        initComputed(vm);
        initWatch(vm);

        new Watcher(vm, () => {
            this._data.name;  // 模拟触发getter
        }, () => {
            console.log('render function');
        });
    }
}

function initComputed(vm) {
    for (let i in vm.$options.computed) {
        const fn = vm.$options.computed[i];
        new Watcher(vm, fn, () => {
            vm._data[i] = fn.call(vm);
        });
    }
}

function initWatch(vm) {
    for (let i in vm.$options.watch) {
        const fn = () => {
            vm._data[i];
        };
        new Watcher(vm, fn, vm.$options.watch[i]);
    }
}

function observer(obj) {
    for (let key in obj) {
        defineReactive(obj, key, obj[key])
    }
}

let targetNow = null; // 用一个全局变量模拟静态属性
class Dep {
    constructor() {
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
    constructor(vm, fn, cb) {
        this.vm = vm;
        targetNow = this;
        this.getter = fn;
        this.getter.call(vm);
        this.cb = cb;
        targetNow = null;
    }
    update() {
        this.cb && this.cb.call(this.vm);
    }
}

function defineReactive (obj, key, val) {
    const dep = new Dep();

    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get() {
            if (targetNow) {
                dep.addSub(targetNow);
            }
            return val;
        },
        set(newVal) {
            val = newVal;
            dep.notify();
        },
    });
}

const data = {
    name: 'defaultName',
};

const options = {
    template: '',
    data() {
        return data;
    },
    computed: {
        fullName: function () {
            console.log('computed the fullName');
            return this._data.name + ' Tom';
        },
    },
    watch: {
        name() {
            console.log('watch the name changed in name');
        },
    },
};


const testVue1 = new MyVue(Object.assign(options, { name: 'test1' }));

testVue1._data.name;
console.log('now we change the name...')
console.log('：');
data.name = 'cname';

console.log('check the computed: ' + testVue1._data.fullName)