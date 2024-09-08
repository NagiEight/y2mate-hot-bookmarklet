javascript: (() => {
    function youtube_parser(url){
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        var match = url.match(regExp);
        return (match&&match[7].length==11)? match[7] : false;
    }
    let videoId = window.location.href;
    let url = "https://y2mate.com/youtube/"+youtube_parser(videoId);
    window.open(url, '_blank').focus();
  })();