import { useState, useRef, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

export default function Home() {
  const [audioFile, setAudioFile] = useState(null);
  const [audioUrl, setAudioUrl] = useState('');
  const audioRef = useRef();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'audio/mp3') {
      setAudioFile(file);
      setAudioUrl(URL.createObjectURL(file));
    }
  };

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  useEffect(() => {
    return () => {
      if (audioUrl) URL.revokeObjectURL(audioUrl);
    };
  }, [audioUrl]);

  return (
    <div className='container mx-auto px-4 h-screen flex flex-col justify-center items-center'>
      <Card>
        <div className='p-5'>
          <input type='file' onChange={handleFileChange} accept='.mp3' />
          {audioFile && (
            <>
              <audio ref={audioRef} controls src={audioUrl} className='mt-4'>
                Your browser does not support the audio element.
              </audio>
              <div className='flex gap-4 mt-4'>
                <Button onClick={playAudio}>Play</Button>
                <Button onClick={pauseAudio}>Pause</Button>
              </div>
            </>
          )}
        </div>
      </Card>
    </div>
  );
}