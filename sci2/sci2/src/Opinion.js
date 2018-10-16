import React from 'react';
import './Opinion.css';
import BigCard from './BigCard';

 const Opinion = ({ Opinion}) => {
      return(
        <div className='opinionCard'>
          {
            Opinion.map((card, index) => {
              return(
                <BigCard className='opinions'
                  key={index}
                  img={Opinion[index].img}
                  tag={Opinion[index].tag}
                  text={Opinion[index].text} 
                  links={Opinion[index].links}
                />
                  )
            })
          }
        </div>
        )
    }


export default Opinion;

// const Opinion = ({ Opinion}) => {
//   return(
//     <div>
//       {
//         Opinion.map((card, index) => {
//           return(
//             <BigCard className='opinions'
//               key={index}
//               img={Opinion[index].img}
//               tag={Opinion[index].tag}
//               text={Opinion[index].text} 
//               // links={Opinion.links}
//             />
//               )
//         })
//       }
//     </div>
//     )
// }
// const Opinion = ({ Opinion}) => {
//   return(
//     <div>
//       {Opinion.map((card, index) => {
//           return(
//             <BigCard className='opinions'
//               key={index}
//               img={Opinion[index].img}
//               tag={Opinion[index].tag}
//               text={Opinion[index].text} 
//               links={Opinion[index].links}
//             />
//               )
//         })
//       }
//     </div>
//     )
// }