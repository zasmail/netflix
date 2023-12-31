import * as React from "react";
type YouTubeVideoProps = {
  className?: string;
  title: string;
  videoId: string;
  aspectRatio?: number;
  startAt?: number;
  showAllRelatedVideos?: boolean;
  controls?: boolean;
  autoplay?: boolean;
  muted?: boolean;
  privacyMode?: boolean;
};
export declare function YouTubeVideo({
  className,
  title,
  videoId,
  aspectRatio,
  startAt,
  showAllRelatedVideos,
  controls,
  autoplay,
  muted,
  privacyMode,
  ...props
}: YouTubeVideoProps): React.JSX.Element;
export {};
