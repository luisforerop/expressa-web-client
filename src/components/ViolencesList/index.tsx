import React, { FC, useState } from 'react'
import { tLevel } from '../../../types/global'
import useGetViolencesList from '../../hooks/useGetViolencesList'
import Violence from '../Violence'
import styles from './ViolencesList.module.css'


type ViolencesListProps = {
  level: tLevel
}

const urlsImages = [
  'https://cdn.pixabay.com/photo/2016/01/09/23/03/fist-1131143_640.jpg',
  'https://cdn.pixabay.com/photo/2017/10/13/11/57/female-alcoholism-2847443_640.jpg',
  'https://cdn.pixabay.com/photo/2017/10/17/09/39/metoo-2859980_640.jpg',
  'https://cdn.pixabay.com/photo/2016/10/27/02/37/zombie-1773209_640.jpg',
  'https://cdn.pixabay.com/photo/2021/05/21/12/28/woman-6271033_640.jpg',
  'https://cdn.pixabay.com/photo/2021/01/26/14/51/mask-5951789_640.jpg',
  'https://cdn.pixabay.com/photo/2020/02/13/15/20/terror-4846009_640.jpg',
  'https://cdn.pixabay.com/photo/2015/10/25/17/55/woman-1006100_640.jpg',
  'https://cdn.pixabay.com/photo/2017/10/22/18/31/anxiety-2878777_640.jpg',
  'https://cdn.pixabay.com/photo/2017/05/07/19/46/desperate-2293377_640.jpg',
  'https://cdn.pixabay.com/photo/2014/09/16/01/19/girl-447701_640.jpg',
  'https://cdn.pixabay.com/photo/2017/11/13/23/28/abuse-2947090_640.jpg',
  'https://cdn.pixabay.com/photo/2019/05/16/17/02/violence-4207549_640.jpg',
  'https://cdn.pixabay.com/photo/2019/05/17/14/03/violence-against-women-4209778_640.jpg',
  'https://cdn.pixabay.com/photo/2017/08/21/19/00/woman-2666433_640.jpg',
  'https://cdn.pixabay.com/photo/2017/02/08/13/43/woman-2048905_640.jpg',
  'https://cdn.pixabay.com/photo/2014/11/23/10/49/accidental-slip-542551_640.jpg',
  'https://cdn.pixabay.com/photo/2015/10/25/17/55/woman-1006100_640.jpg',
  'https://cdn.pixabay.com/photo/2016/10/27/02/37/zombie-1773209_640.jpg',
  'https://cdn.pixabay.com/photo/2021/05/21/12/28/woman-6271033_640.jpg',
  'https://cdn.pixabay.com/photo/2021/01/26/14/51/mask-5951789_640.jpg',
  'https://cdn.pixabay.com/photo/2020/02/13/15/20/terror-4846009_640.jpg',
  'https://cdn.pixabay.com/photo/2015/10/25/17/55/woman-1006100_640.jpg',
  'https://cdn.pixabay.com/photo/2017/10/22/18/31/anxiety-2878777_640.jpg',
  'https://cdn.pixabay.com/photo/2017/10/22/18/31/anxiety-2878777_640.jpg',
  'https://cdn.pixabay.com/photo/2017/05/07/19/46/desperate-2293377_640.jpg',
  'https://cdn.pixabay.com/photo/2014/09/16/01/19/girl-447701_640.jpg',
  'https://cdn.pixabay.com/photo/2017/11/13/23/28/abuse-2947090_640.jpg',
]

const ViolencesList: FC<ViolencesListProps> = ({ level }) => {
  const { isFetching, violencesList } = useGetViolencesList()
  const { violencesListContainer } = styles
  return (
    <div className={violencesListContainer}>
      {violencesList?.map(violenceList => violenceList.level !== level ? null : (
        <Violence
          key={violenceList.id}
          title={violenceList.name}
          src={urlsImages[violenceList.id]}
          id={violenceList.id}
        />
      ))}
    </div>
  )
}

export default ViolencesList
