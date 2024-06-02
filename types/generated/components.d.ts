import type { Schema, Attribute } from '@strapi/strapi';

export interface TopicsContent extends Schema.Component {
  collectionName: 'components_topics_contents';
  info: {
    displayName: 'Content';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    video: Attribute.JSON & Attribute.CustomField<'plugin::video-field.video'>;
  };
}

export interface VideoTopicsVideoTopics extends Schema.Component {
  collectionName: 'components_video_topics_video_topics';
  info: {
    displayName: 'VideoTopics';
  };
  attributes: {
    name: Attribute.String;
    discription: Attribute.RichText;
    videoUrl: Attribute.Media;
  };
}

export interface VideoVideos extends Schema.Component {
  collectionName: 'components_video_videos';
  info: {
    displayName: 'Videos';
    icon: 'server';
    description: '';
  };
  attributes: {
    video: Attribute.JSON & Attribute.CustomField<'plugin::video-field.video'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'topics.content': TopicsContent;
      'video-topics.video-topics': VideoTopicsVideoTopics;
      'video.videos': VideoVideos;
    }
  }
}
