interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fill?: boolean;
  priority?: boolean;
}

export function Image({ fill, priority, className, src, alt, ...props }: ImageProps) {
  if (fill) {
    return (
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${className || ''}`}
        loading={priority ? "eager" : "lazy"}
        {...props}
      />
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      {...props}
    />
  )
}
