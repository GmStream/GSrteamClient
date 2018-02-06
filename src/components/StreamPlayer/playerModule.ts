'use strict';

// tslint:disable-next-line:no-var-requires
const assign = require('object-assign');
// tslint:disable-next-line:no-var-requires
const cx = require('classnames');
// tslint:disable-next-line:no-var-requires
const blacklist = require('blacklist');
// tslint:disable-next-line:no-var-requires
const React = require('react');
// tslint:disable-next-line:no-var-requires
const createReactClass = require('create-react-class');

export default createReactClass({
  displayName: 'VideoJS',

  componentDidMount: function componentDidMount() {
    const self: any = this;
    const player: any = videojs(this.refs.video, this.props.options).ready(function() {
      self.player = this;
      self.player.on('play', self.handlePlay);
    });
    if (this.props.onPlayerInit) {
      this.props.onPlayerInit(player);
    }
  },

  handlePlay: function handlePlay() {
    if (this.props.onPlay) {
      this.props.onPlay(this.player);
    }
  },

  render: function render() {
    const props = blacklist(
      this.props,
      'children',
      'className',
      'src',
      'type',
      'onPlay',
      'onPlayerInit'
    );
    props.className = cx(this.props.className, 'videojs', 'video-js vjs-default-skin');

    assign(props, {
      controls: true,
      ref: 'video'
    });

    return React.createElement(
      'div',
      null,
      React.createElement(
        'video',
        props,
        React.createElement('source', { src: this.props.src, type: this.props.type })
      )
    );
  }
});
