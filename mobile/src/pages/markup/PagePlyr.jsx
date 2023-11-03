import LayoutMarkup from "@/layouts/LayoutMarkup";
import MarkupPageTitle from "@/components/common/MarkupPageTitle";

import React from 'react';
import {useEffect, useRef} from "react";
import {usePlyr} from "plyr-react";
import "plyr-react/plyr.css"

//source https://github.com/sampotts/plyr#the-source-setter
//options https://github.com/sampotts/plyr#options
const plyrProps = {
  source : {
    type : 'video',
    title : 'Plyr Sample Video',
    sources : [
      // {src : '/sample/video.mp4', type : 'video/mp4', size : 720,},
      {src : "dDwsRgHOMrU", provider : "youtube"},
    ],
    poster : 'https://gifpng.com/560x315/685CCD/FFEAB8/',
    /*
    previewThumbnails : {
      src : '/path/to/thumbnails.vtt',
    },
    tracks : [
      {
        kind : 'captions',
        label : 'English',
        srclang : 'en',
        src : '/path/to/captions.en.vtt',
        default : true,
      },
      {
        kind : 'captions',
        label : 'French',
        srclang : 'fr',
        src : '/path/to/captions.fr.vtt',
      },
    ],
     */
  },
  options : {
    // debug : true,
    // controls : ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen'],
    controls : ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen'],
    /* 2023-03-03 :: START ::  KSM : AUTOPLAY */
    autoplay : true,
    muted : true,
    storage : {enabled : false},
    /* // 2023-03-03 :: END :: KSM : AUTOPLAY */
    youtube : {
      autoplay : 1,
      mute : 1,
    },
    listeners : {
      // 사용 가능 리스너 : https://github.com/sampotts/plyr/blob/master/src/js/config/defaults.js
      seek : null,
      play : () => {
        console.log('[PagePlyr.jsx : play]');
      },
      pause : null,
      restart : null,
      rewind : null,
      fastForward : null,
      mute : null,
      volume : null,
      captions : null,
      download : null,
      fullscreen : null,
      pip : null,
      airplay : null,
      speed : null,
      quality : null,
      loop : null,
      language : null,
    }
  },
  
  // Direct props for inner video tag (mdn.io/video)
}

const Plyr = React.forwardRef((props, ref) => {
  const {source, options = null, ...rest} = props
  const raptorRef = usePlyr(ref, {
    source,
    options,
  })
  const plyr = raptorRef.current?.plyr;
  if (plyr) {
    plyr.on('canplay', () => {
      console.log('[PagePlyr.jsx : canplay]');
    })
    plyr.on('loadstart', () => {
      console.log('[PagePlyr.jsx : loadstart]');
    })
    plyr.on('timeupdate', () => {
      // console.log('[PagePlyr.jsx : timeupdate]');
    })
  }
  
  return <video ref={raptorRef} className="plyr-react plyr" {...rest} />
})
Plyr.displayName = "Plyr";

function PagePlyr() {
  
  const ref_plyr = useRef();
  
  return (
    <div className={`PagePlyr`}>
      <section data-seq="20230212102317305">
        {/*
        <video width="100%" preload="auto" controls loop="loop" autoPlay={true} muted="muted">
          <source src="/sample/video.mp4" type="video/mp4"/>
        </video>
        */}
        <Plyr ref={ref_plyr} {...plyrProps}/>
        <br/>
        <div className={`space-x-[10px]`}>
          <button className={'BTN BTN-1'}
                  onClick={(evt) => {
                    // https://github.com/sampotts/plyr#methods
                    const plyr = ref_plyr.current.plyr;
                    plyr.togglePlay();
                  }}
          >TOGGLE
          </button>
          <button className={'BTN BTN-1'}
                  onClick={(evt) => {
                    // https://github.com/sampotts/plyr#methods
                    const plyr = ref_plyr.current.plyr;
                    plyr.fullscreen.enter();
                  }}
          >FULL SCREEN
          </button>
        </div>
      </section>
    </div>
  );
}

PagePlyr.Layout = LayoutMarkup;
export default PagePlyr;