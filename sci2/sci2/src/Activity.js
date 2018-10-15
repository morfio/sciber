import React from 'react';
import './Activity.css';
import BigCard from './BigCard';

const Activity = ({Activity}) => {
	return(
		<div className='activityCard'>
			{Activity.map((activity, index) =>
				{
					return(
							<BigCard className='activity'
								key={index}
								img={Activity[index].img}
								tag={Activity[index].tag}
								text={Activity[index].text} 
								links={Activity[index].links}
							/>
							)
				}
			)}
		</div>
		)
}

export default Activity;

// const Opinion = ({ Opinion}) => {
//   return(
//     <div>
//       {Opinion.map((card, index) => 
//       	{
//           return(
// 	            <BigCard className='opinions'
// 	              key={index}
// 	              img={Opinion[index].img}
// 	              tag={Opinion[index].tag}
// 	              text={Opinion[index].text} 
// 	              links={Opinion[index].links}
//             	/>
//               )
//         }
//         )}
//     </div>
//     )
// }

// export default Opinion;