import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'phosphor-react';

import { VideoPlayer } from '../../components/VideoPlayer';

import { Container, BackButton } from './styles';

export function Video() {
  const location = useLocation();
  const navigate = useNavigate();
  const { videoId } = location.state;

  return (
    <Container>
      <BackButton onClick={() => navigate(-1)}>
        <ArrowLeft size={24} />
        Voltar
      </BackButton>

      {videoId.length > 0 && <VideoPlayer videoId={videoId} />}
    </Container>
  );
}
