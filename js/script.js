  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '100%',
      width: '100%',
      videoId: 'iPUWa-9qgXo',
      playerVars: {
        autoplay: 1,
        controls: 0,
        showinfo: 0,
        modestbranding: 1,
        loop: 0,
        autohide: 0
      },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }

  function onPlayerReady(event) {
    // Add an event listener to trigger the custom function when the video is one second before the end
    player.addEventListener('onTimeUpdate', function() {
      var currentTime = player.getCurrentTime();
      var duration = player.getDuration();
      // Pause the video when it's one second before the end
      if (duration - currentTime <= 1) {
        player.pauseVideo();
      }
    });

    // Optional: You can also start playing the video when it's ready
    // event.target.playVideo();
  }

  function onPlayerStateChange(event) {
    // You can handle state changes if needed
    // For example, you might want to pause the video if it's finished
    if (event.data == YT.PlayerState.ENDED) {
      player.pauseVideo();
    }
  }
