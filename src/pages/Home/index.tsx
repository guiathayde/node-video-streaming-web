import { MouseEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { Container, Button } from './styles';

export function Home() {
  const navigate = useNavigate();

  const [videos, setVideos] = useState<string[]>([]);

  function loadVideo(
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    videoId: string
  ) {
    e.preventDefault();

    navigate('/video', {
      state: { videoId },
    });
  }

  useEffect(() => {
    api
      .get('/')
      .then((response) => setVideos(response.data))
      .catch((error) => console.error(JSON.stringify(error, null, 2)));
  }, []);

  return (
    <Container>
      {videos.length > 0 &&
        videos.map((videoId) => (
          <Button key={videoId} onClick={(e) => loadVideo(e, videoId)}>
            {videoId}
          </Button>
        ))}
    </Container>
  );
}
