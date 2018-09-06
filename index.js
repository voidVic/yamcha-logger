
/**
 * Author: Ankit Sharma <vicnwz@gmail.com>
 * This module is under MIT lc
 */
//color arg is added for future extension to the coloring of logs.
// keep calm: Team Yamcha Logs

 function Logger(options){
    this.logObj = {};
    this.error = function(arg1, arg2, color){ this.log('error', arg1, arg2, getSrc(new Error()), color); },
    this.info = function(arg1, arg2, color){ this.log('info', arg1, arg2, getSrc(new Error()), color); },
    this.debug = function(arg1, arg2, color){ this.log('debug', arg1, arg2, getSrc(new Error()), color); },
    this.warn = function(arg1, arg2, color){ this.log('warn', arg1, arg2, getSrc(new Error()), color); },
    this.fatal = function(arg1, arg2, color){ this.log('fatal', arg1, arg2, getSrc(new Error()), color); }
    this.lineTrace = options? (options.lineTrace) : false;

    console.log(this.caller);
}

Logger.prototype.add = function(x){
    x = validateObjectData(x);
    Object.assign(this.logObj, x);
};

Logger.prototype.delete = function(x){
    delete this.logObj[x];
}

Logger.prototype.log = function(level, message, obj, src, color){
    obj = validateObjectData(obj);
    switch(level){
        case 'debug':
        obj['level'] = 20;
        break;

        case 'info':
        obj['level'] = 30;
        break;
        
        case 'warn':
        obj['level'] = 40;
        break;

        case 'error':
        obj['level'] = 50;
        break;
        
        case 'fatal':
        obj['level'] = 60;
        break;
    }
    obj['message'] = message || '';
    obj['src'] = src;

    Object.assign(obj, this.logObj);
    
    return (console.log(obj));
}

function validateObjectData(obj) {
    obj = obj || {}
    if(typeof(obj) != 'object'){
        obj = {}
    }
    return obj;
}

function getSrc(err) {
    let src = '';
    try{
        src = err.stack.split(' (')[2].split(')')[0]
    }
    catch(ex){
    }
    return src;
}

module.exports = {
    Logger
}

let l1 = new Logger();
l1.info();