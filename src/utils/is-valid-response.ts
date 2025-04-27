const isValidResponse = (statusCode: number) => {
	return statusCode >= 200 && statusCode < 300;
};

export default isValidResponse;
