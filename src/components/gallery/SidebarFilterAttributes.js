const SidebarFilterAttributes = () => {
	return (
		<aside class="menu">
			<p class="menu-label">
				Filter by
			</p>
			<form>
				<div class="field">
					<label class="label">
						attribute 1
					</label>
					<div class="control">
						<div class="select">
							<select>
								<option>option 1</option>
								<option>option 2</option>
								<option>option 3</option>
							</select>
						</div>
					</div>
				</div>
				<div class="field">
					<label class="label">
						attribute 2
					</label>
					<div class="control">
						<div class="select">
							<select>
								<option>option 1</option>
								<option>option 2</option>
								<option>option 3</option>
							</select>
						</div>
					</div>
				</div>
				<div class="field">
					<label class="label">attribute 3</label>
					<div class="control">
						<div class="select">
							<select>
								<option>option 1</option>
								<option>option 2</option>
								<option>option 3</option>
							</select>
						</div>
					</div>
				</div>
				<div class="field">
					<div class="control">
						<button class="button is-link">
							Apply
						</button>
					</div>
				</div>
			</form>
		</aside>	
	);
}

export default SidebarFilterAttributes;