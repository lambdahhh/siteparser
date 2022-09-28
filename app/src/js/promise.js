class MyPromise {

    constructor(executor) {
        this.queue = [];
        this.errorHandler = () => {};
        this.finallyHandler = () => {};

        try {
            executor.call(this, this.resolve.bind(this), this.reject.bind(this));
        } catch (e) {
            this.errorHandler(e);
        } finally {
            this.finallyHandler();
        }
    }

    resolve(data) {
        this.queue.forEach(callback => {
            data = callback(data);
        })
        this.finallyHandler();
    }

    reject(err) {
        this.errorHandler(err);
        this.finallyHandler();
    }

    then(fn) {
        this.queue.push(fn);
        return this;
    }

    catch(fn) {
        this.errorHandler = fn;
        return this;
    }

    finally(fn) {
        this.finallyHandler = fn
        return this;
    }

}

const my = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        const response = {
            status: 'ok',
            code: 200,
            data: {
                count: 123
            }
        }
        resolve(response);
        // reject('ERR 404')
    }, 1000);
})

my
    .then(response => {
        console.log('code', response.code)
        return response;
    })
    .then(response => {
        console.log('status', response.status);
        return response;
    })
    .then(response => {
        console.log('data', response.data);
        return response;
    })
    .catch(err => {
        console.error(err);
    })
    .finally(() => console.log('THE END'));