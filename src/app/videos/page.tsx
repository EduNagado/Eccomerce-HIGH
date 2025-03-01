'use client';
import { useState } from 'react';

export default function Videos() {
    const [mainVideo, setMainVideo] = useState("https://www.youtube.com/embed/WdXsvFJfh1I?modestbranding=1");

    const videos = [
        { id: 1, src: "https://www.youtube.com/embed/Jn79oDAiY-4?modestbranding=1", title: "Song" },
        { id: 2, src: "https://www.youtube.com/embed/a5KIu9cTf3c?modestbranding=1", title: "New Drop" },
        { id: 3, src: "https://www.youtube.com/embed/srqBRo1x7Ko?modestbranding=1", title: "HIGH x Thrasher" },
        { id: 4, src: "https://www.youtube.com/embed/BrN5Gglz7Yg?modestbranding=1", title: "High® x Block" },
        { id: 5, src: "https://www.youtube.com/embed/kbH_eydvc5Q?modestbranding=1", title: "Oasis" },
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
            <iframe
                width="760"
                height="515"
                src={mainVideo}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <h2 style={{ marginTop: '20px', textAlign: 'center', fontSize: '24px' }}>More Videos</h2>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                {videos.map(video => (
                    <div key={video.id} style={{ margin: '0 10px', textAlign: 'center' }}>
                        <iframe
                            width="200"
                            height="113"
                            src={video.src}
                            title={video.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            onClick={() => setMainVideo(video.src)}
                            style={{ cursor: 'pointer' }}
                        ></iframe>
                        <h3>{video.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}