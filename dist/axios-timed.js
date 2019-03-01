module.exports=function(e,n){e.interceptors.request.use(function(e){return e.startTime=(new Date).getTime(),e}),e.interceptors.response.use(function(e){return e.config.endTime=(new Date).getTime(),e.config.ms=e.config.endTime-e.config.startTime,"function"==typeof n&&n(e),e})};
//# sourceMappingURL=axios-timed.js.map
