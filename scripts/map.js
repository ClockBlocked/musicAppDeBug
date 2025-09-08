  const IDS = Object.freeze({
    themeToggle: "theme-toggle",
    globalSearchTrigger: "global-search-trigger",
    searchDialog: "search-dialog",
    globalSearchForm: "global-search-form",
    globalSearchInput: "global-search-input",
    recentSearchesList: "recent-searches-list",
    popoverPortal: "popover-portal",
    willHideMenu: "will-hide-menu",

    dropdownMenu: "dropdown-menu",
    dropdownClose: "dropdown-close",
    favoriteSongs: "favorite-songs",
    favoriteArtists: "favorite-artists",
    createPlaylist: "create-playlist",
    favoriteSongsCount: "favorite-songs-count",
    favoriteArtistsCount: "favorite-artists-count",
    recentlyPlayed: "recently-played",
    queueView: "queue-view",
    recentCount: "recent-count",
    queueCount: "queue-count",
    recentlyPlayedSection: "recently-played-section",
    randomAlbumsSection: "random-albums-section",
    favoriteArtistsSection: "favorite-artists-section",
    playlistsSection: "playlists-section",
    favoriteSongsSection: "favorite-songs-section",
    searchMusic: "search-music",
    shuffleAll: "shuffle-all",
    appSettings: "app-settings",
    aboutApp: "about-app",
    dynamicContent: "dynamic-content",
    contentLoading: "content-loading",
    albumsContainer: "albums-container",
    artistsGrid: "artists-grid",
    artistSearch: "artist-search",
    genreFilters: "genre-filters",
    seekTooltip: "seek-tooltip",
  });

  const CLASSES = Object.freeze({
    hidden: "hidden",
    searchDialogOpening: "search-dialog-opening",
    searchDialogClosing: "search-dialog-closing",
    hasSong: "has-song",
    light: "light",
    medium: "medium",
    show: "show",
    active: "active",
    marquee: "marquee",
    repeatOne: "repeat-one",
    animateRotate: "animate__animated animate__rotateIn",
    animateFadeIn: "animate__animated animate__fadeIn",
    animateZoomIn: "animate__animated animate__zoomIn",
    animatePulse: "animate__animated animate__pulse",
    imageFallback: "image-fallback",
    imageLoaded: "image-loaded",
    imageError: "image-error",
    imageLoading: "image-loading",
    playing: "playing",
  });

  const MUSIC_PLAYER = (() => {
    const parent = "#musicPlayer";
    return Object.freeze({
      root: parent,
      close: `${parent} .close`,
      tabs: `${parent} .tab`,
      activeTab: `${parent} .tab.active`,
      content: `${parent} .content`,
      activeContent: `${parent} .content.active`,
      controls: `${parent} .controls .btn`,
      actions: `${parent} .actions .action`,
      playerHandle: `${parent} #handle`,
      playerCloseBtn: `${parent} .close`,
      albumCover: `${parent} #cover`,
      songTitle: `${parent} #title`,
      artistName: `${parent} #artist`,
      albumName: `${parent} #album`,
      currentTime: `${parent} #current`,
      totalTime: `${parent} #total`,
      progressBar: `${parent} #progressBar`,
      progressFill: `${parent} #progressFill`,
      progressThumb: `${parent} #progressThumb`,
      playBtn: `${parent} #playBtn`,
      prevBtn: `${parent} #prevBtn`,
      nextBtn: `${parent} #nextBtn`,
      rewindBtn: `${parent} #rewindBtn`,
      forwardBtn: `${parent} #forwardBtn`,
      favoriteBtn: `${parent} #favoriteBtn`,
      queueBtn: `${parent} #queueBtn`,
      shareBtn: `${parent} #shareBtn`,
      moreBtn: `${parent} #moreBtn`,
      queueList: `${parent} #queueList`,
      recentList: `${parent} #recentList`,
    });
  })();

  const NAVBAR = Object.freeze({
    nowPlayingArea: "now-playing-area",
    albumArtwork: "#NAVBar .albumArtwork",
    artistName: "#artistName-NAVBar",
    songName: "#songName-NAVBar",
    
    playIndicator: "play-indicator",
    previous: "prev-btn-navbar",
    next: "next-btn-navbar",
    playPause: "play-pause-navbar",
    playIcon: "play-icon-navbar",
    pauseIcon: "pause-icon-navbar",
    menuTrigger: "menu-trigger",      
  });

  const MODALS = Object.freeze({
    modalClose: ".modal .close",
    dialogClose: "#search-dialog .close",
    dropdownClose: "#dropdown-menu .close",
  });

  const ROUTES = Object.freeze({
    HOME: "home",
    ARTIST: "artist",
    ALL_ARTISTS: "allArtists",
    SEARCH: "search",
    ALBUM: "album",
  });

  const THEMES = Object.freeze({
    DARK: "dark",
    MEDIUM: "medium",
    LIGHT: "light",
  });

  const STORAGE_KEYS = Object.freeze({
    THEME_PREFERENCE: "theme-preference",
    RECENT_SEARCHES: "recentSearches",
    FAVORITE_SONGS: "favoriteSongs",
    FAVORITE_ARTISTS: "favoriteArtists",
    FAVORITE_ALBUMS: "favoriteAlbums",
    RECENTLY_PLAYED: "recentlyPlayed",
    PLAYLISTS: "playlists",
    QUEUE: "queue",
  });

  const ICONS = Object.freeze({
    dark: '<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 116.707 2.707a8.001 8.001 0 1010.586 10.586z"/></svg>',
    medium: '<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2L13 9h7l-5.5 4 2 7L10 16l-6.5 4 2-7L1 9h7l2-7z"/></svg>',
    light:
      '<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"/></svg>',
    play: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',
    pause: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>',
    next: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/></svg>',
    prev: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg>',
    shuffle:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"/></svg>',
    repeat: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/></svg>',
    heart:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>',
    close: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>',
  });

  const AUDIO_FORMATS = Object.freeze(["mp3", "ogg", "m4a"]);

  const REPEAT_MODES = Object.freeze({
    OFF: "off",
    ALL: "all",
    ONE: "one",
  });

  const NOTIFICATION_TYPES = Object.freeze({
    INFO: "info",
    SUCCESS: "success",
    WARNING: "warning",
    ERROR: "error",
  });

  const getElement = (id) => {
    const element = document.getElementById(id);
    if (!element) {
      console.warn(`Element with ID '${id}' not found`);
    }
    return element;
  };

  const getElements = (selector) => {
    return document.querySelectorAll(selector);
  };

  const getElementInContext = (contextSelector, elementSelector) => {
    const context = document.querySelector(contextSelector);
    return context ? context.querySelector(elementSelector) : null;
  };

  const $ = new Proxy(
    {},
    {
      get(_, key) {
        const id = IDS[key];
        return () => (id ? document.getElementById(id) : null);
      },
    }
  );

  function $byId(id) {
    return document.getElementById(id);
  }

  function $bySelector(selector) {
    return document.querySelector(selector);
  }

  function $allBySelector(selector) {
    return document.querySelectorAll(selector);
  }

  function $inContext(contextId, elementClass) {
    const context = document.getElementById(contextId);
    return context ? context.querySelector(`.${elementClass}`) : null;
  }

  window.IDS = IDS;
  window.CLASSES = CLASSES;
  window.MUSIC_PLAYER = MUSIC_PLAYER;
  window.NAVBAR = NAVBAR;
  window.MODALS = MODALS;
  window.ROUTES = ROUTES;
  window.THEMES = THEMES;
  window.STORAGE_KEYS = STORAGE_KEYS;
  window.ICONS = ICONS;
  window.AUDIO_FORMATS = AUDIO_FORMATS;
  window.REPEAT_MODES = REPEAT_MODES;
  window.NOTIFICATION_TYPES = NOTIFICATION_TYPES;
  window.$ = $;
  window.$byId = $byId;
  window.$bySelector = $bySelector;
  window.$allBySelector = $allBySelector;
  window.$inContext = $inContext;
  window.getElement = getElement;
  window.getElements = getElements;
  window.getElementInContext = getElementInContext;
