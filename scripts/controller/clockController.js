class clockController{

	constructor(){
		this._locale = 'pt-BR';
		this._time = document.querySelector('[data-js="time"]');
		this._currentDate;	
		this.initialize();
	}

	initialize(){
		setInterval(()=>{
				this.time = this._currentDate.toLocaleTimeString(this._locale);
		},1000);
	}	


	get time(){
		return this._time.innerHTML;
	}
	set time(value){
		this._time.innerHTML = value;
	}

	get _currentDate(){
		return new Date();
	}	
	set _currentDate(value){
		this._currentDate.innerHTML = value
	}

}