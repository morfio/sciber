import React from 'react';
import {PCardList} from './PageCardList';
import PageCard from './PageCard';

const PageCardList = ({PCardList}) => {

	return (
		<div>
			{
				PCardList.map((cor, inde) => {
					return (
						<PageCard 
							key={inde}
							img={PCardList[inde].img}
							vidsource={PCardList[inde].vidsource}
							title={PCardList[inde].title}

						/>
						)

				})
			}
		</div>

		);
}
export default PageCardList;