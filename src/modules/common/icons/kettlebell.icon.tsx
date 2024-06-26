type Props = {
  className?: string;
  size?: number;
  width?: number;
  height?: number;
};

export const KettleBellIcon: React.FC<Props> = ({
  className,
  size,
  width,
  height,
}) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 32 32"
      xmlSpace="preserve"
      fill="currentColor"
      className={className}
      width={width ? width : (size ? size: 50)}
      height={height ? height : (size ? size: 50)}
    >
      <path d="M24,13.5V10c0-4.4-3.6-8-8-8s-8,3.6-8,8v3.5c-1.9,2-3,4.6-3,7.5c0,3.5,1.6,6.7,4.4,8.8C9.6,29.9,9.8,30,10,30h12 c0.2,0,0.4-0.1,0.6-0.2c2.8-2.1,4.4-5.3,4.4-8.8C27,18.1,25.9,15.4,24,13.5z M10,11.8V10c0-3.3,2.7-6,6-6s6,2.7,6,6v1.8 c-1.7-1.1-3.8-1.8-6-1.8S11.7,10.7,10,11.8z M22,20.1c-0.1,0-0.2,0-0.3,0c-0.4,0-0.8-0.3-1-0.7c-0.3-1.1-1.1-2-2-2.6 c-0.5-0.3-0.6-0.9-0.3-1.4c0.3-0.5,0.9-0.6,1.4-0.3c1.3,0.9,2.3,2.2,2.8,3.7C22.8,19.4,22.5,19.9,22,20.1z" />
    </svg>
  );
};
