import React from 'react';
import {PCardList} from './PageCardAPI';
import PageCard from './PageCard';
import "./PageCardList.css";

const PageCardList = ({PCardList, matchi}) => {

	return (
		<div className="pageCards" >
			{
				PCardList.map((cor, inde) => {
					return (
						
							<PageCard 
								key={inde}
								img={PCardList[inde].img}
								vidsource={PCardList[inde].vidsource}
								title={PCardList[inde].title}
								topic={PCardList[inde].topic}
								matchi={matchi}
								/>
						

						
						)

				})
			}
		</div>

		);
}
export default PageCardList;