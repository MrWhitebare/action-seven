const toolUtil={
    tco<T>(f:Function) {
        let value:T;
        let active = false;
        let accumulated = [];
        return (...ids:unknown[]) =>  {
          accumulated.push(ids);
          if (!active) {
            active = true;
            while (accumulated.length) {
              value = f.apply(this,accumulated.shift());
            }
            active = false;
            return value;
          }
        };
    }
};

export default toolUtil;