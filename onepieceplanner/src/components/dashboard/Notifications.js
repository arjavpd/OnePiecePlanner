import React from 'react';

const Notifications = () => {
	return (
		<div className="card z-depth-0 project-summary">
			<div className="card z-depth-0">
				<div className="card-content">
					<span className="card-title">Bounties</span>
					<ul className="online-users">
						<li style={{color: 'red'}}>Luffy: B 3,000,000,000 </li>
						<li style={{color: '#43a047'}}>Zoro: B 320,000,000 </li>
						<li style={{color: 'orange'}}>Nami: B 66,000,000 </li>
						<li style={{color: '#827717'}}>Ussop: B 200,000,000 </li>
						<li>Sanji: B 330,000,000 </li>
						<li style={{color: '#e91e63'}}>Chopper: B 100 </li>
						<li style={{color: 'purple'}}>Robin: B 130,000,000 </li>
						<li style={{color: '#2196f3'}}>Franky: B 94,000,000 </li>
						<li style={{color: '#607d8b'}}>Brook: B 83,000,000 </li>
						<li style={{color: '#01579b '}}>Jinbe: B 438,000,000 </li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Notifications;
