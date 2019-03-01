export default function(e,t){e.interceptors.request.use(function(e){return e.startTime=(new Date).getTime(),e}),e.interceptors.response.use(function(e){return e.config.endTime=(new Date).getTime(),e.config.ms=e.config.endTime-e.config.startTime,"function"==typeof t&&t(e),e})}
//# sourceMappingURL=axios-timed.mjs.map
