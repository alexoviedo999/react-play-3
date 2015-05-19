var Poll = React.createClass({
	render: function () {
		return (
				<div className="container">
					<h1>Poll</h1>
					
					<form>
						<p className="h3">How did you hear about us?</p>

						<RadioOption value='newspaper'>
							Newspaper
						</RadioOption>
						<RadioOption value='radio'>
							Radio
						</RadioOption>
						<RadioOption value='tv'>
							Television
						</RadioOption>
						<RadioOption value='search'>
							Search Engine
						</RadioOption>
						<RadioOption value='social'>
							Social Media
						</RadioOption>
						<RadioOption value='other'>
							Other
						</RadioOption>
						<RadioOtherOption/>

						<p><input type="submit"/></p>
					</form>
				</div>
			)
	}
})