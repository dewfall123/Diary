function LazyMan(name = 'Hank') {
    this.actions = [];

    this.hi = () => {
        const act = () => console.log(`Hi! This is ${name}!`);
        this.actions.push(act);
        return this;
    }
    
    this.sleep = (s) => {
        const act = () => {
            return new Promise(resolve => {
                setTimeout(() => {
                    console.log(`Wake up after ${s}`);
                    resolve();
                }, s * 1000);
            });
        };
        this.actions.push(act);
        return this;
    }

    this.sleepFirst = (s) => {
        const act = () => {
            return new Promise(resolve => {
                setTimeout(() => {
                    console.log(`Wake up after ${s}`);
                    resolve();
                }, s * 1000);
            });
        };
        this.actions.unshift(act);
        return this;
    }

    this.eat = (something) => {
        const act = () => console.log(`eat ${something}!`)
        this.actions.push(act);
        return this;
    }

    setTimeout(async () => {
        for (let act of this.actions) {
            await act();
        }
    }, 0);
    
    return this.hi(name);
}

// LazyMan('Hank').sleep(10).eat('dinner');
// LazyMan("Hank").eat("dinner").eat("supper")
LazyMan("Hank").sleepFirst(5).sleep(5).eat("supper")