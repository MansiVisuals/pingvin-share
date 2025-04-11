const Logo = ({ height }: { height: number }) => {
  const width = (height * 16) / 9; // Calculate width based on 16:9 ratio
  return <img src="/img/logo.png" alt="logo" height={height} width={width} />;
};

export default Logo;
