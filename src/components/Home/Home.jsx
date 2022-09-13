import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchVideos } from '../../redux/actions';
import { useEffect } from 'react';

export default function Home() {
    const videos= useSelector((state)=>state.searchForKeyword);
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);
  return (
    <div className="recipelist">
      {videos.map((video) => {
          return (
            <div className="each">
              <img
                className="recipelistimage"
                src={video.videoId}
                alt="..."
              />
              
              </div>
          );
        })}
      </div>
    
  );
}
