const handleAsync = (fn) => (req, res, next) => {
	Promise.resolve(fn(req, res, next)).catch((err) => next(err));
};

export default handleAsync;
