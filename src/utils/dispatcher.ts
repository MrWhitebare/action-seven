class Log{

    private static console = true;
    
    log(title: string, text: string) {
        if (!Log.console) return;
        if (import.meta.env.MODE === 'production') return;
        const color = '#ff4d4f';
        console.log(
            `%c ${title} %c ${text} %c`,
            `background:${color};border:1px solid ${color}; padding: 1px; border-radius: 2px 0 0 2px; color: #fff;`,
            `border:1px solid ${color}; padding: 1px; border-radius: 0 2px 2px 0; color: ${color};`,
            'background:transparent'
        );
    }

    closeConsole() {
        Log.console = false;
    }

}

class EventDispatcher extends Log{

    private listeners: { [type: string]: Function[] } = {};

    protected addEventListener(type: string, listener: Function) {
        if (!this.listeners[type]) {
            this.listeners[type] = [];
        }
        if (this.listeners[type].indexOf(listener) === -1) {
            this.listeners[type].push(listener);
        }
    }

    protected removeEventListener(type: string) {
        this.listeners[type] = [];
    }

    protected dispatchEvent(type: string, data: any) {
        const listenerArray = this.listeners[type] || [];
        if (listenerArray.length === 0) return;
        listenerArray.forEach(listener => {
            listener.call(this, data);
        });
    }

}

export {EventDispatcher};