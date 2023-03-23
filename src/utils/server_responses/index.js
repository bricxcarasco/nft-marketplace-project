const NOT_FOUND = { 
	status: 404, 
	message: 'Record not found' 
};

const SERVER_ERROR = { 
	status: 500, 
	message: 'Internal server error' 
};
  
const SUCCESS = (data = null) => ({ 
	status: 200, 
	message: 'Success',
	data 
});

export { NOT_FOUND, SERVER_ERROR, SUCCESS };